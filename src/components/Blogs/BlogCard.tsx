import { CiCalendarDate } from "react-icons/ci";
import "./BlogCard.css";

type BlogCardType = {
  heading: string;
  date: string;
  onCardClick: () => void;
};

const BlogCard = ({ heading, date, onCardClick }: BlogCardType) => {
  return (
    <div className="BlogCard__Container" onClick={onCardClick}>
      <div className="BlogCard__Header">{heading}</div>
      <div className="BlogCard__Footer">
        <CiCalendarDate />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
