import { nanoid } from "nanoid";
import Modal from "../Modal";

const AddStageForm = ({ setAddStageFormOpen, addStageHandler }) => {
  const addStage = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const formData = {
      title: data.get("title").trim(),
    };

    addStageHandler({
      id: nanoid(),
      stage: formData.title,
      tasks: [],
    });
  };

  return (
    <Modal setModalOpen={setAddStageFormOpen}>
      <form
        onSubmit={addStage}
        className="flex flex-col items-start justify-center p-4 px-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="mb-6 w-full border-b border-zinc-500 bg-zinc-700 px-4 py-2 text-3xl outline-none"
          required
        />
        <button
          type="submit"
          className="mx-auto items-center rounded-sm bg-zinc-500 p-3 font-semibold text-white hover:bg-zinc-600"
        >
          Add Stage
        </button>
      </form>
    </Modal>
  );
};

export default AddStageForm;
