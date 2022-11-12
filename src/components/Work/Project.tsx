import { ProjectItem } from "./Work";
import "./Project.css";

const Project = ({ data }: { data: ProjectItem }) => {
  return (
    <div className="Project__Container">
      <div className="Project__Header">{data.heading}</div>
      <div className="Project__Description">{data.description}</div>
      <a
        className="Project__Link"
        rel="noopener noreferrer"
        target="_blank"
        href={`${data.url}`}
      >
        🔗
      </a>
    </div>
  );
};

export default Project;
