import React, { useState } from "react";
import "./Header.css";

function CreatNote(props) {
  const [nots, setNots] = useState({
    title: "",
    content: "",
  });
  const [expand, setExpand] = useState(false);
  const input = (e) => {
    const { name, value } = e.target;
    setNots((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(nots);
  };
  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(nots);
    setNots({ title: "", content: "" });
  };
  const expendIt = () => {
    setExpand(true);
  };

  return (
    <>
      <div className="note">
        <div className="not_inner">
          <form>
            {expand ? (
              <input
                type="text"
                name="title"
                value={nots.title}
                placeholder="Title"
                onChange={input}
              />
            ) : null}

            <br></br>
            <textarea
              type="text"
              name="content"
              value={nots.content}
              placeholder="write here"
              onChange={input}
              onClick={expendIt}
            ></textarea>
            {expand ? (
              <div className="buttons">
                <button className="btn btn-primary" onClick={addEvent}>
                  +
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatNote;
