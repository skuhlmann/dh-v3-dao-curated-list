import React from "react";
import { Link, ParMd } from "@daohaus/ui";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 3rem;
`;

export type AppObj = {
  link?: string;
  title?: string;
  description?: string;
};

export const AppLink = ({ appObj }: { appObj?: AppObj }) => {
  if (!appObj) return null;
  return (
    <LinkContainer>
      <Link href={appObj?.link} linkType="external">
        {appObj.title}
      </Link>{" "}
      <ParMd>{appObj.description}</ParMd>
    </LinkContainer>
  );
};
