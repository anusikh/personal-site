import {
  Auth,
  OAuthCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../context/data-context";
import { auth } from "../../firebase";
import StateHandler from "../StateHandler/StateHandler";
import "./AuthPage.css";

const AuthPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { authDispatch } = React.useContext(dataContext);
  const navigate = useNavigate();

  const signIn = (email: string, password: string) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        authDispatch({ type: "toggle-auth", payload: true });
        setLoading(false);
        navigate("/editor");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(`😔 ${error.code} 😔`);
        setLoading(false);
        navigate("/auth");
      });
  };

  return (
    <div className="AuthPage__Container">
      {loading ? (
        <StateHandler />
      ) : (
        <div className="AuthPage__Box">
          <span className="AuthPage__BoxHeader">log in</span>
          <div className="AuthPage__InputContainer">
            email
            <input
              className="AuthPage__Input"
              onChange={(e) => setEmail(e.target.value)}
            />
            password
            <input
              className="AuthPage__Input"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="AuthPage__Button"
              onClick={() => signIn(email, password)}
            >
              log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
