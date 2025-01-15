import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      console.log("Login successfully");
      setLoading(true);
      window.location.href = "/home";
      toast.success("User loged in successfuly", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.warning(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handlesubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e) => setemail(e.target.value)} />
        </label>
        <label htmlFor="password">
          password:
          <input type="password" onChange={(e) => setpass(e.target.value)} />
        </label>
        <LoadingButton
          size="small"
          loading={loading}
          loadingIndicator="Login…"
          variant="outlined"
          type="submit"
        >
          Login
        </LoadingButton>

        <p>
          Don't have account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
