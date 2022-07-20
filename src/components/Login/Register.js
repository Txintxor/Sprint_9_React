import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import {
  FormList,
  Label,
  Button2,
  CardDiv,
} from "../styled-c/styled-components.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorPass, setErrorPass] = useState(false);

  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const submit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setErrorPass(false);
    try {
      if (pass === pass2) {
        await createUser(email, pass);
        navigate("/Login");
      } else {
        setErrorPass(true);
      }
    } catch (error) {
      setErrorMessage(error);
      console.log(error);
    }
  };

  return (
    <main className="mainContainer">
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "20rem" }}
      >
        <FormList onSubmit={submit}>
          <Label style={{fontSize: "1.7rem"}} className="logTitle">
            Registro de nuevo usuari0
          </Label>
          <br />
          <Label htmlFor="user">Introduzca email</Label>
          <br />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="user"
            id="user"
          />
          <br />
          <Label htmlFor="password">Introduzca contraseña</Label>
          <Label htmlFor="password">Use al menos 6 carácteres</Label>
          <br />
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            name="password"
            id="password"
          />
          <br />
          <Label htmlFor="password2">Repita contraseña</Label>
          <br />
          <input
            type="password"
            onChange={(e) => setPass2(e.target.value)}
            name="password2"
            id="password2"
          />
          <Button2 type="submit">Envía</Button2>
        </FormList>
        <br />
        {!!errorMessage && <CardDiv>{errorMessage.message}</CardDiv>}
        {errorPass && <CardDiv>Las contraseñas no coinciden</CardDiv>}
      </div>
    </main>
  );
};

export default Register;
