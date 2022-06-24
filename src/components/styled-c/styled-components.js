import styled from "styled-components";

///VARIABLES DE CSS

const border = "#6B9E72";
const whiteC = "#EFF2FB";
const barBack = "#406345";

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
  color: ${whiteC};

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
  gap: 3rem;
  @media (max-width: 600px) {
    gap: 2rem;
  }
`;

const Card = styled.a`
  background-color: ${barBack};
  color: ${whiteC};
  border: 2px solid ${border};
  border-radius: 4px;
  padding: 3rem;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 1rem;
    margin:0.75rem;
  }
 
`;

//Componente Ficha

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const OutputContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  &:media (max-width: 900px) {
    width: fit-content;
  }
`;

const InputField = styled.input`
  width: 15rem;
  height: 1.5rem;
  padding: 0.35rem;
  margin: 1rem 0;
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
  background-color: ${whiteC};
  height: fit-content;
`;
const FormList = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid ${border};
  border-radius: 4px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  font: inherit;
  color: inherit;
`;

//Footer
const Foot = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  padding: .5rem 0;
  flex-direction: row;
  justify-content: center;
  background: ${barBack};
  color: ${whiteC};
`;

//Componentes genéricos
const Button = styled.a`
  width: fit-content;
  border: 2px solid ${border};
  border-radius: 4px;
  padding:  .2rem .4rem;
  text-align: center;
  align-self: center;
  background-color: ${whiteC};
`;

const Button2 = styled.button`
  width: fit-content;
  border: 2px solid ${border};
  border-radius: 4px;
  padding:  .2rem .4rem;
  text-align: center;
  align-self: center;
  background-color: ${whiteC};
  margin: 1rem 0;
`;

const Label = styled.label`
  font-weight: 800;
`;


export {
  NaviBar,
  NavLinks,
  InputContainer,
  OutputContainer,
  InputField,
  OutputList,
  FormList,
  NavMenuIcon,
  Listed,
  HomeContent,
  Card,
  Button,
  Button2,
  Label,
  Foot,
};
