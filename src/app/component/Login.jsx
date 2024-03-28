"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import "../styles/auth.css"
import { signIn, useSession } from "next-auth/react";


const Login = () => {

    const router = useRouter(); 
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(" ")
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    
    try {
      setLoading(true);
      const res = await signIn("credentials",{
        email: user.email,
        password : user.password,
        redirect:false
      })
      if(res.error){
        setError("Invalid credentials");
        setLoading(false);
        return;
      }

      toast.success("Login success");
      router.push("/profile");
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        
            <div className="inputwrapper">
              <center>
                <h1>{loading ? "Processing" : "Login"}</h1>

                <input
                  className="userInput"
                  id="email"
                  type="text"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="email"
                />
                <br />

                <input
                  className="userInput"
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="password"
                />
                <br />
                <button onClick={onLogin} className="loginbutton">
                  Login here
                </button>
                <br />
             
              </center>
            </div>
          
      </div>
    </div>
  )
}

export default Login
