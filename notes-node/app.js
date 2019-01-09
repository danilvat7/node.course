console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0]
console.log('Command ', command);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    note ? console.log('Success') : console.log('Not cteate');
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('dones not exist');

}