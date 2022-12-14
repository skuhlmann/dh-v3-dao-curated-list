import { CoreFieldLookup } from "@daohaus/form-builder";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";

import { ProposalOffering } from "../components/ProposalOffering";

export const CustomFields = {
  ...CoreFieldLookup,
  proposalOffering: ProposalOffering,
};

export type CustomFieldLego = FieldLegoBase<typeof CustomFields>;
export type CustomFormLego = FormLegoBase<typeof CustomFields>;
