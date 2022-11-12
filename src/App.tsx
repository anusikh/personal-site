import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/AuthPage/AuthPage";
import Blog from "./components/Blogs/Blog";
import BlogPage from "./components/Blogs/BlogPage";
import Editor from "./components/Editor/Editor";
import Landing from "./components/Landing/Landing";
import Work from "./components/Work/Work";
import { DataContextProvider } from "./context/data-context";

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
    element: <Work />,
  },
  {
    path: "/blog/:id",
    element: <BlogPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
]);

function App() {
  return (
    <DataContextProvider>
      <div className="App__Container">
        <RouterProvider router={router} />
      </div>
    </DataContextProvider>
  );
}

export default App;
