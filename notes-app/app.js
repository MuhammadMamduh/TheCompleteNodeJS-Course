const chalk = require('chalk');
const yargs =  require('yargs');
const { readNote } = require('./notes.js');
const notes = require("./notes.js");

// yargs.version('10.10.10');
yargs.command({
    command: 'add',
    description: 'Adds a new Note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log("Adding a new Note ...");
        // console.log("Title: ", argv.title);
        // console.log("Body: ", argv.body);
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    description: 'Removes a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    description: 'Lists all your Notes.',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    description: 'Reads an existing Note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        readNote(argv.title);
    }
})

// console.log(process.argv)
// yargs.argv
yargs.parse()
