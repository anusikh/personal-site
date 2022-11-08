import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="Landing__Container">
      <span className="Landing__Header">anusikh</span>

      <div className="Landing__Socials">
        <BsGithub size={35} />
        <BsLinkedin size={35} />
        <BsInstagram size={35} />
        <BsTwitter size={35} />
      </div>

      <div className="Landing__Routes">
        <button onClick={() => navigate("/blogs")}>blogs</button>
        <button onClick={() => navigate("/work")}>work</button>
        <button onClick={() => navigate("/blogs")}>resume</button>
      </div>
    </div>
  );
};

export default Landing;
