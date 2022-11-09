import React from "react";
import { useNavigate } from "react-router-dom";
import { toDateTime } from "../../utils/dateUtil";
import { BlogType, getBlogs } from "../../utils/utils";
import Header from "../Header/Header";
import StateHandler from "../StateHandler/StateHandler";
import "./Blog.css";
import BlogCard from "./BlogCard";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = React.useState<BlogType[]>();

  const getData = async () => {
    setBlogs(await getBlogs());
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onCardClick = (id: string, body: string, heading: string) => {
    navigate(`/blog/${id}`, { state: { body: body, heading: heading } });
  };

  return (
    <div className="Blog__Container">
      <Header heading={"Blogs"} />
      <div className="Blog__Grid">
        {blogs ? (
          <>
            {blogs?.map((blog) => {
              return (
                <BlogCard
                  onCardClick={() =>
                    onCardClick(blog.id, blog.body, blog.heading)
                  }
                  heading={blog.heading}
                  date={toDateTime(blog?.date?.seconds)}
                />
              );
            })}
          </>
        ) : (
          <StateHandler />
        )}
      </div>
    </div>
  );
};

export default Blog;
