import { useState } from "react";

const NoteApp = () => {
  const [noteList, setNoteList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNote = () => {
    let notes = { noteTitle: title, noteDescription: description };

    setNoteList([...noteList, notes]);

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
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <br />
      <label>Note Description</label>
      <br />
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => addNote()}>Add Note</button>

      <h1>Notes</h1>
      {noteList.map((note) => {
        return (
          <div>
            <hr />
            <h3>{note.noteTitle}</h3>
            <p>{note.noteDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NoteApp;
