import styled from "styled-components";

///VARIABLES DE CSS

// const main = "blue";
const second = "yellow";
const border = "red";
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
    border: 2px solid ${border};
    border-radius: 0 0 4px 4px;
    border-top: none;
    padding: 0.25rem;
  }
`;

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
  border: 2px solid ${border};
  border-radius: 4px;
  padding: 1rem;
`;

//Componente Ficha

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const OutputContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
`;

const InputField = styled.input`
  width: 15rem;
  padding: 0.25rem;
  margin: 0.5rem 0 1rem 0;
  border: 2px solid ${border};
  border-radius: 4px;
`;

const OutputList = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${border};
  border-radius: 4px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
`;

//Componentes genéricos
const Button = styled.a`
width: fit-content;  
border: 2px solid ${border};
  border-radius: 4px;
  padding: 0.2rem 1rem;
  text-align: center;
  align-self:center;

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
  InputContainer,
  OutputContainer,
  InputField,
  OutputList,
  NavMenuIcon,
  Listed,
  HomeContent,
  Card,
  Button,
  Foot,
};
