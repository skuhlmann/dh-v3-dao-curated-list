import { useDHConnect } from "@daohaus/connect";
import { FormBuilder } from "@daohaus/form-builder";
import { TXBuilder } from "@daohaus/tx-builder";

import { FORM } from "../legos/forms";

export const Propose = () => {
  const { provider } = useDHConnect();

  return (
    <TXBuilder
      provider={provider}
      chainId="0x64"
      daoId="0x7e72ba58d3d331d339566db9ff3ec184b293477d"
      safeId="0xb8b9f7047223b82578f03b141db405ed1a41dda0"
      appState={{}}
    >
      <FormBuilder form={FORM.VERIFY_APP} targetNetwork="0x64" />
    </TXBuilder>
  );
};
