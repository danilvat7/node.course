console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = process.argv[2]
console.log('Command ', command);
console.log(argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    console.log('list');

} else if (command === 'read') {
    console.log('reading node');

} else if (command === 'remove') {
    console.log('removing node');

} else {
    console.log('dones not exist');

}