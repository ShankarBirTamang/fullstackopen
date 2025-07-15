// test/user.test.cjs
const test = require("node:test");
const assert = require("node:assert/strict");
const mongoose = require("mongoose");
const supertest = require("supertest");
const bcrypt = require("bcrypt");
const app = require("../../app");
const User = require("../../models/user");

const api = supertest(app);

test.before(async () => {
  await User.deleteMany({});

  const passwordHash = await bcrypt.hash("sekret", 10);
  await new User({ username: "root", passwordHash }).save();
});

test("fails if username is less than 3 chars", async () => {
  const newUser = {
    username: "ab",
    name: "Short Name",
    password: "validpass",
  };

  const result = await api.post("/api/users").send(newUser);
  assert.equal(result.status, 400);
  assert.match(result.body.error, /at least 3 characters/);
});

test("fails if password is missing", async () => {
  const newUser = {
    username: "validusername",
    name: "No Password",
  };

  const result = await api.post("/api/users").send(newUser);
  assert.equal(result.status, 400);
  assert.match(result.body.error, /required/);
});

test("fails if password is less than 3 chars", async () => {
  const newUser = {
    username: "validusername",
    name: "Short Password",
    password: "12",
  };

  const result = await api.post("/api/users").send(newUser);
  assert.equal(result.status, 400);
  assert.match(result.body.error, /at least 3 characters/);
});

test("fails if username already exists", async () => {
  const newUser = {
    username: "root",
    name: "Duplicate User",
    password: "validpassword",
  };

  const result = await api.post("/api/users").send(newUser);
  assert.equal(result.status, 400);
  assert.match(result.body.error, /unique/);
});

test("succeeds with valid username and password", async () => {
  const newUser = {
    username: "validuser",
    name: "Valid User",
    password: "validpassword",
  };

  const result = await api.post("/api/users").send(newUser);
  assert.equal(result.status, 201);
  assert.equal(result.body.username, "validuser");

  const users = await User.find({});
  assert.equal(users.length, 2);
  assert(users.map((u) => u.username).includes("validuser"));
});

test.after(async () => {
  await mongoose.connection.close();
});
