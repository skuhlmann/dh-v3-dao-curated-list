import { fromWei } from "@daohaus/utils";
import { isValidNetwork } from "@daohaus/keychain-utils";

// import { useConnectedMember, useDao } from "@daohaus/moloch-v3-context";
import { Buildable, ParMd, TintSecondary } from "@daohaus/ui";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDHConnect } from "@daohaus/connect";
import { DAOCHAIN, PROP_OFFERING } from "../utils/constants";

export const ProposalOffering = (props: Buildable<{ id?: string }>) => {
  const { id = "proposalOffering" } = props;
  const daochain = DAOCHAIN;
  const { networks } = useDHConnect();
  const { register, setValue } = useFormContext();
  const [requiresOffering, setRequiresOffering] = useState(false);

  const networkTokenSymbol =
    isValidNetwork(daochain) && networks?.[daochain]?.symbol;

  register(id);

  useEffect(() => {
    setRequiresOffering(true);
    setValue(id, PROP_OFFERING);
    return;

    return;
  }, [setValue, id]);

  if (!requiresOffering || !networkTokenSymbol) return null;

  return (
    <ParMd>
      Proposal Offering:{" "}
      <TintSecondary>
        {" "}
        {fromWei(PROP_OFFERING)} {networkTokenSymbol}
      </TintSecondary>
    </ParMd>
  );
};
