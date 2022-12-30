import { nanoid } from "nanoid";
import Modal from "../Modal";

const AddTaskForm = ({ setAddTaskFormOpen, addTaskHandler, stageIndex }) => {
  const addTask = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const formData = {
      title: data.get("title").trim(),
      description: data.get("description").trim(),
    };

    addTaskHandler({
      stageIndex: stageIndex,
      task: {
        id: nanoid(),
        title: formData.title,
        description: formData.description,
      },
    });
  };

  return (
    <Modal setModalOpen={setAddTaskFormOpen}>
      <form
        onSubmit={addTask}
        className="flex flex-col items-start justify-center p-4 px-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="mb-6 w-full border-b border-zinc-500 bg-zinc-700 px-4 py-2 text-3xl outline-none"
          required
        />
        <textarea
          className="mb-6 w-full bg-zinc-700 px-4 py-2 text-xl outline-none"
          placeholder="Description"
          rows={5}
          name="description"
          required
        />
        <button
          type="submit"
          className="text-md mx-auto items-center rounded-sm bg-zinc-500 p-3 font-semibold text-white hover:bg-zinc-600"
        >
          Add Card
        </button>
      </form>
    </Modal>
  );
};

export default AddTaskForm;
