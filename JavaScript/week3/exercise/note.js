// Save a note
const notes = [];

// Push object to the array
function saveNote(content, id) {
  notes.push({ content: content, id: id });
  return notes;
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do the dishes", 3);

console.log(notes);

// Get a note
function getNote(id) {
  // Validate id input
  if (!id) {
    console.log(`Error: id input is needed.`);
    return;
  }

  if (typeof id !== "number") {
    console.log(`Error: id must be a number.`);
    return;
  }

  // Search for the note
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  // If the id is not found
  console.log(`Note with id ${id} not found`);
  return;
}

const firstNote = getNote(3);
console.log(firstNote);

// Log out notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const formattedNote = `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`;
    console.log(formattedNote);
  }
  return;
}

logOutNotesFormatted();

// Unique feature - Remove note by id
function removeNoteById(id) {
  const notesRemove = structuredClone(notes);

  if (!id || typeof id !== "number") {
    console.log(`Error: id input is needed.`);
    return;
  }

  for (let i = 0; i < notesRemove.length; i++) {
    if (notesRemove[i].id === id) {
      notesRemove.splice(i, 1);
      console.log(`Note ${notesRemove.content} removed`);
      console.log(notesRemove);
      return notesRemove;
    }
  }
  console.log(`Note with id ${id} not found.`);
}

removeNoteById(1);
