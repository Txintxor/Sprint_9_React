import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import { FormList, Button2, Label } from "../styled-c/styled-components.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const { login, user } = UserAuth();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, pass);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <main className="mainContainer">
      <FormList onSubmit={submit}>
        <h1 className="logTitle">Introduce Email y contraseña</h1>
        <br />
        <Label htmlFor="user">Email</Label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="user"
          id="user"
        />
        <br />
        <Label htmlFor="password">Password</Label>
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          name="password"
          id="password"
        />
        <br />
        <Button2 className="buttonAdmin" type="submit">
          {" "}
          Entra{" "}
        </Button2>
      </FormList>
    </main>
  );
};

export default Login;
