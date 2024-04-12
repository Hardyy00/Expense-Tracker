import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <DashBoard /> }],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
