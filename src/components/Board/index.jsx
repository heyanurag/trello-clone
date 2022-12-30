import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Stage from "../Stage";

const Board = ({ data, setData }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceStageIndex = data.findIndex(
        (e) => e.id === source.droppableId
      );
      const destinationStageIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceStage = data[sourceStageIndex];
      const destinationStage = data[destinationStageIndex];

      const sourceTasks = [...sourceStage.tasks];
      const destinationTasks = [...destinationStage.tasks];

      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);

      data[sourceStageIndex].tasks = sourceTasks;
      data[destinationStageIndex].tasks = destinationTasks;
      setData(data);
    } else {
      const stageIndex = data.findIndex((e) => e.id === source.droppableId);
      const stage = data[stageIndex];
      const tasks = [...stage.tasks];
      const movedTask = tasks.splice(source.index, 1);

      tasks.splice(destination.index, 0, movedTask[0]);
      data[stageIndex].tasks = tasks;
      setData(data);
    }
  };

  return (
    <div className="flex h-full w-full flex-row pt-8">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex h-full min-w-full overflow-scroll">
          {data.map((stage, idx) => (
            <Droppable key={stage.id} droppableId={stage.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="m-4 flex h-max w-full min-w-[20vw] flex-col rounded-sm bg-zinc-700 px-4 py-4"
                >
                  <Stage stage={stage} setData={setData} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
