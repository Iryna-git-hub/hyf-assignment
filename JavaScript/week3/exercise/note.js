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
  for (let i = 0; i < notes.length; i++) {
    if (id === undefined || typeof id !== "number") {
      console.log(`Error: id input is needed.`);
    } else if (notes[i].id === id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(2);
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
// function removeNoteById(id) {
//   for (let i = 0; i < notes.length; i++) {
//     if (id === undefined || typeof id !== "number") {
//       console.log(`Error: id input is needed.`); 
//       return;
//     }

//     if (notes[i].id === id) {
//       notes.splice(i, 1);
//       console.log("Note removed");
//       console.log(notes);
//       return;
//   }
// }
// }

// removeNoteById(3);

// I tried to implement the function, but it removes the note by id for first function us well. 
