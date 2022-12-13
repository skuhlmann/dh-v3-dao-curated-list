import { useQuery } from "react-query";

import { ValidNetwork, Keychain } from "@daohaus/keychain-utils";
import { listRecords, MolochV3Record } from "@daohaus/moloch-v3-data";

const graphApiKeys = { "0x1": import.meta.env.VITE_GRAPH_API_KEY_MAINNET };

const fetchRecords = async ({
  daoId,
  chainId,
}: {
  daoId: string;
  chainId: ValidNetwork;
}) => {
  try {
    return listRecords({
      networkId: chainId,
      graphApiKeys: graphApiKeys,
      filter: { dao: daoId, table: "verifiedAppSignal" },
      paging: { pageSize: 100, offset: 0 },
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message as string);
  }
};

export const useRecords = ({
  daoId,
  chainId,
}: {
  daoId: string;
  chainId: ValidNetwork;
}): { items: MolochV3Record[] | undefined } => {
  const { data, ...rest } = useQuery(
    ["recordData", { daoId, chainId }],
    () =>
      fetchRecords({
        daoId,
        chainId: chainId as ValidNetwork,
      }),
    { enabled: !!daoId && !!chainId }
  );

  return { items: data?.items };
};
