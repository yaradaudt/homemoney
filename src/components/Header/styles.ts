import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;

  @media (max-width: 767px) {
    padding: 2.5rem 0 6rem;
  }
  `;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 767px) {
    justify-content: space-around;

    .logo {
      width: 10rem;
    }
  }
`;

export const NewTransactionButton = styled.button`
height: 50px;
padding: 0.75rem 1.25rem;
border: none;
background: ${(props) => props.theme["green-500"]};
color: ${(props) => props.theme["white"]};
font-weight: 700;
line-height: 160%;
border-radius: 6px;
cursor: pointer;

@media(max-width: 767px) {
  padding: 0.5rem 1rem;
  font-size: 14px;
}

&:hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
}
`
