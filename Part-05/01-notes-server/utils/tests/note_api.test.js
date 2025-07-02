const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app.js");
const Note = require("../../models/notes.js");
const helpers = require("./tests_helper.js");

beforeEach(async () => {
  await Note.deleteMany({});
  const noteObjects = helpers.initialNotes.map((note) => new Note(note));
  const promiseArray = noteObjects.map((note) => note.save());
  await Promise.all(promiseArray);
});
// End of initial notes for testing

const api = supertest(app);

describe("Testing GET requests", () => {
  test("notes are returned as json", async () => {
    await api
      .get("/api/notes")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    // .expect("Content-Type", "application/json; charset=utf-8");
  });

  test("all notes are returned", async () => {
    const notes = await helpers.notesInDb();

    expect(notes).toHaveLength(2);
  });

  test("a specific note is within the returned notes", async () => {
    const notes = await helpers.notesInDb();

    const contents = notes.map((e) => e.content);
    expect(contents).toContain("HTML is easy");
  });
});

describe("Testing POST requests", () => {
  test("there are two notes", async () => {
    const notes = await helpers.notesInDb();
    expect(notes).toHaveLength(helpers.initialNotes.length);
  });

  test("the first note is about HTTP methods", async () => {
    const notes = await helpers.notesInDb();
    const contents = notes.map((note) => note.content);
    expect(contents).toContain(helpers.initialNotes[0].content);
  });

  //post test
  // test("a valid note can be added ", async () => {
  //   const newNote = {
  //     content: "async/await simplifies making async calls",
  //     correct: true,
  //   };

  test("a note without content is not added", async () => {
    const newNote = {
      correct: true,
    };

    await api.post("/api/notes").send(newNote).expect(400);

    const notes = await helpers.notesInDb();

    const contents = notes.map((r) => r.content);

    expect(notes).toHaveLength(helpers.initialNotes.length);

    // expect(contents).toContain("async/await simplifies making async calls");
  });
});

describe("Testing DELETE requests", () => {
  test("a note can be deleted", async () => {
    const notes = await helpers.notesInDb();
    const noteToDelete = notes[0];
    await api.delete(`/api/notes/${noteToDelete.id}`).expect(204);

    const notesAfterDelete = await helpers.notesInDb();
    expect(notesAfterDelete).toHaveLength(helpers.initialNotes.length - 1);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
