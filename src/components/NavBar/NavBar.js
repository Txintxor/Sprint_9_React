import {NaviBar, NavLinks, Listed} from "../styled-c/styled-components.js"
import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  const {logout} = useAuth0();
  return ( <NaviBar>
    <a id="navLogo" href="/">NavBar Logo</a>
    <NavLinks>
      <Listed> <button onClick= {() => logout({returnTo: window.location.origin})}>Log out</button></Listed>
      <Listed><a href="/Recetas">Recetas</a></Listed>
    </NavLinks>
  </NaviBar> );
}
 
export default NavBar;