# Just Another Text Editor (JATE)
A browser-based PWA text editor that works offline, featuring IndexedDB for data storage and service workers for seamless functionality.

## Table of Contents
- [Description](#Description)
- [Features](#Features)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)

## Description
The Just Another Text Editor (JATE) is a full-stack web application that allows developers to create and save notes or code snippets both online and offline. This project features data persistence using IndexedDB via the idb library, ensuring that the content is saved in the database and can be retrieved later. This PWA includes a service worker for offline functionality, enabling users to install the app on their device and use it without an internet connection.

You can view the live application [here](https://just-another-text-editor-edx.onrender.com/).

## Technologies
- Node.js for the backend
- Express.js for routing
- IndexedDB via the idb package for data storage
- Webpack for bundling JavaScript files
- Workbox for service worker generation and caching
- PWA (Progressive Web App) features, including offline functionality and installation

## Installation
- Clone the repository:
`git clone https://github.com/astro0725/JATE.git`
- Navigate to the project directory:
`cd JATE`
- Install the necessary dependencies:
`npm install`
- Start the application locally:
`npm run start` or `npm run start:dev`

## Usage
- Once the application is running, you can access it in your browser at http://localhost:3000.
- You can create and edit text directly within the editor. Your text will automatically be saved in IndexedDB when you click off the DOM window.
- The app is installable as a PWA. Click the Install button to add the application to your desktop or device for offline use.

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) <br/>
This project is licensed under the MIT license. For more details, see [this link](https://opensource.org/licenses/MIT).
