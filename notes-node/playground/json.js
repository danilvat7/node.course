const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
};
const originalNoteStr = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteStr);

const noteStr = fs.readFileSync('notes.json');
const note = JSON.parse(noteStr);
console.log(note.title);