import { useState } from "react";
import "./App.css";
import GoogleLoginComp from "./GoogleLoginComp";
import logo from "./assets/logo.png";
import bgLogo from "./assets/bgScreen.png";
import overlayText from "./assets/overlayText.png";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} Password: ${password}`);
    // Handling the form submission
  };
  return (
    <div className="full">
      <div className="Subsidary">
        <div className="leftside">
          <div className="leftside__logo">
            <img src={logo} alt="" />
          </div>
          <h1 className="leftside__heading">Welcome To RightChoice</h1>
          <div className="formcomponent">
            <div className="logincomponent">
              <GoogleLoginComp />
            </div>
            <h2 className="span-text">
              <span>or</span>
            </h2>
            <div className="container">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="submitbtn" type="submit">
                  Sign In
                </button>
                <span className="forgotpassword">Forgot Password?</span>
              </form>
            </div>
          </div>
        </div>
        <div className="rightside">
          {/* <img className="rightside__imagebg" src={bgLogo} alt="" /> */}
          <div className="overlay__texture" />
          <div>
            {/* <img className="rightside_overlay" src={overlayText} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
