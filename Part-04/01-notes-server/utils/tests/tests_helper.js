const Note = require("../../models/notes");
const User = require("../../models/user");

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

const initialUsers = [
  {
    username: "root",
    password: "sekret",
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

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
};

module.exports = {
  initialNotes,
  initialUsers,
  nonExistingId,
  notesInDb,
  usersInDb,
};
