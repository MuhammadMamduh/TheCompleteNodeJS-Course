const fs = require('fs');
const chalk = require('chalk');

// console.log("Notes Module have been called.");

const getNotes = (noteString) => "\n" + noteString;

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => title === note.title)

    // debugger

    if(!duplicateNote) // duplicateNote === undefined
    {
        notes.push({
            title: title,
            body: body,
        })
    
        saveNotes(notes)
        console.log("Note Added!");
    }
    else
    {
        console.log("Note Title Taken!");
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
    
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }

}

const removeNote = (title) => {

    const notesJSON = loadNotes();
    const newNotes = notesJSON.filter((note) => title !== note.title);
    
    if(newNotes.length == notesJSON.length)
    {
        console.log(chalk.bgRed("No Note with such Title 🤷‍♂️"));
    }
    else
    {
        saveNotes(newNotes);

        console.log(chalk.bgGreen("Note has been deleted ✅"));
    }
}

const listNotes = () => {
    console.log(chalk.bgYellow.blue.bold.italic("Your Notes"))
    loadNotes().forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const foundNote = loadNotes().find((note) => title === note.title);
    if(foundNote)
    {
        console.log(chalk.bold.bgYellow.black(foundNote.title));
        console.log(foundNote.body);
    }
    else
    {
        console.log(chalk.bgRed("No Note with such Title 🤷‍♂️"));
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}