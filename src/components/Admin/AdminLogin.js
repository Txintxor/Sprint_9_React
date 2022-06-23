import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormList, Button, Button2, Label } from "../styled-c/styled-components.js";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    console.log("submit");
    if (name !== "" && pass !== "") {
      const local = JSON.parse(window.localStorage.getItem("user"));
      if (name === local.user && pass === local.password) {
        e.preventDefault();
        window.localStorage.setItem("log", true);
        navigate("/Admin");
      }
    } else {
      alert("Torni a probar");
      e.preventDefault();
    }
  };

  const dataCapture = (e) => {
    e.target.id === "user" ? setName(e.target.value) : setPass(e.target.value);
  };

  return (
    <main className="mainContainer">
      <FormList onSubmit={submit}>
        <h1 className="logTitle">Introdueix usuari i contrasenya</h1>
        <Label htmlFor="user">Usuari</Label>
        <input type="text" onChange={dataCapture} name="user" id="user" />
        <Label htmlFor="password">Password</Label>
        <input
          type="text"
          onChange={dataCapture}
          name="password"
          id="password"
        />
        <br/>
        <Button2 className="buttonAdmin"  type="submit"> Entra </Button2>
        <br/>
        <Button href="/AdminRegister">Crea Admin</Button>
      </FormList>
    </main>
  );
};

export default Login;
