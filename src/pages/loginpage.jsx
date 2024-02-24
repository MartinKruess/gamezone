import { useContext, useEffect, useState } from "react";
import { backendURL } from "../App";
import { AppContext } from "../global/useContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const { setToken } = useContext(AppContext);
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    try {
      const res = await fetch(`${backendURL}/login`, {
        method: "POST",
        credentials: "include",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const resData = await res.json();
      console.log("resData", resData);
      setToken(resData.auth);
      setUserData(resData.userData);
      saveInLocalStorage("auth", resData.auth);
      saveInLocalStorage("user", resData.userData);
      res.status === 200 && useNavigate("/dashboard", { replace: true });
    } catch (error) {
      console.log("Error", error, res);
    }
  };

  return (
    <section className="loginPage">
      <form className="loginContainer" onSubmit={onLogin}>
        <label htmlFor="username">Login</label>
        <input name="username" type="text" id="username" />
        <label htmlFor="pw">Password</label>
        <input name="password" type="password" id="pw" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};
