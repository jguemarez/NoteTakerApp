# Note Taker App

![MIT license badge](https://img.shields.io/badge/license-MIT-blue)

## Description


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

N/A: The full stack application is actually a website deployed to Heroku.

![Screenshot showing the repo with the modules and package.json for the app](images/SVG-repo.png)

## Usage



## Credits

The project is of the authorship of Jonathan Maldonado.The GitHub repo can be found at: <https://github.com/jguemarez/NoteTakerApp> .

The .gitignore file was lifted from the GitLab class repo: <https://git.bootcampcontent.com>.

The starter code for the app (basically providing its front end), can be found at:  <https://github.com/coding-boot-camp/miniature-eureka>

The folder structure of the project and the helper functions and custom middleware has been adapted from those found in the activities and Mini-Project for the Module 11 of the Rutgers Full Stack Bootcamp. 

This app works in the Node.js JavaScript runtime environment. The latest stable (recommended version) can be found at: <https://nodejs.org/en/download>

We import and make use of the built-in modules "path" and "fs" and "util" from the standard library.

We use npm for the specification (semantic versioning) of the app's dependencies and their installation. Here is the URL for the official site of the npm registry: <https://www.npmjs.com>

In particular, we imported  "express": "^4.16.4"(in order to create and work with servers, middleware, routers, etc.), "path-to-regexp": "^6.2.1" (initially a sub-dependency in the node-modules folder that was updated to get rid of some error messages in the terminal), and "uuid": "^8.3.2" (from this one we just import the v4 function (renamed uuidv4 within the project) so as to give each note a universally unique identifier ) in Dependencies . You can find the most recent versions here:

<https://www.npmjs.com/package/express> for Express; <https://www.npmjs.com/package/path-to-regexp> for Path-to-RegExp; and <https://www.npmjs.com/package/uuid> for UUID.


## How to Contribute

If you want to contribute, feel free to fork the repo, modify the repo and then open a pull request. That way I can review the changes before deciding whther to merge them in the codebase or not.

## Tests

The app was manually tested multiple times before deployment by its author, checking for errors both in the browser's (Google Chrome DevTools for the front end) console and in the terminal (Git Bash for the back end)However, the user should keep an eye for any error thrown in the console and, if possible, open an issue in the GitHub repo detailing the bug. In the future, it would be interesting to devise some tests using a node package like JEST (documentation available at: <https://jestjs.io/docs>.)

## Questions

My GitHub username is "jguemarez" and you can checkout my profile at: <https://www.github.com/jguemarez>.
For further questions and comments, you can mail them to the following address: <cantor.dedekind112358@gmail.com>.

## License

This is an open-source project under the terms of agreement provided by the MIT license. 
For more information, click on the following link: <https://opensource.org/license/mit>

