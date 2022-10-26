import { useState } from "react";

export const CreateArticle = ({ i }) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // oder Golbal
  const [spanObj, setSpanObj] = useState({
    titel: "",
    text: "",
    img: "",
  });

  const handleChange = (e) => {
    setSpanObj({ ...spanObj, [e.target.name]: e.target.value });
  };

  const textFunktions = (e) => {
    (e) => setCount(e.target.value.length), (e) => handleChange(e);
  };

  const [count, setCount] = useState(0);
  return (
    <form className="createForm" action="">
      <label htmlFor="">Abschnitt</label>
      <input name="titel" type="text" onChange={(e) => handleChange(e)} />
      <label className="content" htmlFor="">
        Content
      </label>
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        maxLength={3000}
        onChange={(e) => textFunktions(e)}
      ></textarea>
      <p className="counter">{count}/3000</p>
      <input name="img" type="file" onChange={(e) => handleChange(e)} />
    </form>
  );
};

/*
    abschnitt objekt struktur
    articles: [
        {
            name: "",
            text: "",
            abschnitte: [
                {
                    abschnittName: "",

                }
            ]
        }
    ]
*/
