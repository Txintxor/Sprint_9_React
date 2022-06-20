import styled from "styled-components";

///VARIABLES DE CSS

// const main = "blue";
const second = "yellow";
// const border = "red";
// const font= "black";
const secondFont = "white";
const barBack = "rgb(78, 72, 72)";

//STYLED COMPONENTS

//Barra de navegación
const NaviBar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background: ${barBack};
  color: ${secondFont};

  @media (max-width: 600px) {
    justify-content: space-around;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;

  @media (max-width: 600px) {
    display: none;
    flex-direction: column;
    position: absolute;
    right: -30px;
    top: 50px;
    background-color: ${barBack};
    border: 2px solid ${second};
    border-radius: 0 0 4px 4px;
    border-top: none;
    padding: 0.25rem;
  }
`;

// const NavLinksMini = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   margin-right: 1rem;
//   flex-direction: column;
//   position: absolute;
//   right: -30px;
//   top: 50px;
//   background-color: ${barBack};
//   border: 2px solid ${second};
//   border-radius: 0 0 4px 4px;
//   border-top: none;
//   padding: 0.25rem;
// `;

const Listed = styled.li`
  padding: 0 1rem;
`;

const NavMenuIcon = styled.a`
  display: none;

  @media (max-width: 600px) {
    display: block;
    position: absolute;
    right: 8px;
  }
`;

//Componente HOME
const HomeContent = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  @media (max-width: 600px) {
    margin-top: 8rem;
    gap: 2rem;
  }
`;

const Card = styled.a`
  background-color: ${barBack};
  color: ${secondFont};
  border: 2px solid ${second};
  border-radius: 4px;
  padding: 1rem;
`;

//Componentes genéricos
const Button = styled.a`
  width: fit-content;
  border: 2px solid ${barBack};
  border-radius: 4px;
  padding: 0.25rem;
`;

//Footer
const Foot = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${barBack};
  color: ${secondFont};
`;

export {
  NaviBar,
  NavLinks,
  // NavLinksMini,
  NavMenuIcon,
  Listed,
  HomeContent,
  Card,
  Button,
  Foot,
};
