import { H2, Link, ParMd, SingleColumnLayout } from "@daohaus/ui";
import styled from "styled-components";
import { AppLink, AppObj } from "../components/AppLink.tsx";
import { DAOCHAIN, DAOID } from "../utils/constants";
import { useRecords } from "../utils/useRecords";

const LinkBox = styled.div`
  width: 50%;
  margin-top: 3rem;
`;

export const Home = () => {
  const { items } = useRecords({
    daoId: DAOID,
    chainId: DAOCHAIN,
  });

  console.log("items", items);

  return (
    <SingleColumnLayout>
      <H2 style={{ marginBottom: "2.4rem" }}>
        Curatoooors DAO's Favorite Apps
      </H2>
      <ParMd style={{ marginBottom: "2.4rem" }}>
        A List of DAO apps curated by this{" "}
        <Link
          href={`https://admin.daohaus.club/#/molochv3/${DAOCHAIN}/${DAOID}`}
          linkType="external"
        >
          DAO
        </Link>
      </ParMd>

      <ParMd style={{ marginBottom: "2.4rem", width: "60%" }}>
        Submit your app for consideration today! Submitting a proposal will cost
        1 XDAI (for spam prevention). If your app is accepted you will recieve 1
        loot share in the DAO!
      </ParMd>

      <LinkBox>
        {items &&
          items.map((app) => {
            return (
              <AppLink appObj={app.parsedContent as AppObj} key={app.id} />
            );
          })}
      </LinkBox>
    </SingleColumnLayout>
  );
};
