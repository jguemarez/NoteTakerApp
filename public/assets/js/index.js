//Declaring variables where references to different DOM elements will be stored.
let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

//Storing a reference to the nav link that can be found in both the homepage and the '/notes' page, depending to which page on the site the user navigated.
let noteTaker = document.getElementById('homepage/api');

//Dynamically selecting elements from the DOM when the user lands on the '/notes' page
if (window.location.pathname === '/notes') {
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  noteList = document.querySelectorAll('.list-container .list-group');
  noteTaker.setAttribute('href', '/'); //When the user is browsing the '/notes' page, clicking on the 'Note Taker' nav link will redirect to the homepage.
}

//When the user is browsing the homepage, clicking on the 'Note Taker' nav link will redirect to '/api/notes'.
if(window.location.pathname === '/') {
  noteTaker.setAttribute('href', '/api/notes');
}
// Show an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
  elem.style.display = 'none';
};

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

const deleteNote = (note) =>
  fetch(`/api/notes/${note.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note)
  });

//Renders whatever note element was selected (from the list on the left side) on the virtual notepad on the right side, and stops the user from modifying the note or re-saving it.
const renderActiveNote = () => {
  hide(saveNoteBtn);

  if (activeNote.id) {
    noteTitle.setAttribute('readonly', true);
    noteText.setAttribute('readonly', true);
    noteTitle.value = activeNote.title;
    noteText.value = activeNote.text;
  } else {
    noteTitle.removeAttribute('readonly');
    noteText.removeAttribute('readonly');
    noteTitle.value = '';
    noteText.value = '';
  }
};

const handleNoteSave = () => {
  const newNote = {           //The newNote object is constructed by reading the values entered through the input field 
    title: noteTitle.value,
    text: noteText.value,
  };
  saveNote(newNote).then(() => { //Asynchronuosly, write the  JSON string corresponding to the newNote object to the db.json file. Afterwards, re-rendered all notes, active or not.
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Delete the clicked note
const handleNoteDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const noteEl = e.target;
  const note = JSON.parse(noteEl.parentElement.getAttribute(`data-note`)); //The parent element is a list item and its data-note attribute has a JSON encoding of the original note object as its value

  if (activeNote.id === note.id) { 
    activeNote = {};
  }

  deleteNote(note).then(() => { // Once the note with the specified id is deleted (asynchronous process that requires reding through a file), all the other notes are rendered again by the browser
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
  e.preventDefault();
  activeNote = JSON.parse(e.target.parentElement.getAttribute(`data-note`));/*When you click on a note elemet's title on the left side of the viewport, the original object note gets 
                                                                              recreated and the note's text and title are rendered again on the right side of the viewport.*/
  renderActiveNote();
};

// Sets the activeNote to an empty object and allows the user to enter a new note, which will be automatically rendered on the right side of the viewport
const handleNewNoteView = () => {
  activeNote = {};
  renderActiveNote();
};

//Makes the save button visible only when both input fields (title and text) are non-null (i.e., their value is not strictly equal to the empty string)
const handleRenderSaveBtn = () => {
  if (!noteTitle.value.trim() || !noteText.value.trim()) {
    hide(saveNoteBtn);
  } else {
    show(saveNoteBtn);
  }
};

//Asynchronous function to render all the notes in db.json as an unordered list
const renderNoteList = async (notes) => { 
  let jsonNotes = await notes.json();  /*Using the json() promise-based method of the Response interface to read the data stream to completion. 
                                      Promise resolves with the result of parsing the text(returns a JavaScript array of objects))*/
  if (window.location.pathname === '/notes') {
    noteList.forEach((el) => (el.innerHTML = ''));
  }

  let noteListItems = []; // Initializing the array where all of the list items will be pushed after creating and stylizing them

  // Returns HTML element with or without a delete button (having a delete button is a default for any note with a valid id)
  const createLi = (title, delBtn = true) => {
    const liEl = document.createElement('li'); //Creating the list item for the note
    liEl.classList.add('list-group-item');

    const spanEl = document.createElement('span'); //Creating the span element where the title will be added.
    spanEl.classList.add('list-item-title');
    spanEl.innerText = title;
    spanEl.setAttribute('onclick', `handleNoteView(event)`);//Adding event-listener dinamically to the title-bearing span element inline (using 'onclick' attribute).

    liEl.append(spanEl);

    if (delBtn) { //Control statement to create, stylize, append and add event-listener to delete button, assuming the note has a uuid.
      const delBtnEl = document.createElement('i');
      delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
      );
      liEl.append(delBtnEl);

      delBtnEl.setAttribute('onclick', `handleNoteDelete(event)`); 
    }

    return liEl;
  };

  if (jsonNotes.length === 0) {
    noteListItems.push(createLi('No saved Notes', false)); //Create a list item that when rendered tells the user that no note has yet been added to the db.
  }

  jsonNotes.forEach((note) => {
    const { title, text, id } = note; //Destructuring the note object for easy property access

    const li = createLi(title); //For each note saved to the db file, create a list element with the title as text content and the following 'data-note' attribute...

    li.setAttribute('data-note',`{"title":"${title}","text":"${text}","id":"${id}"}`); //The value of the attribute is a JSON string encoding of the note object

    noteListItems.push(li); //Push the newly created list item into the initially empty array
  });

  if (window.location.pathname === '/notes') {
    noteListItems.forEach((note) => noteList[0].append(note)); //Append each list item in the array to the unordered list element selected by the querySelectorAll command.
  }
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => getNotes().then(renderNoteList);

//Adding event-listeners for the following DOM elements, specifying the type of the event and the previously defined (through function expressions) event-handlers
if (window.location.pathname === '/notes') {
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  noteTitle.addEventListener('keyup', handleRenderSaveBtn);
  noteText.addEventListener('keyup', handleRenderSaveBtn);

}

//Invoking the getAndRenderNotes function so that the previously save notes get rendered once the '/notes' page loads
getAndRenderNotes();
