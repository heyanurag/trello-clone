import { nanoid } from "nanoid";
import { useReducer } from "react";
import Modal from "../Modal";

const AddTaskForm = ({ setAddTaskFormOpen, addTaskHandler, stageIndex }) => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [formdata, setformdata] = useReducer(formReducer, {});

  const handleChange = async (e) => {
    setformdata({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log({ stageIndex });
    addTaskHandler({
      stageIndex: stageIndex,
      task: {
        id: nanoid(),
        title: formdata.title,
        description: formdata.description,
      },
    });
  };

  return (
    <Modal setModalOpen={setAddTaskFormOpen}>
      <form className="flex flex-col items-start justify-center p-4 px-6 ">
        <input
          type={"text"}
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          className="mb-6 w-full border-b border-zinc-500 bg-zinc-700 px-4 py-2 text-3xl outline-none placeholder:text-3xl"
          required
        />

        <textarea
          className="mb-6 w-full bg-zinc-700 px-4 py-2 text-xl outline-none placeholder:text-xl"
          placeholder="Description"
          rows={5}
          name="description"
          onChange={(e) => handleChange(e)}
          required
        />

        <button
          onClick={(e) => onClick(e)}
          className="mx-auto items-center rounded-md bg-zinc-500 p-3  px-24 text-xl font-semibold text-white hover:bg-zinc-600"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddTaskForm;
