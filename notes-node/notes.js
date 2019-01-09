console.log('Starting notes.js');
const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesStr = fs.readFileSync('notes-data.json');
        return JSON.parse(notesStr);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };
    const duplicateNotes = notes.filter(item => item.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};


const getAll = () => {
    console.log('List');
};

const getNote = (title) => {
    console.log('Get note', title);
};

const removeNote = (title) => {
    console.log('Remove note', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};