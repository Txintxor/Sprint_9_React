import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "../styled-c/styled-components";

const Login = () => {
  const {loginWithRedirect} = useAuth0();
  return(

     <button onClick= {() => loginWithRedirect()}>LOGIN</button>
     
     )
}

export default Login