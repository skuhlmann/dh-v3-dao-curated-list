import { FormLego } from "@daohaus/form-builder";
import { FIELD } from "./fields";
import { TX } from "./tx";

export const FORM: Record<string, FormLego> = {
  VERIFY_APP: {
    id: "VERIFY_APP",
    title: "Tell Us About Your App",
    description: "Maybe we'll list it on our website!",
    requiredFields: { title: true, description: true, link: true },
    log: true,
    tx: TX.VERIFY_APP,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      // ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
};
