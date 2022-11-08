import "./Header.css";

type HeaderProps = {
  heading: string;
};

const Header = ({ heading }: HeaderProps) => {
  return <div className="Header__Container">{heading}</div>;
};

export default Header;
