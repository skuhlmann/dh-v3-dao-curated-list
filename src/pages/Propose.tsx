import { useDHConnect } from "@daohaus/connect";
import { FormBuilder } from "@daohaus/form-builder";
import { TXBuilder } from "@daohaus/tx-builder";
import { useNavigate } from "react-router-dom";
import { CustomFields } from "../legos/config";

import { FORM } from "../legos/forms";
import { DAOCHAIN, DAOID, SAFEID } from "../utils/constants";

export const Propose = () => {
  const { provider, address } = useDHConnect();
  const navigate = useNavigate();

  const onFormComplete = () => {
    navigate(`/submissions`);
  };

  return (
    <TXBuilder
      provider={provider}
      chainId={DAOCHAIN}
      daoId={DAOID}
      safeId={SAFEID}
      appState={{ connectedAddress: address }}
    >
      <FormBuilder
        form={FORM.VERIFY_APP}
        targetNetwork={DAOCHAIN}
        onSuccess={onFormComplete}
        customFields={CustomFields}
      />
    </TXBuilder>
  );
};
