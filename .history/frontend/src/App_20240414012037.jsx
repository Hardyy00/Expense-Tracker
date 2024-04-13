import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import DashBoard from "./components/DashBoard/DashBoard";
import Visualization from "./components/Visualization/Visualization";

import Notifier from "./components/Notifier/Notifier";

// function App() {
//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { index: true, element: <DashBoard /> },
//         { path: "visualization", element: <Visualization /> },
//         { path: "notifier", element: <Notifier /> },
//       ],
//     },
//   ]);
  import Landing from "./components/Landing/Landing";
  import Register from "./components/Register/Register";
  import Login from "./components/Login/Login";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Error404 from "./components/Error404/Error404";

  const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<Error404 />} />
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="" element={<DashBoard />} />
            <Route path="visualization" element={<Visualization />} />
            <Route path="notifier" element={<Notifier />} />
          </Route>
        </Routes>
      </Router>
    );
  };
}

export default App;
