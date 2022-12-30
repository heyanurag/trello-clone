import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Stage from "../Stage";

const Board = ({ data, setData }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceSectionIndex = data.findIndex(
        (e) => e.id === source.droppableId
      );
      const destinationSectionIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceSection = data[sourceSectionIndex];
      const destinationSection = data[destinationSectionIndex];

      const sourceTasks = [...sourceSection.tasks];
      const destinationTasks = [...destinationSection.tasks];

      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);

      data[sourceSectionIndex].tasks = sourceTasks;
      data[destinationSectionIndex].tasks = destinationTasks;
      setData(data);
    } else {
      const SectionIndex = data.findIndex((e) => e.id === source.droppableId);
      const Section = data[SectionIndex];
      const Tasks = [...Section.tasks];
      const movedTask = Tasks.splice(source.index, 1);
      Tasks.splice(destination.index, 0, movedTask[0]);
      data[SectionIndex].tasks = Tasks;
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
