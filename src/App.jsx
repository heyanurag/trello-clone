import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex h-screen max-h-screen w-screen flex-col overflow-scroll bg-zinc-900 text-gray-50">
      <NavBar />
    </div>
  );
};

export default App;
