import { useState } from "react";
import styles from "./Signup.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log({ email, password, displayName });
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  return (
    <form onSubmit={handleForm} className={styles["signup-form"]}>
      <h2>Signup</h2>

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

      <label>
        <span>displayName:</span>
        <input
          type="text"
          required
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
          value={displayName}
        />
      </label>
      <button className="btn">sign up</button>
    </form>
  );
}

export default Signup;
