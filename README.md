# dynamic-script-js

This is the simple example, how dynamic script import might work in vanilla JS.

## How to start

1. Install dependencies:

        yarn

    or
        
        npm install

2. Start the app:

        yarn start

    or

        npm run start

The browser window will open automatically

## How it works

When `window` object loads, `index.js` inserts the new `<script type="text/javascript" src="helloWorld.js">` element, which loads `helloWorld.js`, inside `<div id="root"></div>`

When load is finished, `helloWorld()` function is started and `rootElement` is passed to it.

Then `helloWorld()` appends `<h1>Hello, World!</h1>` to `<div id="root"></div>` element using `rootElement` reference.

Also it outputs `Hello, World` to console.
