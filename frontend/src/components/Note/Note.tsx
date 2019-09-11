import React from "react";
import "./Note.css";

interface NoteProps{
    title:string
}

export default (props: NoteProps) => {
  const title = props.title
  return (
    <div className='keep'>
      <div className='keep_textContainer'>
        <div className='textContainer_text'>
          {title}
        </div>
      </div>
      <div className='keep_optionsContainer'>
        <div className="options">
          <div className='optionsContainer_deleteKeep'>
          </div>
        </div>
        <div className="optionsMenu">
          <div>
             Удалить заметку
          </div>
        </div>
      </div>
    </div>
  );
}