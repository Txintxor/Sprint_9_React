import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormList, Label, Button2 } from "../styled-c/styled-components.js";

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    if (name !== "" && pass !== "") {
      
      const data = { user: name, password: pass };
      window.localStorage.setItem("user", JSON.stringify(data));

      navigate("/AdminLogin");
    } else {
      e.preventDefault();
    }
  };

  const dataCapture = (e) => {
    e.target.id === "user" ? setName(e.target.value) : setPass(e.target.value);
  };

  return (
    <main className="mainContainer">
    <FormList onSubmit={submit}>
      <h1 className="logTitle">Registre de nou Admin</h1>
      <Label htmlFor="user">Introdueix el nom d´usuari</Label>
      <input type="text" onChange={dataCapture} name="user" id="user" />
      <Label htmlFor="password">Introdueix el Password</Label>
      <input type="text" onChange={dataCapture} name="password" id="password" />
      <Button2 type="submit" >Envia</Button2>
    </FormList>
    </main>
  );
};

export default AdminRegister;