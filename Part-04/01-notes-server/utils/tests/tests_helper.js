const Note = require("../../models/notes");

const initialNotes = [
  {
    content: "HTML is easy",
    correct: false,
  },
  {
    content: "Browser can execute only JavaScript",
    correct: true,
  },
];

const nonExistingId = async () => {
  const note = new Note({ content: "willremovethissoon" });
  await note.save();
  await note.deleteOne();

  return note._id.toString();
};

const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map((note) => note.toJSON());
};

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
};
