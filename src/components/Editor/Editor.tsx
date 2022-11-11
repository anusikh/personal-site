import React from "react";
import { dataContext } from "../../context/data-context";

const Editor = () => {
  const { authenticated } = React.useContext(dataContext);
  return <div>{authenticated ? <>Hi</> : <>😓 please sign in first 😓</>}</div>;
};

export default Editor;
