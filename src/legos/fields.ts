import { FieldLego } from "@daohaus/form-builder";

export const FIELD: Record<string, FieldLego> = {
  TITLE: {
    id: "title",
    type: "input",
    label: "App Name",
    placeholder: "Enter name",
  },
  DESCRIPTION: {
    id: "description",
    type: "textarea",
    label: "Description",
    placeholder: "Enter description",
  },
  LINK: {
    id: "link",
    type: "input",
    label: "Link",
    placeholder: "http://",
    expectType: "url",
  },
  PROP_OFFERING: {
    id: "proposalOffering",
    // @ts-ignore
    type: "proposalOffering",
  },
};
