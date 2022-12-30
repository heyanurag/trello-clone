import { useEffect, useState } from "react";

const Task = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("h-0");

  useEffect(() => {
    setHeight(expanded ? "h-min my-3" : "h-0");
  }, [expanded]);

  return (
    <div
      className="my-3 flex flex-col rounded-sm bg-zinc-500 p-4 shadow-md"
      {...props}
      onClick={() => {
        setExpanded((prev) => !prev);
      }}
    >
      <span className="text-xl font-bold">{props.task.title}</span>
      <p
        className={`${height} origin-top overflow-hidden transition-all duration-200`}
      >
        {props.task.description}
      </p>
      <div className="flex flex-row">{expanded ? "collapse" : "expand"}</div>
    </div>
  );
};

export default Task;
