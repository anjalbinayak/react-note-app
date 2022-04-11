import { useState } from "react";

const NoteApp = () => {
  const [noteList, setNoteList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNote = () => {
    let notes = { noteTitle: title, noteDescription: description };

    setNoteList(...noteList, notes);

    setTitle("");
    setDescription("");
  };

  console.log(noteList);

  return (
    <div>
      <h1>Note App</h1>
      <br />
      <br />
      <label>Note Title</label>
      <br />
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <br />
      <br />
      <label>Note Title</label>
      <br />
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <br />
      <br />
      <button onClick={() => addNote()}>Add Note</button>

      {noteList.map((note) => {
        return (
          <div>
            <h3>{note.noteTitle}</h3>
            <p>{note.noteDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NoteApp;
