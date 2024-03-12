import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./views/components/Navbar/Navbar.jsx";
import Events from "./views/pages/Events/Events.jsx";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Events /> }]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
