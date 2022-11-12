import React from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../context/data-context";
import { addBlog, BlogType, getBlogs } from "../../utils/utils";
import Header from "../Header/Header";
import "./Editor.css";
import ListItem from "./ListItem";

const Editor = () => {
  const { authenticated, selectedItem } = React.useContext(dataContext);
  const navigate = useNavigate();
  const [blogList, setBlogList] = React.useState<BlogType[]>();
  const [blogHeading, setBlogHeading] = React.useState<string>("");
  const [blogBody, setBlogBody] = React.useState<string>("");

  // changing this state to update list
  const [updateList, setUpdateList] = React.useState<boolean>(false);

  const addBlogPost = async (blogHeading: string, blogBody: string) => {
    try {
      if (blogBody != "" && blogHeading != "") {
        const res = await addBlog(blogHeading, blogBody);
        setUpdateList((prev) => !prev);
      } else {
        alert("😓 make sure fields aren't empty");
      }
      setBlogHeading("");
      setBlogBody("");
    } catch (e) {
      alert("😓 something went wrong");
      navigate("/editor");
    }
  };

  const getBlogList = async () => {
    setBlogList(await getBlogs());
  };

  React.useEffect(() => {
    getBlogList();
  }, [updateList]);

  return (
    <div>
      {authenticated ? (
        <div className="Editor__Container">
          <Header heading="Fill the form" />
          <div className="Editor__InputContainer">
            heading
            <textarea
              value={blogHeading}
              onChange={(e) => setBlogHeading(e.target.value)}
            />
            body
            <textarea
              value={blogBody}
              onChange={(e) => setBlogBody(e.target.value)}
            />
            <button
              className="Editor__Button"
              onClick={async () => {
                await addBlogPost(blogHeading, blogBody);
              }}
            >
              ➕ add
            </button>
          </div>
          <div className="Editor__List">
            <span>🔧 delete a blog</span>
            {blogList?.map((x) => (
              <ListItem
                data={x}
                updateListCallback={() => setUpdateList((prev) => !prev)}
              />
            ))}
          </div>
        </div>
      ) : (
        <>😓 please sign in first 😓</>
      )}
    </div>
  );
};

export default Editor;
