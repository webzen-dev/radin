import Image from "next/image";
import { CiLock, CiUnlock, CiUser } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import logo from "@/public/ret.png";
import { useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/Header";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response = await axios.post("/api/user/login", { email, password });
  
      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(userData));
        console.log("User data stored in localStorage:", userData); 
        router.replace("/dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An error occurred while logging in.");
      console.error(err);
    }
  };
  
  

  return (
    <>
      <Header />
      <div className="login-page">
        {showPassword && <div className="blur-box" />}
        <div className="box">
          <div className="login-header">
            <Image alt="logo image" src={logo} />
            <h2>Welcome to Admin Panel {":)"}</h2>
          </div>
          <div className="line">
            <div className="dash"></div>
            <span>ret</span>
            <div className="dash"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <CiUser />
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input password">
              {showPassword ? <CiUnlock /> : <CiLock />}
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="eyes"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <LiaEyeSolid /> : <FaRegEyeSlash />}
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
