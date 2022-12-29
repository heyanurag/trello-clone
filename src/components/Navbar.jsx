import { useState } from "react";
import { BsStar, BsPlus } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import AddStage from "./Stage/AddStage";

const NavBar = ({ setData }) => {
  const [addStageFormOpen, setAddStageFormOpen] = useState(false);

  const addStageHandler = (newStage) => {
    setData((prev) => {
      const newStages = [...prev, newStage];
      console.log(newStages);
      return newStages;
    });
    setAddStageFormOpen(false);
  };

  return (
    <div className="flex w-full flex-row items-center justify-between p-6">
      <div className="flex flex-row items-center">
        <span className="text-2xl font-semibold">Taco's Tacos</span>
        <BsStar className="ml-8 mr-4" />
        <span className="text-md mx-4 border-x border-zinc-500 px-4 font-normal">
          🌮 Taco & Co.
        </span>
        <button
          onClick={() => {
            setAddStageFormOpen(true);
          }}
          className="flex items-center underline"
        >
          <BsPlus />
          <span className="text-md px-2">Add Stage</span>
        </button>
      </div>
      <div>
        <a
          href="https://github.com/heyanurag/trello-clone"
          target="_blank"
          className="text-md underline"
        >
          GitHub Repo
        </a>
      </div>
      {addStageFormOpen && (
        <AddStage
          setAddStageFormOpen={setAddStageFormOpen}
          addStageHandler={addStageHandler}
        />
      )}
    </div>
  );
};

export default NavBar;
