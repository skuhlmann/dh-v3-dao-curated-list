import {
  Card,
  H2,
  ParMd,
  SingleColumnLayout,
  Link,
  widthQuery,
  ParLg,
  Button,
  useBreakpoint,
  AddressDisplay,
} from "@daohaus/ui";
import styled, { useTheme } from "styled-components";
import { charLimit } from "@daohaus/utils";

import { HausAnimated } from "../components/HausAnimated";
import { DAOCHAIN, DAOID } from "../utils/constants";
import { useProposals } from "../utils/useProposals";

const ProposalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: 50%;
`;

const ProposalCardContainer = styled(Card)`
  display: flex;
  gap: 3rem;
  width: 100%;

  margin-bottom: 3rem;
  padding: 2.3rem 2.5rem;
  border: none;
  min-height: 13.8rem;
  @media ${widthQuery.sm} {
    gap: 2rem;
    flex-direction: column;
    height: auto;
    margin-bottom: 2rem;
  }
`;

const OverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;
  height: 100%;
  .title {
    margin-bottom: 2rem;
  }
  .description {
    margin-bottom: auto;
  }
  @media ${widthQuery.md} {
    .description {
      margin-bottom: 2rem;
    }
  }
`;

const SubmittedContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 3rem 0;
  .submitted-by {
    margin-right: 1rem;
  }
  @media ${widthQuery.sm} {
    flex-direction: column;
  }
`;

export const Proposals = () => {
  const { items } = useProposals({
    daoId: DAOID,
    chainId: DAOCHAIN,
  });
  const theme = useTheme();

  console.log("items", items);

  return (
    <SingleColumnLayout>
      <H2>
        {items && items.length} Active Submission
        {items && items.length > 1 && "s"}
      </H2>

      <ProposalBox>
        {items &&
          items.map((proposal) => (
            <ProposalCardContainer key={proposal.id} width="150rem">
              <OverviewBox>
                <ParLg className="title">{proposal.title}</ParLg>

                <Link href={proposal.contentURI} linkType="external">
                  {charLimit(proposal.description, 145)}
                </Link>

                <SubmittedContainer>
                  <ParMd
                    color={theme.secondary.step11}
                    className="submitted-by"
                  >
                    Submitted by
                  </ParMd>
                  <AddressDisplay address={proposal.createdBy} truncate copy />
                </SubmittedContainer>

                <Link
                  href={`https://admin.daohaus.club/#/molochV3/${DAOCHAIN}/${DAOID}/proposals/${proposal.proposalId}`}
                  linkType="external"
                >
                  View Proposal in DAO
                </Link>
              </OverviewBox>
            </ProposalCardContainer>
          ))}
      </ProposalBox>

      <Link
        href={`https://admin.daohaus.club/#/molochV3/${DAOCHAIN}/${DAOID}/proposals/31`}
        linkType="external"
      >
        All DAO Proposals
      </Link>
    </SingleColumnLayout>
  );
};
