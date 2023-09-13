# Note Taker App

![MIT license badge](https://img.shields.io/badge/license-MIT-blue)

## Description

This Note Taker app was created with the purpose of providing busy people with an easy and reliable way to keep track of their to-dos, thoughts, appointments, etc. By accessing it online, the user will be able to do the following:

1. Write new notes within the provided title and text fields on the right-side of the screen.

2. Saving the notes to a database if they so desire it.

3. Empty the fields in order to write a new note.

4. Select an already saved note from the rendered list of notes retrieved from the database in order to inspect it on the note-pad area to the right.

5. Delete an already saved note if the user no longer has any use for it.

For its author, the challenge was an instructive way to :

1. Practice modularization as a way to implement separation of concerns when coding the back-end of the application. In this case, different endpoints get their own node module, and so do custom middleware and helper functions.

2. Continue learning about the connection between different methods of request (get, post, and delete) using the Fetch API on the front-end and the different routes (including some that utilize Express.js routers) defined on the back-end.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

N/A: The full stack application is actually a website deployed to Heroku. See "Credits" section for more information.

## Usage

Disclaimer: Screenshots present the website as rendered on the Google Chrome Version 116.0.5845.188 (Official Build) (64-bit), run in a Windows 11 Home Version 22H2 environment.

1. By navigating to the Heroku URL <https://web-note-taker-b639757599ce.herokuapp.com/>, the user will be presented with the following image:

![Landing page of the Note Taker website](images/noteTakerApp-1.png)

2. Pressing the "Note Taker" navigation link in the homepage will take the user to the 'api/notes' endpoint which in this case renders an empty db.json file because there has not been any added notes:

![Initially the database contains no notes](images/noteTakerApp-2.png)

3. If instead, the user presses the "Get Started" button in the homepage, he/she will navigate to the '/notes' page. To the left, there will be an empty note list with the message "No saved Notes" and to the right, there will be a virtual notepad with input fields for title and text of a note with placeholders. Notice the cross-shaped bottom in the upper right corner. It allows the user to clear notepad's fields in order to write a new note:

![Initial state of the '/notes' page](images/noteTakerApp-3.png)

4. When the user has written something in both fields of the notepad, a save-note button shaped loke a floppy disk appears:

![A recently written active note triggers the appearance of the save button](images/noteTakerApp-4.png)

5. After pressing the save button, the note is written (in JSON string format, together with a universally unique id) to the database and a list item is rendered on the left side containing the title of the note and a garbage-can shaped delete button to the right of the title:

![Screenshot shows the rendered list item corresponding to the note](images/noteTakerApp-5.png)

6. As seen above, once the note is saved, the input fields are cleared. That means that the user can immediately start writing a new note (even one with grammar/syntax errors!):

![Once you save a note, you can automatically start writing a new one](images/noteTakerApp-6.png)

7. The user can continue adding as much notes as he/she likes by writing them and pressing the save button:

![Alt text](images/noteTakerApp-8.png)

8. By pressing the delete button on the right side of the note list element, the note will be deleted(meaning the corresponding JSON string will be deleted from 'db.json' and the modified database document will be re-rendered to the left side of the screen):

![Note 2 was deleted from the list](images/noteTakerApp-9.png)

9. If the user navigates to '/api/notes' (either by pressing the "Note Taker" nav link in the homepage or by typing the URL in the browser), a .json file containing JSON strings for all notes saved will be rendered:

![File containing JSON strings for each note saved, including an id](images/noteTakerApp-10.png)

10. If the user so wishes, they can navigate through the static assets contained in the 'public' folder of the app, where they can find the html files, the stylesheet and the scripts used in the front-end:

![Stylesheet for the pages found at 'assets/css/styles.css'](images/staticAssets1.png)

![Script file for the pages found at 'asset/js/index.js' ](images/staticAssets2.png)

## Credits

The project is of the authorship of Jonathan Maldonado.The GitHub repo can be found at: <https://github.com/jguemarez/NoteTakerApp> .

The app is deployed on Heroku at: <https://web-note-taker-b639757599ce.herokuapp.com/>.

The .gitignore file was lifted from the GitLab class repo found at: <https://git.bootcampcontent.com>.

The starter code for the app (providing its front end), can be found at:  <https://github.com/coding-boot-camp/miniature-eureka>

The front-end part employs both the Bootstrap CSS framework and the Font-Awesome third party icon API. Links to the respective libraries are below:

<https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css>

<https://use.fontawesome.com/releases/v5.3.1/css/all.css>

The folder structure of the project and the helper functions and custom middleware has been adapted from those found in the activities and Mini-Project for the Module 11 of the Rutgers Full Stack Bootcamp.

This app works in the Node.js JavaScript runtime environment. The latest stable (recommended version) can be found at: <https://nodejs.org/en/download>

We import and make use of the built-in modules "path", "fs" and "util" from the standard library.

We use npm for the specification (semantic versioning) of the app's dependencies and their installation. Here is the URL for the official site of the npm registry: <https://www.npmjs.com>

In particular, we added  "express": "^4.16.4"(in order to create and work with servers, middleware, routers, etc.), "path-to-regexp": "^6.2.1" (initially a sub-dependency in the node-modules folder that was updated to get rid of some error messages in the terminal), and "uuid": "^8.3.2" (from this one we just import the v4 function (renamed uuidv4 within the project) so as to give each note a universally unique identifier ) to the Dependencies . You can find the most recent versions of the node packages here:

<https://www.npmjs.com/package/express> for Express; <https://www.npmjs.com/package/path-to-regexp> for Path-to-RegExp; and <https://www.npmjs.com/package/uuid> for UUID.


## How to Contribute

If you want to contribute, feel free to fork the repo, modify the repo on your local machine and then open a pull request. That way I can review the changes before deciding whther to merge them in the codebase or not.

## Tests

The app was manually tested multiple times before deployment by its author, checking for errors both in the browser's (Google Chrome DevTools for the front end) console and in the terminal (Git Bash for the back end). Before connecting the back-end to the front-end, some endpoints were tested using Insomnia 2023.5.17 as a client.

However, the user should keep an eye for any error thrown in the console and, if possible, open an issue in the GitHub repo detailing the bug. In the future, it would be interesting to devise some tests using a node package like JEST (documentation available at: <https://jestjs.io/docs>.)

## Questions

My GitHub username is "jguemarez" and you can checkout my profile at: <https://www.github.com/jguemarez>.
For further questions and comments, you can mail them to the following address: <cantor.dedekind112358@gmail.com>.

## License

This is an open-source project under the terms of agreement provided by the MIT license. 
For more information, click on the following link: <https://opensource.org/license/mit>

