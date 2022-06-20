import styled from "styled-components";

///VARIABLES DE CSS

// const main = "blue";
// const second= "yellow";
// const border = "red";
// const font= "black";
const secondFont = "white";
const barBack = "rgb(78, 72, 72)";


//STYLED COMPONENTS 


const NaviBar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  background: ${barBack};
  color: ${secondFont};
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  `;

const Listed = styled.li`
  padding: 0 1rem;
`; 


const Button = styled.a`
  width: fit-content;
  border: 2px solid ${barBack};
  border-radius: 4px;
  padding: 0.25rem;
`;

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

 

export { NaviBar, NavLinks, Listed, Button, Foot };
