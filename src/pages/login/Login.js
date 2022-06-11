import styles from "./Login.module.css";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleForm = (e) => {
    e.preventDefault();
    login(email, password);
    // setEmail("");
    // setPassword("");
    // setDisplayName("");
  };

  return (
    <form onSubmit={handleForm} className={styles["login-form"]}>
      <h2>Login</h2>

      <label>
        <span>email:</span>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </label>

      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div>{error}</div>}
    </form>
  );
}

export default Login;
