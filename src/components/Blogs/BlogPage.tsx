import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./BlogPage.css";

const BlogPage = () => {
  const location = useLocation();
  const { body, heading } = location.state;

  return (
    <div className="BlogPage__Container">
      <Header heading={heading} />
      <ReactMarkdown
        className="BlogPage__Markdown"
        children={body}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                // @ts-ignore
                style={atomDark}
                language={match[1]}
                className="Blog__Markdown"
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default BlogPage;
