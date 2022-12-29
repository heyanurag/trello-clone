import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BsDashCircle } from "react-icons/bs";
import AddTask from "../Task/AddTask";
import Task from "../Task";

const Stage = ({ stage, index, addTaskHandler, deleteStage }) => {
  const [addTaskFormOpen, setAddTaskFormOpen] = useState(false);

  const handleAddTask = (newTask) => {
    addTaskHandler(newTask);
    setAddTaskFormOpen(false);
  };

  const handleDeleteStage = () => deleteStage(stage.id);

  return (
    <>
      <div className="mb-3 flex flex-row items-center justify-between">
        <span className="text-lg font-semibold">{stage.stage}</span>
        <button onClick={handleDeleteStage}>
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
        Add Task
      </div>
      {addTaskFormOpen && (
        <AddTask
          setAddTaskFormOpen={setAddTaskFormOpen}
          addTaskHandler={handleAddTask}
          stageIndex={stage.id}
        />
      )}
    </>
  );
};

export default Stage;
