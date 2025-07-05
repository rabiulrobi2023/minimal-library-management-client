import { Outlet } from "react-router";
import Navbar from "./Layout/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1080px] mx-auto text-[14px]  text-gray-600">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
