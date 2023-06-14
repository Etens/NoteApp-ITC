import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const options = { month: "short", day: "numeric", hour : "numeric", minute : "numeric", second : "numeric" };
  const [date, setDate] = useState(new Date().toLocaleString("en-US", options));

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const titleHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const addHandler = () => {
    setDate(new Date().toLocaleString("en-US", options));
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        title: inputTitle,
        text: inputText,
        date: date,
      }
    ]);

    setInputText("");
    setInputTitle("");
  };


  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const deleteAllNotes = () => {
      setNotes([]);
  };


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="Notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote
        titleHandler={titleHandler}
        textHandler={textHandler}
        addHandler={addHandler}
        inputTitle={inputTitle}
        inputText={inputText}
        deleteAllNotes={deleteAllNotes}
      />
    </div>
  );
}

export default Notes;
