import "./StateHandler.css";

const StateHandler = ({ size }: { size: string }) => {
  return (
    <div
      className={
        size === "l" ? "StateHandler__lContainer" : "StateHandler__sContainer"
      }
    ></div>
  );
};

export default StateHandler;
