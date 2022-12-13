import { POSTER_TAGS } from "@daohaus/utils";
import { buildMultiCallTX } from "@daohaus/tx-builder";
import { CONTRACT } from "./contract";

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
              title: `.formValues.title`,
              table: { type: "static", value: "verifiedAppSignal" },
              queryType: { type: "static", value: "list" },
              description: `.formValues.description`,
              link: `.formValues.link`,
            },
          },
          { type: "static", value: POSTER_TAGS.daoDatabaseProposal },
        ],
      },
    ],
  }),
};
