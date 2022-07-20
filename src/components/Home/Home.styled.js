import styled from "styled-components";



export const HomeContent = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 3rem;
  @media (max-width: 600px) {
    gap: 2rem;
  }
`;