import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user } = useAuth();
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>{user.displayName}</li>
            <li>
              <button className="btn">Log Out</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
