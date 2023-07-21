import React from "react";
import "./Header.css";

function Note(props) {

  const deleteNote=()=>{
  
    props. deleteItem(props.id)
  }
 
  return (
    <>
      <div className="node_main">
        <span className="spans">{props.title}</span>
        <br></br>
        <p className="para">{props.content}</p>

        <button
          className="btn "
          style={{
            width: "50px",
            height:"20px",
            height: "auto",
            padding: "0.5rem",
            marginLeft: "12rem",
            backgroundColor:"white",
            fontSize:"1rem",
            borderRadius:"60px"
            
          }}onClick={deleteNote}

        >
          +
        </button>
      </div>
    </>
  );
}

export default Note;
