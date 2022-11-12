import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="Landing__Container">
      <div className="Landing__SignIn" onClick={() => navigate("/auth")}>
        🔒
      </div>
      <span className="Landing__Header">anusikh</span>

      <div className="Landing__Socials">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={"https://github.com/anusikh"}
        >
          <BsGithub size={35} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={"https://linkedin.com/anusikh"}
        >
          <BsLinkedin size={35} />
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href={"https://instagram.com/anusikh11_"}
        >
          <BsInstagram size={35} />
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href={"https://twitter.com/anusikh"}
        >
          <BsTwitter size={35} />
        </a>
      </div>

      <div className="Landing__Routes">
        <button onClick={() => navigate("/blogs")}>📕 blogs</button>
        <button onClick={() => navigate("/work")}>⚒️ work</button>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1fycaYmkdnCg-hfxT3CnwtY0uFkuRAi9X/edit?usp=share_link&ouid=113502614299854266425&rtpof=true&sd=true"
            )
          }
        >
          📃 resume
        </button>
      </div>
    </div>
  );
};

export default Landing;
