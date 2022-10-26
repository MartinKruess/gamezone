import { useState } from "react";

export const CreatePreview = () => {
  var today = new Date();
  const dateOfDay = today.toLocaleDateString("de-DE");
  const [count, setCount] = useState(0);

  return (
    <form className="createForm" action="">
      <label htmlFor="">Titel</label>
      <input type="text" />
      <label htmlFor="">{dateOfDay}</label>
      <label className="content" htmlFor="">
        Short Description
      </label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        maxLength={3000}
        onChange={(e) => setCount(e.target.value.length)}
      ></textarea>
      <p className="counter">{count}/3000</p>
      <input type="file" />
      <button type="submit">Create</button>
    </form>
  );
};
