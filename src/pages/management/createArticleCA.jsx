import { useEffect, useState } from "react";
import { CreatePreview } from "../../components/reusables/createPreview";
import { CreateArticle } from "../../components/reusables/newSpan";

export const CreateArticleCA = () => {
  const [preview, setPreview] = useState(true);
  const [spans, setSpans] = useState(["span"]);
  const [article, setArticle] = useState({
    name: "",
    date: "",
    spans: [],
  });

  useEffect(() => {
    console.log(spans);
  }, [spans]);

  useEffect(() => {
    console.log(preview);
  }, [preview]);

  return (
    <article>
      <h1>Lege einen neuen Blog-Artikel an!</h1>
      <div className="articleMenu">
        <button onClick={() => setPreview(true)} className="button">Preview</button>
        <button onClick={() => setPreview(false)} className="button">Details</button>
      </div>
      {preview === true ? (
        <CreatePreview />
      ) : (
        <div>
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
              + add span
            </button>
          )}
        </div>
      )}
      <button className="createArticle" type="submit">
        Artikel erstellen
      </button>
    </article>
  );
};
