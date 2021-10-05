import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./styles.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
        />
      </Link>
      <div className="login__conatiner">
        <h1>Sing in</h1>
        <form className="form">
          <h3>E-mail</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <h3>Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleLogin}>Sing in</button>
        </form>
        <p>
          Al iniciar sesión, acepta las Condiciones de uso y venta de Amazon.
          Por favor mira nuestro Aviso de privacidad, nuestro Aviso de cookies y
          nuestras adiciones basadas en interset Aviso.
        </p>
        <button onClick={handleRegister} className="login__registerButton">
          Crea tu cuenta de Amazon
        </button>
      </div>
    </div>
  );
}
