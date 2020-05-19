import React from "react";
import "./index.css"
const Note = props => {
  const {title,index, content, handleDelete, handleTitle, handleContent} = props;

  return (
      <div className= "note__container">
          <input className="note__title" type="text" value={title} onChange=
              {e=>
                  handleTitle(e,index)
              }>
          </input>
          <input className="note__content" type="text" value={content} onChange={e=>handleContent(e,index)}>
          </input>
          <div className="note__line"/>
          <button className="note__btn" onClick={e=>handleDelete(index)}>
              Delete
          </button>
      </div>
  );

};


export default Note;

Note.defaultProps ={
    title:"",
    content: ""
}