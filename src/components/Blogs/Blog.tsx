import React from "react";
import { toDateTime } from "../../utils/dateUtil";
import { BlogType, getBlogs } from "../../utils/utils";
import Header from "../Header/Header";
import "./Blog.css";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = React.useState<BlogType[]>();

  const getData = async () => {
    setBlogs(await getBlogs());
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Blog__Container">
      <Header heading={"Blogs"} />
      <div className="Blog__Grid">
        {blogs?.map((blog) => {
          return (
            <BlogCard
              heading={blog.heading}
              date={toDateTime(blog?.date?.seconds)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
