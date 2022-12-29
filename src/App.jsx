import { useState } from "react";
import mockData from "./mockData.json";
import NavBar from "./components/Navbar";
import Board from "./components/Board";

const App = () => {
  const [data, setData] = useState(mockData);

  return (
    <div className="flex h-screen max-h-screen w-screen flex-col overflow-scroll bg-zinc-900 text-gray-50">
      <NavBar setData={setData} />
      <Board data={data} setData={setData} />
    </div>
  );
};

export default App;
