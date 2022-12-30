import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BsDashCircle } from "react-icons/bs";
import AddTask from "../Task/AddTask";
import Task from "../Task";

const Stage = ({ stage, setData }) => {
  const [addTaskFormOpen, setAddTaskFormOpen] = useState(false);

  const addTaskHandler = (newTask) => {
    setData((prev) => {
      const newStages = prev.map((stage) => {
        if (stage.id === newTask.stageIndex) {
          stage.tasks.push(newTask.task);
        }
        return stage;
      });
      return newStages;
    });
    setAddTaskFormOpen(false);
  };

  const deleteStage = () => {
    setData((prev) => {
      const newStages = prev.filter((stg) => stg.id !== stage.id);
      return newStages;
    });
  };

  return (
    <>
      <div className="mb-3 flex flex-row items-center justify-between">
        <span className="text-lg font-semibold">{stage.stage}</span>
        <button onClick={deleteStage}>
          <BsDashCircle />
        </button>
      </div>
      {stage.tasks.map((task, idx) => (
        <Draggable key={task.id} draggableId={task.id} index={idx}>
          {(provided, snapshot) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              style={{
                ...provided.draggableProps.style,
                opacity: snapshot.isDragging ? 0.8 : 1,
              }}
            >
              <Task task={task} />
            </div>
          )}
        </Draggable>
      ))}
      <div
        className="mt-4 cursor-pointer"
        onClick={() => {
          setAddTaskFormOpen(true);
        }}
      >
        Add Card
      </div>
      {addTaskFormOpen && (
        <AddTask
          setAddTaskFormOpen={setAddTaskFormOpen}
          addTaskHandler={addTaskHandler}
          stageIndex={stage.id}
        />
      )}
    </>
  );
};

export default Stage;
