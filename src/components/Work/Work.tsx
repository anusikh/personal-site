import axios from "axios";
import React from "react";
import Header from "../Header/Header";
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

  React.useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}`)
      .then((d) => setPList(d.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Work__Container">
      <Header heading="Work" />
      <div className="Work__ProjectList">
        {pList.map((i) => (
          <Project data={i} key={i.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
