const fs = require("fs");
const notes = require("../db/db.json");
const nanoID = require("nanoid").nanoid;

module.exports = function (app) {
  // Displays all notes
  app.get("/api/notes", function (req, res) {
    return res.json(notes);
  });
// Posts new notes and uses npm nanoid to give each note a short id.
  app.post("/api/notes", function (req, res) {
    const notesdb = notes;
    const newNote = {
      id: nanoID(),
      title: req.body.title,
      text: req.body.text,
    };
    notesdb.push(newNote);
    fs.writeFile("app/db/db.json", JSON.stringify(notesdb), function () {
      res.json(notesdb);
      console.log("posted");
      console.log(notesdb);
    });
  });
// Finds note by nanoid and deletes appropriate note.
  app.delete("/api/notes/:id", function (req, res) {
    const notesdb = notes;
    const deleteNote = notesdb.filter((note) => note.id === req.params.id);
    notesdb.splice(deleteNote, 1);
    fs.writeFile("app/db/db.json", JSON.stringify(notesdb), function () {
      res.json(notesdb);
      console.log("deleted");
    });
  });
};
