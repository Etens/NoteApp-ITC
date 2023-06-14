import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TrashIcon from "@mui/icons-material/DeleteForeverOutlined";
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Note({ id, title, text, deleteNote, date, editDate }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [titleModalHandler, setTitleModalHandler] = React.useState(title);
  const [textModalHandler, setTextModalHandler] = React.useState(text);
  const [titleEdit, setTitle] = React.useState(title);
  const [textEdit, setText] = React.useState(text);
  const [editDateHandler, setEditDate] = React.useState(editDate);
  const editNote = () => {
    setTitle(titleModalHandler);
    setText(textModalHandler);
    handleClose();
  };

  return (
    <div className="Note">
      <div className="Note-Click" onClick={handleOpen}></div>
      <Modal className="Modal"
        open={open}
        onClose={handleClose}
      >
        <Box id="Modal-Box">
          <div className="Note-Modal">
            <input className="Note-Title" type="text" value={titleModalHandler} onChange={(e) => setTitleModalHandler(e.target.value)} />
            <TextareaAutosize className="Note-Body" type="text" value={textModalHandler} onChange={(e) => setTextModalHandler(e.target.value)} />
            <div className="Note-Footer">
              <div className="Note-DateCreation">{date}</div>
            </div>
            <button className="Note-Edit" onClick={() => {
              editNote();
              const options = { month: "short", day: "numeric", hour : "numeric", minute : "numeric", second : "numeric" };
              setEditDate(new Date().toLocaleString("en-US", options));
            }}>Edit</button>
          </div>
        </Box>
      </Modal>
      <div className="Note-Title">{titleEdit}</div>
      <div className="Note-Body">{textEdit}</div>
      <div className="Note-Footer">
        <div className="Note-Date">
          <div className="Note-DateCreation">{date}</div>
          <div className="Note-EditDate">{editDateHandler}</div>
        </div>
        <TrashIcon
          className="Note-Delete"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete your note?")) {
              deleteNote(id);
            }
          }}
        ></TrashIcon>
      </div>
    </div>
  );
}

export default Note;
