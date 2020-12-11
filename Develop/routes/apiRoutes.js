const fs = require("fs");
const notes = require("../db/db.json");

module.exports = function (app) {
  // Displays all notes
  app.get("/api/notes", function (req, res) {
    return res.json(notes);
  });

  app.post("api/notes", function (req, res) {
    const newNote = req.body;
  });

  app.delete("api/notes/:id", function (req, res) {});
};
