import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {toast} from "react-toastify";

const Register = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          Firstname: fname,
          Lastname: lname,
        });
      }
      console.log("user registered successfully");
      toast.success("User registered successfully!!",{
        position:"top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message,{
        position:"bottom-center",
      });
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handlesubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="fname">
          FirstName:
          <input type="text" onChange={(e) => setfname(e.target.value)} />
        </label>
        <label htmlFor="lname">
          Lastname:
          <input type="text" onChange={(e) => setlname(e.target.value)} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e) => setemail(e.target.value)} />
        </label>
        <label htmlFor="password">
          password:
          <input type="password" onChange={(e) => setpass(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
