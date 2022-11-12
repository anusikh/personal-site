import React from "react";
import { dataContext } from "../../context/data-context";
import { BlogType, deleteBlog } from "../../utils/utils";
import StateHandler from "../StateHandler/StateHandler";
import "./ListItem.css";

const ListItem = ({
  data,
  updateListCallback,
}: {
  data: BlogType;
  updateListCallback: any;
}) => {
  const { selectedItem } = React.useContext(dataContext);

  const [deleted, setDeleted] = React.useState<boolean>(false);

  const deleteFromList = async (id: string) => {
    try {
      setDeleted(true);
      await deleteBlog(id);
      updateListCallback();
      setDeleted(false);
    } catch (err: any) {
      alert("😓 something went wrong");
      setDeleted(false);
    }
  };

  return (
    <div
      className="ListItem__Container"
      style={{ backgroundColor: selectedItem === data.id ? "red" : "" }}
    >
      {data.heading}
      <div className="ListItem__ActionButtons">
        <button onClick={() => deleteFromList(data.id)}>
          {deleted === false ? <>🗑️</> : <StateHandler size={"s"} />}
        </button>
      </div>
    </div>
  );
};

export default ListItem;
