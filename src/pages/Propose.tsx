import { useDHConnect } from "@daohaus/connect";
import { FormBuilder } from "@daohaus/form-builder";
import { TXBuilder } from "@daohaus/tx-builder";

import { FORM } from "../legos/forms";
import { DAOCHAIN, DAOID, SAFEID } from "../utils/constants";

export const Propose = () => {
  const { provider } = useDHConnect();

  // todo - pass onSucess to redirect to proposals

  return (
    <TXBuilder
      provider={provider}
      chainId={DAOCHAIN}
      daoId={DAOID}
      safeId={SAFEID}
      appState={{}}
    >
      <FormBuilder form={FORM.VERIFY_APP} targetNetwork={DAOCHAIN} />
    </TXBuilder>
  );
};
