import { useState } from "react";
import { Link } from "react-router-dom";

type ElementType = "h2" | "h3" | "p" | "ul" | "strong";
interface ParsedElement {
  type: ElementType;
  content: string | string[];
}

function FestivalContent({
  data,
  standalone,
}: {
  data: ParsedElement[];
  standalone?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  // Find the index of the first paragraph
  const firstParagraphIdx = data.findIndex((item) => item.type === "p");
  // If no paragraph, fallback to first element
  const firstIdx = firstParagraphIdx !== -1 ? firstParagraphIdx : 0;

  // Split content for truncation
  const before = data.slice(0, firstIdx + 1);
  const after = data.slice(firstIdx + 1);

  return (
    <div className="px-2 justify-content-center align-items-center text-center">
      {!standalone && <h2 className="grid_cat">Festival Highlights</h2>}
      {before.map((item, index) => {
        switch (item.type) {
          case "h2":
            return (
              <h2 key={index} className="fw-light">
                {item.content}
              </h2>
            );
          case "strong":
            return <strong key={index}>{item.content}</strong>;
          case "h3":
            return <h3 key={index}>{item.content}</h3>;
          case "p":
            return <p key={index}>{item.content}</p>;
          case "ul":
            return (
              <ul key={index}>
                {(item.content as string[]).map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
      {!expanded && after.length > 0 && (
        <button onClick={() => setExpanded(!expanded)} style={{ marginTop: 8 }}>
          <Link
            to={"/festivals"}
            className="btn btn-success rounded-pill py-2 px-4 ms-lg-4"
          >
            {expanded ? "Read Less" : "Read More"}
          </Link>
        </button>
      )}
      {expanded &&
        after.map((item, index) => {
          switch (item.type) {
            case "h2":
              return <h2 key={index + before.length}>{item.content}</h2>;
            case "strong":
              return (
                <strong key={index + before.length}>{item.content}</strong>
              );
            case "h3":
              return <h3 key={index + before.length}>{item.content}</h3>;
            case "p":
              return <p key={index + before.length}>{item.content}</p>;
            case "ul":
              return (
                <ul key={index + before.length}>
                  {(item.content as string[]).map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
    </div>
  );
}

export default FestivalContent;
