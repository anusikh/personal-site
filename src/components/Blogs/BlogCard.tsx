import "./BlogCard.css";

type BlogCardType = {
  heading: string;
  date: string;
};

const BlogCard = ({ heading, date }: BlogCardType) => {
  return (
    <div className="BlogCard__Container">
      <div className="BlogCard__Header">{heading}</div>
      <div className="BlogCard__Footer">{date}</div>
    </div>
  );
};

export default BlogCard;
