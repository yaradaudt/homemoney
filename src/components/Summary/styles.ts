import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media(max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: -3.5rem;
  }
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  @media(max-width: 767px) {
    padding: 1rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 140%;

    @media (max-width: 767px) {
      margin-top: 0.5rem;
      font-size: 1.5rem;
    }
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
