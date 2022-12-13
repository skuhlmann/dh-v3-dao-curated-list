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

  console.log("items", items);

  return (
    <SingleColumnLayout>
      <H2>Warcamp DAO's Favorite Apps</H2>
      <ParMd style={{ marginBottom: "2.4rem" }}>
        A List of DAO apps curated by this{" "}
        <Link
          href="https://admin.daohaus.club/#/molochv3/0x5/0xc035dd7cda32ae73f0f306ed56658527aad47648"
          linkType="external"
        >
          DAO
        </Link>
      </ParMd>

      <ParMd style={{ marginBottom: "2.4rem" }}>
        Submit your for consideration today!
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
