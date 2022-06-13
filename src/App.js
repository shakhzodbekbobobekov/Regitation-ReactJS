import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { authStatus, user } = useAuth();
  console.log(user);
  return (
    <div className="App">
      {authStatus && (
        <>
          <Router>
            <Navbar />
            <Routes>
              {user && <Route path="/" element={<Home />} />}
              {!user && <Route element={<Navigate to="/login" />} />}
              {!user && <Route path="/login" element={<Login />} />}
              {user && <Route path="/login" element={<Navigate to="/" />} />}
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
