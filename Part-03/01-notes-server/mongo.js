const mongoose = require("mongoose");

const password = "Sankar123";

const url = `mongodb+srv://SankarBir:${password}@cluster0.e2vuyni.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  correct: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "HTML is difficult",
  correct: false,
});

note.save().then((result) => {
  console.log("note saved successfully!");
  mongoose.connection.close();
});
