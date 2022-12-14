import { buildMultiCallTX } from "@daohaus/tx-builder";
import { CONTRACT } from "./contract";
import { NestedArray, POSTER_TAGS, ValidArgType } from "@daohaus/utils";

export enum ProposalTypeIds {
  Signal = "SIGNAL",
  IssueSharesLoot = "ISSUE",
  AddShaman = "ADD_SHAMAN",
  TransferErc20 = "TRANSFER_ERC20",
  TransferNetworkToken = "TRANSFER_NETWORK_TOKEN",
  UpdateGovSettings = "UPDATE_GOV_SETTINGS",
  UpdateTokenSettings = "TOKEN_SETTINGS",
  TokensForShares = "TOKENS_FOR_SHARES",
  GuildKick = "GUILDKICK",
  WalletConnect = "WALLETCONNECT",
  VerifyApp = "VERIFY_APP",
}

const nestInArray = (arg: ValidArgType | ValidArgType[]): NestedArray => {
  return {
    type: "nestedArray",
    args: Array.isArray(arg) ? arg : [arg],
  };
};

export const TX = {
  VERIFY_APP: buildMultiCallTX({
    id: "SIGNAL",
    JSONDetails: {
      type: "JSONDetails",
      jsonSchema: {
        title: { type: "static", value: "Verified App List Submission" },
        description: `.formValues.title`,
        contentURI: `.formValues.link`,
        contentURIType: { type: "static", value: "url" },
        proposalType: { type: "static", value: ProposalTypeIds.Signal },
      },
    },
    actions: [
      {
        contract: CONTRACT.POSTER,
        method: "post",
        args: [
          {
            type: "JSONDetails",
            jsonSchema: {
              table: { type: "static", value: "verifiedAppSignal" },
              daoId: `.daoId`,
              queryType: { type: "static", value: "list" },
              title: `.formValues.title`,
              description: `.formValues.description`,
              link: `.formValues.link`,
            },
          },
          { type: "static", value: POSTER_TAGS.daoDatabaseProposal },
        ],
      },
      {
        contract: CONTRACT.CURRENT_DAO,
        method: "mintLoot",
        args: [
          nestInArray(".connectedAddress"),
          nestInArray({ type: "static", value: "1000000000000000000" }),
        ],
      },
    ],
  }),
};
