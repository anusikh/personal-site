import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blogs/Blog";
import Landing from "./components/Landing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/work",
    element: <>work</>,
  },
]);

function App() {
  return (
    <div className="App__Container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
