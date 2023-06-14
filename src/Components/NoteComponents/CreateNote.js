import * as React from 'react'; 
import TrashIcon from "@mui/icons-material/DeleteForeverOutlined";
import TextareaAutosize from '@mui/material/TextareaAutosize';

function CreateNote({ titleHandler, textHandler, addHandler, inputText, inputTitle, deleteAllNotes }) {
  return (
    <div className="Form" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <input
        className="Form-Title"
        type="text"
        placeholder="Title"
        value={inputTitle}
        onChange={titleHandler}
      />
      <TextareaAutosize
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Take a note..."
        onChange={textHandler}
        date={new Date().toLocaleString()}
      ></TextareaAutosize>
      <button
        className="Note-Add"
        onClick={() => {
          if (inputText !== "") {
            addHandler();
          }
        }}
      >
        Add
      </button>
      <TrashIcon
        className="Note-AllDelete"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete all your notes?")) {
            deleteAllNotes();
          }
        }}
      ></TrashIcon>
    </div>
  );
}

export default CreateNote;
