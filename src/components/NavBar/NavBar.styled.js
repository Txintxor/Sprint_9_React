import styled from "styled-components";
import {whiteC, barBack, border} from "../styled-c/styled-components";




export const NaviBar = styled.nav`
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

export const NavLinks = styled.ul`
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



export const Listed = styled.li`
  padding: 0 1rem;
`;

export const NavMenuIcon = styled.a`
  display: none;

  @media (max-width: 600px) {
    display: block;
    position: absolute;
    right: 8px;
  }
`;

export const LogoutButton = styled.a`
  width: fit-content;
  padding:  .2rem .4rem;
  text-align: center;
  align-self: center;
  background-color: transparent;
`;
