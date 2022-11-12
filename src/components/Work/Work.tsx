import axios from "axios";
import React from "react";
import Header from "../Header/Header";
import StateHandler from "../StateHandler/StateHandler";
import Project from "./Project";
import "./Work.css";

export type ProjectItem = {
  id: number;
  heading: string;
  url: string;
  imageUrl: string;
  description: string;
};

const Works = () => {
  const [pList, setPList] = React.useState<ProjectItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}`)
      .then((d) => {
        setPList(d.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Work__Container">
      <Header heading="Work" />
      {loading === true ? (
        <StateHandler size={"l"} />
      ) : (
        <div className="Work__ProjectList">
          {pList.map((i) => (
            <Project data={i} key={i.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
