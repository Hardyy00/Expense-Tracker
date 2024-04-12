import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const routes = createBrowserRouter([{ path: "/", element: <Layout /> }]);
  return (
    <div className="bg-[#101935] h-[100vh] relative text-white">
      <SideBar />
    </div>
  );
}

export default App;
