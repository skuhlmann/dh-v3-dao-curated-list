import { H2, Link, ParMd, SingleColumnLayout } from "@daohaus/ui";
import styled from "styled-components";
import { DAOCHAIN, DAOID } from "../utils/constants";
import { useRecords } from "../utils/useRecords";

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

export const Home = () => {
  const { items } = useRecords({
    daoId: DAOID,
    chainId: DAOCHAIN,
  });

  return (
    <SingleColumnLayout>
      <H2>Free Ryder DAO's Favorite Apps</H2>
      <ParMd style={{ marginBottom: "2.4rem" }}>
        Get started by editing src/pages/Home.tsx
      </ParMd>
      <LinkBox>
        <Link href="https://github.com/HausDAO/monorepo" linkType="external">
          Github
        </Link>
        <Link href="https://admin.daohaus.fun/" linkType="external">
          Admin
        </Link>
        <Link href="/formtest">Example Form</Link>
      </LinkBox>
    </SingleColumnLayout>
  );
};
