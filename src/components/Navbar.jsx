import { BsStar } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between p-6">
      <div className="flex flex-row items-center">
        <span className="text-2xl font-semibold">Taco's Tacos</span>
        <BsStar className="ml-8 mr-4" />
        <span className="text-md mx-4 border-x border-zinc-500 px-4 font-normal">
          Zuddl Inc.
        </span>
        <AiOutlineTeam />
        <span className="text-md px-2 font-normal">Team Invisible</span>
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
    </div>
  );
};

export default NavBar;
