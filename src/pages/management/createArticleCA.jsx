import { useEffect, useState } from "react";
import { CreateArticle } from "../../components/reusables/newSpan";

export const CreateArticleCA = () => {
  const [spans, setSpans] = useState(["span"]);
  const [article, setArticle] = useState({
    name: "",
    date: "",
    spans: [],
  });

  useEffect(() => {
    console.log(spans);
  }, [spans]);

  return (
    <article>
      <h1>Lege einen neuen Blog-Artikel an!</h1>
      <div className="articleMenu">
        <button>Peview</button>
        <button>Details</button>
      </div>
      {spans.map((span, i) => (
        <div key={i}>
          <CreateArticle i={i} />
        </div>
      ))}
      {spans.length < 5 && (
        <button
          className="newSpan"
          onClick={() => setSpans([...spans, "span"])}
        >
          +
        </button>
      )}
      <button type="submit">Create</button>
    </article>
  );
};
