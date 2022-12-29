const Modal = ({ setModalOpen, children }) => {
  return (
    <>
      <div
        className="overlay fixed top-0 left-0 h-full w-screen bg-black opacity-50"
        onClick={() => {
          setModalOpen(false);
        }}
      />
      <div className="fixed left-1/2 top-1/2 z-10 max-h-[90vh] w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-zinc-700 shadow-lg">
        {children}
      </div>
    </>
  );
};

export default Modal;
