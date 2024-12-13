const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return "Your notes...";
}

function addNote(title, body) {
  const notes = loadNotes();
  //   const duplicateNotes = notes.filter((note) => note.title === title;);

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse(" Note Added "));
  } else {
    console.log(chalk.red.inverse(" Note title taken! "));
  }
}

function saveNotes(notesArr) {
  const dataJSON = JSON.stringify(notesArr);
  fs.writeFileSync("notes.json", dataJSON);
}

function removeNotes(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse(" Note remove! "));
  } else {
    console.log(chalk.red.inverse(" Note not found! "));
  }
}

function loadNotes() {
  try {
    const data = fs.readFileSync("notes.json").toString();
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function listNotes() {
  const notes = fs.readFileSync("notes.json").toString();
  const notesArr = JSON.parse(notes);
  notesArr.forEach((note) => {
    console.log("--------------------------------");
    console.log(chalk.yellow("Title: ") + note.title);
    console.log(chalk.yellow("body: ") + note.body);
    console.log("--------------------------------");
  });
}

function readNotes(title) {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(`${chalk.inverse(note.title)}\n${note.body}`);
  } else {
    console.log(chalk.red.inverse(" Note not found! "));
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNotes,
  listNotes,
  readNotes,
};
