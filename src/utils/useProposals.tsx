import { useQuery } from "react-query";

import { ValidNetwork, Keychain } from "@daohaus/keychain-utils";
import { nowInSeconds } from "@daohaus/utils";
import { listProposals, MolochV3Proposal } from "@daohaus/moloch-v3-data";

const graphApiKeys = { "0x1": import.meta.env.VITE_GRAPH_API_KEY_MAINNET };

const fetchProposals = async ({
  daoId,
  chainId,
}: {
  daoId: string;
  chainId: ValidNetwork;
}) => {
  try {
    return listProposals({
      networkId: chainId,
      graphApiKeys: graphApiKeys,
      filter: {
        dao: daoId,
        title: "Verified App List Submission",
        graceEnds_gte: nowInSeconds().toFixed(),
      },
      paging: { pageSize: 100, offset: 0 },
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message as string);
  }
};

export const useProposals = ({
  daoId,
  chainId,
}: {
  daoId: string;
  chainId: ValidNetwork;
}): { items: MolochV3Proposal[] | undefined } => {
  const { data, ...rest } = useQuery(
    ["recordData", { daoId, chainId }],
    () =>
      fetchProposals({
        daoId,
        chainId: chainId as ValidNetwork,
      }),
    { enabled: !!daoId && !!chainId }
  );

  return { items: data?.items };
};
