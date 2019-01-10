console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOtions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'

};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOtions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOtions
    })
    .command('remove', 'Read a note', {
        title: titleOtions
    })
    .help()
    .argv;

const command = argv._[0];
console.log('Command ', command);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    note ? console.log('Success') : console.log('Not cteate');
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log('Notes ', allNotes);
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    note ? console.log('Success', note) : console.log('Note not found');
} else if (command === 'remove') {
    const isRemoved = notes.removeNote(argv.title);
    const msg = isRemoved ? 'Note was removed' : 'Note not found';
    console.log(msg);
} else {
    console.log('dones not exist');
}