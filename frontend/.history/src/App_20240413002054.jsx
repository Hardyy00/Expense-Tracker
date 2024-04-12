import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  const routes = createBrowserRouter([{ path: "/", element: <Layout /> , children: [{index: true, element: <DashBo}]}]);
}

export default App;
