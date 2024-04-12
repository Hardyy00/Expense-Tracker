import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const routes = createBrowserRouter([{ path: "/", element: <Layout /> }]);
}

export default App;
