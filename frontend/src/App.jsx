import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import DashBoard from "./components/DashBoard/DashBoard";
import Visualization from "./components/Visualization/Visualization";
import Register from "./components/Register/Register";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <DashBoard /> },
        { path: "visualization", element: <Visualization /> },
      ],
    },
    {
      path: "/register",
      element: < Register/>,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
