import React, { useState } from "react";
import Header from "./Header";
import CreatNote from "./CreatNote";
import Footer from "./Footer";
import "./Header.css";
import Note from "./Note";

function Main() {
  const [addItems, setAddItems] = useState([]);
  const addNote = (nots) => {
    // alert("i am clickex" )
    setAddItems((prevdata) => {
      return [...prevdata, nots];
    });
  
     
  };
  const onDelete=(id)=>{
      setAddItems((olditem)=>
          olditem.filter((cureEle,index)=>{
            return index !==id;
          })
      )
  }
  return (
    <>
      <Header />
      <CreatNote passNote={addNote} />

      {addItems.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
         
          />
        );
      })}

      {/* <Footer /> */}
    </>
  );
}

export default Main;
