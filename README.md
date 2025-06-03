# 🔥 TEJ Bootcamp

## 💚 Junior Phase

The junior phase will comprise of 10 sections, with each section taking roughly 1 week of classes.

### Course material

- Our main curriculum will follow the [Fullstack open curriculum](https://fullstackopen.com/en/) from the University of Helsinki
- For our intro on pure react & tooling, we will follow the 'No frills react' and 'JS tools' chapters from [Complete Intro to React v8](https://react-v8.holt.courses/) by Brian Holt

### Useful links

- [git basics](https://git-scm.com/book/en/v2)
- [React project starter kit](https://github.com/TEJ-Fellowship/react-start-kit)

### Junior Phase Schedule

- You can use this <a href="https://docs.google.com/spreadsheets/d/13IWu48jcdKJnNBHTXIRGEg-uO8L2p5z1M3Kj98RfPyg/copy" target="_blank">spreadsheet</a> to track your bootcamp progress.
  Click the link to make a copy, then enter your start date and expected study hours per week in the Timeline sheet. As you finish each course, update the Curriculum Data sheet with your completion date on the "Actual End Date" column. This will automatically revise the "Calculated End Date" column estimates for when you'll complete the bootcamp courses.

---

## [PART 0: Fundamentals of web apps](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)

HTTP call

<details><summary><h3 style="display:inline">Chapters</h3></summary>

<details><summary>Part 0-b</summary>

**_WE-WILL-LEARN:_**

- HTTP call

**_PRE-WORK:_**

- [PART 0: Read only the 'HTTP GET' section](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)

**_TO-STUDY:_**

- [PART 0-b: HTTP request](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#http-get)

**_LECTURE-VIDEO:_**

- [Exercise web sequence diagrams](https://youtu.be/ycQnptR5qj8)

**_TO-DO:_**

- [0.4-0.6](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#exercises-0-1-0-6)

_Instructions for TO-DO_

1. create a new git repository called `fullstackopen` in your local computer
1. create a repository in github to push your local `fullstackopen`
1. create a folder called `part0` inside `fullstackopen`
1. create separate files to put your sequence diagrams for exercises 0.4 to 0.6

</details>

</details>

---

## [PART 1: Introduction to react](https://fullstackopen.com/en/part1)

pure react, modern react dev setup, component, state, event handler

<details><summary><h3 style="display:inline">Chapters</h3></summary>
<details><summary>Part 1-a: Introduction to React</summary>

- [Part 1-a: Introduction to React](https://fullstackopen.com/en/part1/introduction_to_react)

**_WE-WILL-LEARN:_**

- pure react
- modern react dev setup

**_PRE-WORK:_**

- [watch this video on eventloop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

**_TO-STUDY:_**

- [Complete Intro to React v8: Pure react](https://react-v8.holt.courses/lessons/no-frills-react/pure-react)
- [Complete Intro to React v8: JS tools](https://react-v8.holt.courses/lessons/js-tools/npm)
- [PART 1-a: Intro to React](https://fullstackopen.com/en/part1/introduction_to_react)

**_LECTURE-VIDEO:_**

- [Pure react](https://youtu.be/gjPQSF1GvRk)
  1. Create folder structure and files
  - create folder `pure-react`, then `src` inside it
  2. Create `index.html` inside `src`
  - add script tag for React, ReactDOM, and index.js
  3. Create `index.js` inside `src`
  - use `ReactDOM.createRoot`, `React.createElement`, and `render` to create web application using pure react
- [Tooling with npm, prettier, eslint, vite](https://youtu.be/JXvofCk2_gM)
  1. Create folder structure and files
  - create folder `tooling`, then copy `src` from `pure-react`
  2. Toolings
  - create npm project by `npm init -y`
  - install Dev prettier, eslint, vite
  - setup config for prettier, eslint, and vite
  - install react, react-dom
- [Convert pure react to dev environment running from vite](https://youtu.be/JXvofCk2_gM?t=1552)
  1. Move react and react-dom libraries to index.js
  2. Use `type="module"` in index.html
  3. Create vite scripts in package.json for `dev`, `build`, and `preview`
- [Using JSX](https://youtu.be/eG7UPaLh5WQ)
  1. Move components `App` and `Hello` to individual files
  - remember to import and export required things
  - make sure to start component name with `Capital`
  2. Convert `React.createElement` to JSX
  - rename all files with JSX to `.jsx` extension from `.js`
  - remove the imports that are not required for JSX
  3. Configure eslint to understand react and JSX
  - `npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
  - update eslint config
  4. Please read [Some notes](https://fullstackopen.com/en/part1/introduction_to_react#some-notes) section for common errors to avoid
  5. What can you [render](https://fullstackopen.com/en/part1/introduction_to_react#do-not-render-objects) in JSX?

_Instructions for the `workshops` shown in the `LECTURE-VIDEO`s_

1. Create a new repository called `fullstackopen-workshops`
   - create the repository in your local computer
   - create a repository in github to push your local `fullstackopen-workshops`
   - create a folder called `part1` inside `fullstackopen-workshops`
2. Please do the workshop at least once by yourself
   - read notes under `LECTURE-VIDEO` section
   - watch the lecture-video (if required)
   - read the material (if required)
   - then put today's workshop inside the `part1` folder
   - refer to source code from lecture in [`part1-a` branch](https://github.com/TEJ-Fellowship/tej-bootcamp/tree/part1-a/part1/pure-react) if needed
   - continue future workshops under appropriate folder structures

**_TO-DO:_**

- [1.1-1.2](https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2)

_Instructions for TO-DO_

1. In the `fullstackopen` repository, create a folder called `part1` inside `fullstackopen`
2. Create folder called `courseinfo` inside of `part1` to put your code for exercise 1.1-1.2
   - You can create `courseinfo` project either by using `vite`, as we did for the class today. You can clone this [starter kit](https://github.com/TEJ-Fellowship/react-start-kit)
   - Or you can create `courseinfo` project using `create-react-app` as described in the [`introduction to react`](https://fullstackopen.com/en/part1/introduction_to_react) section of the course

_note-1_: If you are cloning the starter kit, delete the `.git` directory inside the clone.
_note-2_: See this [example exercise repository](https://github.com/fullstack-hy2020/example-submission-repository) for folder structure. Further details can be found with the [exercise instructions](https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2)

</details>

<details><summary>Part 1-b: Javascript</summary>

- [Part 1-b: Javascript](https://fullstackopen.com/en/part1/java_script)

**_WE-WILL-LEARN:_**

- Javascript concepts

**_TO-STUDY:_**

- master these Array methods: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [Includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some), [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

**_LECTURE-VIDEO:_**

- [Array methods in React](https://youtu.be/ZlBX5Wh6dBE)
  1. Create a react project that says `hello` to many people
  - create project `using-array` inside `part1`
  - copy the `src` files from [part1/tooling/src](https://github.com/TEJ-Fellowship/tej-bootcamp/tree/main/part1/tooling/src)
  2. In `App` create an array of objects of people to say hello to
  - a person object can have the properties for `firstName`, `lastName`, `id` etc.
  3. Display hello to each person
  - for each element in array, call `SayHello` component through the `map` method
    - pass entire person object to `SayHello`
    - in `SayHello`, destructure `props`
    - write a component helper function to return combination of `firstName`, `lastName`
    - use the helper function in the JSX returned by the component
  - If array is empty, display appropriate message
    - use if else condition
    - use ternary

```jsx
return (
  <div>
    {peopleArray.length > 0 ? (
      peopleArray.map((value) => <SayHello person={value} key={value.id} />)
    ) : (
      <h1>No records found</h1>
    )}
  </div>
);
```

- add `filter` method to say hello only to people with id greater than 2

_Instructions for the `workshop` shown in the `LECTURE-VIDEO`_

1. In the `fullstackopen-workshops` repository created in part1-a
   - create the workshop project `using-array` inside the folder `part1`
2. Please do the workshop at least once by yourself
   - read notes under `LECTURE-VIDEO` section
   - watch the lecture-video (if required)
   - do today's workshop in the `using-array` folder
   - refer to source code from lecture in [`part1-b` branch](https://github.com/TEJ-Fellowship/tej-bootcamp/tree/part1-b/part1/using-array) if needed

**_TO-DO:_**

- [1.3-1.5](https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5)

_Instructions for TO-DO_

1. In the `fullstackopen/part1/courseinfo` repository, continue to put your code for exercise 1.3-1.5

</details>

<details><summary>Part 1-c: Component state, event handlers</summary>

- [Part 1-c: Component state, event handlers](https://fullstackopen.com/en/part1/component_state_event_handlers)

**_LECTURE-VIDEO:_**

- [Component manual re-render](https://youtu.be/-GH2Qj9n-Mg)
  1. Create a react project that updates the count
  - create project `counter-app` inside `part1`
  - create component `App` and jsx file `index.jsx`
  2. Update the count in some set interval
  - use `setInterval` to update count, and also call the render manually to re-render the app
- [React state](https://youtu.be/RC-4xZIKqpo)
  1. Use `useState` hook to make a stateful component inside `App` component
  - convert the counter to a state using `useState`
  - use `setTimeout` to call a function after 1 second that changes the value of `counter` state
  - remove the manual call to render
- [React event handling](https://youtu.be/oeQ3M53rQVQ)
  1. add a button to increase the count
  - add button element
  - include an `onClick` event handler to the button. The event handler has to be a function, not function execution!
  2. Refactor components for display and button
  - refactor `Display` component
    - call `Display` from `App` and also pass it the counter state
  - refactor `Button` component
    - call it for plus, minus, and zero by passing appropriate event handlers

**_TO-DO:_**

- [1.6-1.14](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14)

</details>

<details><summary>Part 1-d: Complex state, debugging React apps</summary>

- [Part 1-d: Complex state, debugging React apps](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps)

**_WE-WILL-LEARN:_**

- a more complex state
  - array, object in state: don't mutate state!
- conditional rendering of component
- debugging React apps

**_LECTURE-VIDEO:_**

- [Using object, array in state](https://youtu.be/FBLdF4rpba4)
  1. Create a copy of `counter-app` in `part1` directory
  - first delete `node_modules` folder from `counter-app`
  - `cp -r counter-app double-counter`
  2. Put two counters
  - put the state of the left and right counter in an object
  - put the state of click history in an array
  - lets put the total number of clicks in a state
- [Conditional rendering in component](https://youtu.be/5AdVOjQMX2A)
  1. Create a new `History` component that shows the click history
  2. Conditionally show the history only when there is history
  - otherwise, show another message
- [React debugging, and notes on hooks](https://youtu.be/ExDd_g4rMkY)
  1. Do the following for debugging
  - console.log
  - debugger
  - [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  2. Rules of hooks (useState, useEffect etc.)
  - only call hooks inside functional components
  - do not call hooks from
    - inside of a loop
    - a conditional expression
- [Exercise 1.1 to 1.14 guide](https://youtu.be/H18zHpNDKwg)

**_TO-DO:_**

- [1.6-1.14](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14)

</details>

</details>

---

## [PART 2: Communicating with server](https://fullstackopen.com/en/part2)

Modules, forms, getting data from server, altering data in server

You can refer to the workshop code solutions [here](https://github.com/fullstack-hy2020/part2-notes)

<details><summary><h3 style="display:inline">Chapters</h3></summary>

<details><summary>Part 2-a: Rendering a collection, modules</summary>

- [Part 2-a: Rendering a collection, modules](https://fullstackopen.com/en/part2/rendering_a_collection_modules)

**_PRE-WORK:_**

- [watch at least first 3 parts of this youtube playlist](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

**_WE-WILL-LEARN:_**

- rendering collection [Array or Object]
  - don't mutate state! especially if state is Array or Object
- Array.map
- Array.reduce
  - [lecture notes from foundations](https://github.com/TEJ-Fellowship/js-foundations/blob/main/lecture-notes/testfirst-part-2.js)
  - [mdn documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- most common problems in React up to this point
  - the props are expected to be of a different type,
  - or called with a different name than they actually are, and destructuring fails as a result

**_LECTURE-VIDEO:_**

- [Using Array.map to show data in React](https://youtu.be/bb2Jp2aAFac?t=2)
  1. Create react project `notes-app`
  - create directory `part2`
  - create react project `notes-app` inside `part2`
  - pass array of notes from `index.jsx` to `App.jsx`
  - in `App.jsx` access the array data using indices
  2. Access the array using map method
- [Using key in React lists, and further debugging notes](https://youtu.be/bb2Jp2aAFac?t=1114)
  1. Use the `key` attribute when rendering array
  - understand how map method is working
  - using index vs id for `key` attribute
  2. Refactor the code
  - destructure the props
  - create the `components` directory inside `src`
  - refactor components and put them in `components` directory
    - note that the `key` attribute is now required in the component

**_TO-DO:_**

- [2.1-2.5](https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5)

</details>

<details><summary>Part 2-b: Forms</summary>

- [Part 2-b: Forms](https://fullstackopen.com/en/part2/forms)

**_WE-WILL-LEARN:_**

**Main concepts**

- controlled HTML input component
- filtering displayed elements

**Side notes**

- form onSubmit event handler needs event.preventDefault()
- form in App
- controlled HTML component: using onChange
- ternary expression
- Array.filter

**_LECTURE-VIDEO:_**

- [Adding a controlled HTML input component to add notes](https://youtu.be/gMdffc85U2M)
  1. Create a state to keep track of notes array
  2. Add a form in JSX to add a note
  3. Put an `onSubmit` event handler to the form
  4. Add a [controlled HTML input component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable) to capture the entry of a new note
  - add a new state to store the new note
  - use the state as the input `value`
  - add an `onChange` event handler on the input
  5. Complete `onSubmit` to add new note to notes array
- [Filtering displayed notes](https://youtu.be/YJhQ_6zGgA8)
  1. Add state to keep track of `showAll`
  2. Add a `notesToShow` variable to keep notes to show based on `showAll` state
  - if `showAll` is true, then `notesToShow` is same as `notes`
  - else, `notesToShow` only has importants `notes`
  3. Add functionality to toggle between `all` and `important`
  - add button with text for action
  - add `onClick` to button to toggle `showAll` state

**_TO-DO:_**

- [2.6-2.10](https://fullstackopen.com/en/part2/forms#exercises-2-6-2-10)

</details>

<details><summary>Part 2-c: Getting data from server</summary>

- [Part 2-c: Getting data from server](https://fullstackopen.com/en/part2/getting_data_from_server)

**_WE-WILL-LEARN:_**

- getting data from backend server
  - using [JSON Server](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d) as our backend server
- [useEffect hook](https://react.dev/reference/react/useEffect)
- using [Axios](https://axios-http.com/docs/intro) to call server
  - understanding [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

**_LECTURE-VIDEO:_**

- [Setting up json-server as our backend server](https://youtu.be/jM5vB4hX8_8)
  1. Create the `db.json` file with array of notes
  2. Install `json-server` as dev dependency
  ```
  npm install json-server --save-dev
  ```
  3. Start the json-server
  ```
  npx json-server --port 3001 --watch db.json
  ```
  4. Include json-server start command in package.json scripts
  5. view the output on web browser
  - if required, install the [JSONVue](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) extension
- [Understanding the useEffect hook](https://youtu.be/b_8Wz08L_Oo)
  1. in App.jsx, create a `useEffect` hook so that it is only called on first render
  2. update the `useEffect` hook so that it executes each time the `showAll` state changes
- [Using Axios in frontend to access data from backend](https://youtu.be/87ZVR9K9M70)
  1. Install axios as dependency
  ```
  npm install axios
  ```
  2. Read the data from json-server from our app using axios
  - start json-server in one terminal
  - start the app in another terminal
  - add code for axios.get in App.jsx inside the `useEffect` hook
  - modify `useEffect` so that it is called only on first render of the component

**_TO-DO:_**

- [2.11](https://fullstackopen.com/en/part2/getting_data_from_server#exercise-2-11)

</details>

<details><summary>Part 2-d: Altering data in server</summary>

- [Part 2-d: Altering data in server](https://fullstackopen.com/en/part2/altering_data_in_server)

**_WE-WILL-LEARN:_**

- understanding [REST](https://www.codecademy.com/article/what-is-crud)
  - routes
  - CRUD (Create, Read, Update, Delete) actions on REST routes
  - [axios methods corresponding to CRUD actions](https://www.freecodecamp.org/news/axios-react-how-to-make-get-post-and-delete-api-requests/)
- sending data to the Backend Server
  - [creating new data using axios.post](https://fullstackopen.com/en/part2/altering_data_in_server#sending-data-to-the-server)
  - [updating existing data using axios.put](https://fullstackopen.com/en/part2/altering_data_in_server#changing-the-importance-of-notes)
  - [handling Error in Promise using promise.catch](https://fullstackopen.com/en/part2/altering_data_in_server#promises-and-errors)

**Side notes**

- Array.find
- Review
  - Array.map
  - Array.filter

**_LECTURE-VIDEO:_**

- [Using axios.post to create note in backend](https://youtu.be/3R6ptNpQI78)
  1. Add `axios.post` code inside the event handler responsible for creating new note
  - a brief look at REST API
  - remove the `id` from your new note object, because now the REST API should create the id
  - update your notes state with the returned note object
  - now, even if you refresh, the newly added note is still present
- [Using `axios.put` to update note in backend](https://youtu.be/io2J85hh-Xw)
  1. Add button to toggle the `important` field of note
  - in `Note` component, add a button to toggle importance
  - what will be the `onClick` event handling function on the button?
  2. In the event handling function, add logic to update the data in server, and in state
  - first, find the note from our state
  - then, create a new object with the changed state of the note
    - don't mutate state directly!
  - send the new object using axios.put to update data in server
  - change the state of notes to reflect the updated note
- [Refactoring axios services](https://youtu.be/98dbEWhUxy4)
  1. Create a `services` folder inside the `src` folder
  2. Create `notes.js` fild inside `services`
  3. Create a `getAll`, `create`, and `update` functions specifically only for the server functions
  - return a promise that returns the destructured data
  - use these new functions in `App.jsx` to interact with the server
- [Handling axios errors in catch block](https://youtu.be/XTgRHClbphU)
  1. In `getAll` note service, add a fake note to the array returned from server
  2. Add a `catch` block to catch any error to the call to `update`
  - when we try to update a note in the server that does not exist, json-server will throw an error
  - print the error in the `catch` block
  - if the status code is `404`, it means the data does not exist
    - remove the data from `notes` state if data does not exist in server
    - show an alert with proper error message

**_TO-DO:_**

- [2.12-2.15](https://fullstackopen.com/en/part2/altering_data_in_server#exercises-2-12-2-15)

</details>

<details><summary>Part 2-e: Adding styles to React app</summary>

- [Part 2-e: Adding styles to React app](https://fullstackopen.com/en/part2/adding_styles_to_react_app)

**_WE-WILL-LEARN:_**

- adding styles to React app
  - 2 methods
    - importing style file into JS project
    - inline styles in JSX
  - CSS rules = selector + declerations
  - class selectors in JSX
- error message in it's own React component
  - activating error component by setting error message

**_LECTURE-VIDEO:_**

- [Inline styles](https://youtu.be/k5ZeIoaccv4)
  1. In `App.jsx`, define a new variable whose value is an object with css style
  - note that the CSS properties are written in camelCase, not hyphenated as in css file
  2. In the `h1` element in the JSX, create a new attribute called `style` and assign it the above variable
- [Using a css file to define a style](https://youtu.be/k5ZeIoaccv4?t=542)
  1. Create a css file `index.css` in the `src` directory
  2. Define a style for class `.redbackground`
  3. Import `index.css` in `index.jsx`
  4. In `App.jsx`, use the `redbackground` class in the `input` html element
- [Creating dynamic error message from catch block](https://youtu.be/KNDIhALqNP4)
  1. Create a new component called `Notification`
  - define an `error` class in css file to use in the Notification component
  2. Define a new state to put the error message with an initial value of `null`
  3. In the `catch` block for error handling, add code to display the error message in the Notification component
  - in the `catch` block, set the error message state with the error message
  - after a certain amount of time, set the error message back to `null`
- [Debugging openweather map api key](https://youtu.be/aByLiib_Zks)

**_TO-DO:_**

- [2.16-2.17](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-16-2-17)
- [2.18-2.20](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20)

</details>

</details>

---

## [PART 3: Programming a server with NodeJS and Express](https://fullstackopen.com/en/part3)

You can refer to the workshop code solutions [here](https://github.com/fullstack-hy2020/part3-notes-backend)

<details><summary><h3 style="display:inline">Chapters</h3></summary>

<details><summary>Part 3-a: Node.js and Express</summary>

- [Part 3-a: Node.js and Express](https://fullstackopen.com/en/part3/node_js_and_express)

**_WE-WILL-LEARN:_**

- creating a simple Node project that runs in Node environment
- running a simple web server
- using Express library to build a more developer friendly web server
- using nodemon to run node
- defining routes in Express
  - CRUD functionality in Express routes
- Middleware
  - writing our own middleware

**Side notes**

- [difference between ES6 modules vs CommonJS syntax](https://www.freecodecamp.org/news/modules-in-javascript/)
- [what is JSON?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [what does the version number in npm library mean?](https://fullstackopen.com/en/part3/node_js_and_express#express)
- [VSCode REST client](https://fullstackopen.com/en/part3/node_js_and_express#the-visual-studio-code-rest-client)
- [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

**_LECTURE-VIDEO:_**

- [Creating a simple express server](https://youtu.be/raUOxLZiPng)
  1. Create new project `notes-server`
  - create an npm project inside by `npm init -y`
  - create an http server that shows the text 'Hello world', listening on port 3001
  2. Serve notes as JSON data using http server
  - create a notes variable with the notes array
  - convert the http response to type `application/json`
  - JSON.stringify the notes array in the response
- [Using express for serving on the '/api/notes' route for a 'get' method request](https://youtu.be/QgC5oSEB_Tc)
  1. Install `express` library
  - modify code to use express library
  2. Modify to express route to server array of notes on `/api/notes` url for `get` request
  3. Install nodemon as dev dependency to run node server by hot reload on code changes
- [Side note on REST and JSON](https://youtu.be/GlanBqAtPj8)
- [Creating the '/api/notes/:id' route for a 'get' method request](https://youtu.be/CPMkmR6eSIU)
  1. Create a new get route at `/api/notes/:id`
  2. Respond with the json object of the note at that id
  - please note that the `request.params` always comes as a string
  3. If no notes are available at the id, then set status to 404 and return a friendly error message
- [Creating the `/api/notes/:id` route for a `delete` method request](https://youtu.be/rO6vsReA3d4)
  1. Create a new delete route at `/api/notes/:id`
  2. Respond with 204 status code, and no body
  3. Install `REST Client` extension
  4. Create file `requests/my_requests.rest` to store the REST requests
  - call the `delete` method on the REST endpoint
  ```
  DELETE http://localhost:3001/api/notes/2
  ```
- [Creating the '/api/notes' route for a 'post' method request](https://youtu.be/51_oufxrDUo)
  1. Create a new post route at `/api/notes`
  2. Use express.json() to read json objects in the request
  3. Use the json object in request to create a new post in the backend
  4. Respond with status 201 created and return the newly created note object
- [Creating middleware](https://youtu.be/wPZRiwHlz4Y)
  1. Create a middleware at the top of the express server to log method, path, and body
  2. Creat a middleware at the end of the express server (just before app.listen) to send a 404 not found to all paths that are not handled by the app

**_TO-DO:_**

- [3.1-3.6](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-1-3-6)
- [3.7-3.8](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-7-3-8)

</details>

<details><summary>Part 3-b: Deploying app to internet</summary>

- [Part 3-b: Deploying app to internet](https://fullstackopen.com/en/part3/deploying_app_to_internet)

**_WE-WILL-LEARN:_**

- [serving static files from server](https://fullstackopen.com/en/part3/deploying_app_to_internet#serving-static-files-from-the-backend)
- [including frontend code on server](https://fullstackopen.com/en/part3/deploying_app_to_internet#frontend-production-build)
- [deploying app to a cloud platform (e.g. Render)](https://fullstackopen.com/en/part3/deploying_app_to_internet#application-to-the-internet)
- [streamlining the deployment](https://fullstackopen.com/en/part3/deploying_app_to_internet#streamlining-deploying-of-the-frontend)

**Side notes**

- [CORS](https://fullstackopen.com/en/part3/deploying_app_to_internet#same-origin-policy-and-cors)
- [setting up proxy on react app](https://fullstackopen.com/en/part3/deploying_app_to_internet#proxy)
- [how the current set-up after part3-b looks](https://fullstackopen.com/en/part3/deploying_app_to_internet#the-whole-app-to-the-internet)

**_LECTURE-VIDEO:_**

- [Use notes-server instead of json-server](https://youtu.be/t7A5C8GAwBM?t=1)
  1. Start `notes-app`
  2. Start `notes-server`
  3. Change `baseUrl` in `notes-app` to the url of our `notes-server`
  4. Configure CORS in `notes-server` so that app and server work from different origins
  - install `cors` library
  - use `cors` library in server's `index.js` file
- [Serving frontend static files from node server](https://youtu.be/t7A5C8GAwBM?t=888)
  1. Build react app for serving from web server
  2. Include the build folder in your node application
  3. Instruct node server to serve the static files from the build folder
- [Modify frontend backend code to run in cloud](https://youtu.be/jt8qR6BI7h0)
  1. In react app, change the baseurl to a relative url
  2. In node server, read the PORT value from environment if available
- [Deploy fullstack app to Render](https://youtu.be/-xVexhcTjv8)
  1. Create a render account at https://dashboard.render.com/register
  - sign up using `GitHub`
  2. Create a new `Web Service`
  - connect to the proper github repository
  - configure `Root Directory`, `Build Command` (npm install), and `Start Command`
  3. Push your code to GitHub
  4. In notes-server, streamline notes-app build and deploy process
  - add npm script to build the react app and copy it to server repo
    - remove the existing `dist` folder
    - cd to notes-app
    - build notes-app
    - cp the `dist` folder from notes-app to notes-server
  5. Add proxy to vite config of notes-app so that we can use relative url in react dev environment
  ```
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  }
  ```

**_TO-DO:_**

- [3.9-3.11](https://fullstackopen.com/en/part3/deploying_app_to_internet#exercises-3-9-3-11)

</details>

<details><summary>Part 3-c: Saving data to MongoDB</summary>

- [PART 3-c: Saving data to MongoDB](https://fullstackopen.com/en/part3/saving_data_to_mongo_db)

**_LECTURE-VIDEO:_**

- [Introduction to mongodb](https://youtu.be/5Cdr5qnw8N4)
- [Setting up mongo database in mongodb.com](https://youtu.be/EvJJkLZ3RnM)
  1. Create a free account in mongodb.com
  - go to https://www.mongodb.com/cloud/atlas/register
  - you can sign up with google
  - select the 'free' option
  2. Create database userid and password
  - create project
  - build database using free option
  - choose the username password option for authentication
  - finish database creation
  3. Set network setting to allow access from anywhere
  - go the 'network access'
  - edit and select 'allow access from anywhere'. note - this is only for development!
  4. Get the connection string to your database
- [Using mongoose to set up a practice application](https://youtu.be/WevMzdj7pxg)
  1. `npm install mongoose`
  2. Create a new mongo.js file in your repo to create practice application
  - copy code from fullstackopen for mongo.js
  - change the url value to your db connection string
  - the mongo.js code has the following:
    - [create a schema for Note](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#schema)
    - use the schema to create a model for Note
    - [use the Note model to create and save a Note object into mongodb](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#creating-and-saving-objects)
  3. Run our code from terminal to create a collection and data in `noteApp` database
  - run `node mongo.js password`, this will create the note data in `test` database, in `notes` collection
  - delete the `test` collection
  - add `noteApp` to the db connection string
  - run `node mongo.js password` again, this will now create the note data in `noteApp` database
  4. [Write code to fetch data frome `notes` collection using the `Note` model](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#fetching-objects-from-the-database)
  - in `mongo.js`, comment out the note creation code
  - add code to `get` the data
  - run `node mongo.js password` again
- [Connect the notes-server to the database](https://youtu.be/e0M8bBv_IEA)
  1. [Fetch db connection string from environment](https://youtu.be/Aph6jjDb2O8)
  - install npm library `dotenv` that will allow us to convert variables from .env file to `process.env` variables
  - for localhost
    - create a .env file to store the db connection string (add .env file to .gitignore)
    - in .env file, enter db connection string to variable `MONGODB_URI`
    - in index.js file, use `dotenv` library to read env variables
  - for render: configure db connection string in render `Environment`
  2. Create separate module to put database configuration
  3. Get data from database in the `/api/notes` route for `get` method
  4. Modify the returned data from mongoose to show the `id` field instead of `_id`, and hide the `__v` field
- [More node express routes configured through database](https://youtu.be/1NNyJnz3q4c)
  1. Rewrite `/api/notes` route for `post` method
  1. Rewrite `/api/notes/:id` route for `get` method
  1. Error handling
  1. Moving error handling to middleware
  - make sure middlewares are loaded in proper order
  1. Rewrite `/api/notes/:id` route for `delete` method
  1. Write `/api/notes/:id` route for `put` method

**_TO-DO:_**

- [3.12](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercise-3-12)
- [3.13-3.14](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises-3-13-3-14)
- [3.15-3.18](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises-3-15-3-18)

</details>

<details><summary>Part 3-d: Validation and ESLint</summary>

- [PART 3-d: Validation and ESLint](https://fullstackopen.com/en/part3/validation_and_es_lint)

**_LECTURE-VIDEO:_**

- [Mongoose schema validation](https://youtu.be/F5vLQqKuCBo)
  1. Create a mongoose schema validation for `content` field in noteSchema
  2. In the note post route, catch the error in note.save
  3. Put the error handler in the error handling middleware
  4. Catch and display the error in the notes react app
- [Mongoose schema validation while updating](https://youtu.be/Zfmzodtq-5k)
  1. In the note update route, configure it to also throw schema validation errors
  2. Why schema based validation is better than logical error handling in code
- [Linting setup and configurations](https://youtu.be/SXLCt7Zzx8A)
  1. Install eslint as a dev dependency
  2. Setup config file for eslint
  - change env `browser` to `node`
  3. Setup the VSCode extensions for eslint
  4. Create script to run eslint
  5. Create eslint ignore config file `.eslintignore`
  - include the `dist` folder
  6. Create eslint rule for
  - `eqeqeq`
  - show warning for console.log
  7. Difference between formatting (prettier) vs code linting (eslint)

**_TO-DO:_**

- [3.19-3.21](https://fullstackopen.com/en/part3/validation_and_es_lint#exercises-3-19-3-21)
- [3.22](https://fullstackopen.com/en/part3/validation_and_es_lint#exercise-3-22)

</details>

</details>

---

## [PART 4: Testing Express servers, user administration](https://fullstackopen.com/en/part4)

You can refer to the workshop code solutions [here](https://github.com/fullstack-hy2020/part3-notes-backend). Look at the appropriate branch (e.g. look at branch `part4-1` for Part 4-a)

<details><summary><h3 style="display:inline">Chapters</h3></summary>
<details><summary>Part 4-a: Structure of backend application, introduction to testing</summary>

- [Part 4-a : Structure of backend application, introduction to testing](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing)

**_LECTURE-VIDEO:_**

- [Code refactoring](https://youtu.be/Z94SwZLr62I)
  1. [Refactor config, logger, and middleware to `utils` folder](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#project-structure)
  2. Split the app code from `index.js` to `app.js`
- [Refactoring Node express Router and Note model](https://youtu.be/LN0zuzKOFvc)
  1. Refactor all the `notes` routes to `controllers/notes.js`
  - use `require('express').Router()`
  2. Refactor the `notes` schema and model specific code to `models/note.js`
- [Unit testing Node application](https://youtu.be/VzduDvmShas)
  1. Install jest in dev dependency (npm install --save-dev jest)
  2. Define npm script to run jest and specify the execution environment is node
  3. Create a file, `utils/for_testing.js` with simple functions to test
  4. Create unit testing file `tests/reverse.test.js` with tests for `reverse` function
  - run it
  - make one test case fail to analyze the jest error message
  5. Configure eslint to ignore the jest commands in the test file
  6. Create unit testing file `tests/average.test.js` with tests for `average` function
  - run it and analyze the failed test case
  - fix the failed case
  - notice the `describe` block

**_TO-DO:_**

- [4.1-4.2](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#exercises-4-1-4-2)
- [4.3-4.7](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#exercises-4-3-4-7)

</details>

<details><summary>Part 4-b: Testing the backend</summary>

- [PART 4-b: Testing the backend](https://fullstackopen.com/en/part4/testing_the_backend)

**_LECTURE-VIDEO:_**

- [Using supertest](https://youtu.be/rq_63pYsWus)
  1. Install supertest
     `npm i -D supertest`
  2. Write test cases to connect to api without starting node server, then write tests for
  - get all notes
    - notice async/await syntax
    - regex
    - no port required
    - using supertest methods for test
  - checking length of notes
    - using jest methods
  - checking content of one note
  3. Setup the code according to instructions in fullstackopen if timeout type errors seen in console
  - include a teardown
  - add Jest timeout
  - set bufferTimeoutMS
- [Setting up test environment](https://youtu.be/sqwPSl1NJCs)
  1. [Set up NODE_ENV for different environments](https://fullstackopen.com/en/part4/testing_the_backend#test-environment)
  - set up cross-env, if required for windows
  2. Set up test database for MongoDB
  - create TEST_MONGODB_URI in .env file
  - in config, setup the db url based on NODE_ENV
  3. In logger, only conditionally log if NODE_ENV is not test
- [Initialize test database before test](https://youtu.be/sqwPSl1NJCs?t=899)
  1. [Include the `beforeEach` block](https://fullstackopen.com/en/part4/testing_the_backend#initializing-the-database-before-tests)
  2. Modify tests written above to use the database initialization values
  3. Running test one at a time
- [async/await syntax](https://youtu.be/tP-N4yY-4nc)
  1. How does async/await work
  2. [Refactor notesRouter.get for '/api/notes' to async/await](https://fullstackopen.com/en/part4/testing_the_backend#async-await-in-the-backend)
  - run tests to make sure it is still working correctly
- [Write test then refactor notesRouter.post to async/await](https://youtu.be/UT1Qmnoccxs)
  1. [Write tests for notesRouter.post](https://fullstackopen.com/en/part4/testing_the_backend#more-tests-and-refactoring-the-backend)
  - write the test cases to test different scenario
  - run tests to make sure code is currently working
  2. Create helper functions for some common functions required for testing
  - put helper functions in `tests/test_helper.js`
  - refactor tests to use helper functions
  3. Refactor notesRouter.post to use async / await syntax
  - run test to make sure code is still working after refactoring
  - put try / catch block for error handling
  4. [Continue refactoring notesRouter.get single note, and notesRouter.delete routes to use async/await](https://fullstackopen.com/en/part4/testing_the_backend#error-handling-and-async-await)
- [Optimizing the beforeEach function](https://youtu.be/aiLU5CLCz1s)
  1. [Use Promise.all to await for an array of promises to resolve](https://fullstackopen.com/en/part4/testing_the_backend#optimizing-the-before-each-function)
  2. [Refactor tests to use describe block to group tests](https://fullstackopen.com/en/part4/testing_the_backend#refactoring-tests)

**_TO-DO:_**

- [4.8-4.12](https://fullstackopen.com/en/part4/testing_the_backend#exercises-4-8-4-12)
- [4.13-4.14](https://fullstackopen.com/en/part4/testing_the_backend#exercises-4-13-4-14)

</details>

<details><summary>Part 4-c: User administration</summary>

[PART 4-c: User administration](https://fullstackopen.com/en/part4/user_administration)

**_WE-WILL-LEARN:_**

- Creating users with passwords in the Mongo DB database
  - using `bcrypt` for one way hashing of password to store in database
  - using Test Driven Development (TDD) method
- Associate a `Note` to a `User`
  - put a `notes` array field into `User`
  - put a a `user` field into `Note`
  - association is enforced by mongoose library, not by Mongo DB
- Using the mongoose `populate` method

**_LECTURE-VIDEO:_**

- [Setting up Mongo DB for Note to User relationship](https://youtu.be/aJopS8jIt4E)
  1. [Set up Mongoose schema for `User`](https://fullstackopen.com/en/part4/user_administration#mongoose-schema-for-users)
  2. Modify `Note` Mongoose schema to refer to `User` who created the Note
- [Creating users](https://youtu.be/9_SDwFCVtXY)
  1. [Install bcrypt library to create one-way hash of the password](https://fullstackopen.com/en/part4/user_administration#creating-users)
  2. Create new router for `users` that handles REST api requests related to `users`
  - create `users` router
  - include `users` router in app.js
  - in `users` router, write POST method to create new user
  3. Write test case for user creation
  - first, write `usersInDb` helper function to get all users from DB
  - write test case for user creation with new username, utilizing `usersInDb` helper function
  - running the test should pass
  4. Practice Test Driven Development to add functionality to creating new user
  - write test case for user creation with existing username
  - running the test should fail, as we expect status code 400, but as of now our code returns 201 created
  - adjust create new user function to check for existing username
    - use `mongoose-unique-validator` library to validate for unique username
  - running the test should now pass
  5. In `users` router, write route handler for GET method for all users
- [Update new note creation to include user that created the note](https://youtu.be/RBPNYbZUqaA)
  1. [Update route handler for POST method for new note](https://fullstackopen.com/en/part4/user_administration#creating-a-new-note)
  - include user.\_id in the created note's `user` field
  - append the newly created note.\_id to the user's `notes` field
  2. [Update users and notes route handlers to populate full data](https://fullstackopen.com/en/part4/user_administration#populate)
  - update GET all users route handler to `populate` the full notes that the user has created
  - user `populate parameters` to only include the fields that we want
  - update GET all notes route handler to `populate` required user fields

**_TO-DO:_**

Nothing!!

</details>

<details><summary>Part 4-d: Token authentication</summary>

[PART 4-d: Token authentication](https://fullstackopen.com/en/part4/token_authentication)

**_LECTURE-VIDEO:_**

- [Principles of token based authentication](https://youtu.be/k9MugKavWAg)
  1. [Understanding token based authentication sequence diagram](https://fullstackopen.com/en/part4/token_authentication)
  2. Implement logging in function
  - npm install jsonwebtoken
  - create new router for `login` that handles REST api requests related to `login`
  - add the `login` router in app.js
  - add `SECRET` value to `.env` file that will be used by jsonwebtoken to sign the token
  - test logging in using VS Code REST-client
- [Creating new notes with logged in user](https://youtu.be/o5NK5Tbye8s)
  1. [Change the POST new note handler to only allow logged in users](https://fullstackopen.com/en/part4/token_authentication#limiting-creating-new-notes-to-logged-in-users)
  2. Test creation of new note with token using VS Code REST-client
  - write VS Code REST-client code to login
  - write VS Code REST-client code to POST new note, including token returned from login
  3. Implement error handling
  - update `errorHandler` middleware to handle `ValidationError` and `JsonWebTokenError`
- [Problems of Token-based authentication](https://youtu.be/YqkKbTovUNU)
  1. [Put time limit for the validity period of token](https://fullstackopen.com/en/part4/token_authentication#problems-of-token-based-authentication)
  2. Update `errorHandler` middleware to handle `TokenExpiredError`
  3. [End notes](https://fullstackopen.com/en/part4/token_authentication#end-notes)

**_TO-DO:_**

- [4.15-4.23](https://fullstackopen.com/en/part4/token_authentication#exercises-4-15-4-23)

</details>

</details>

---

## [PART 5: Testing React apps](https://fullstackopen.com/en/part5)

<details><summary><h3 style="display:inline">Chapters</h3></summary>

<details><summary>Part 5-a: Login in frontend</summary>

- [PARTPart 5-a: Login in frontend](https://fullstackopen.com/en/part5/login_in_frontend)

**_LECTURE-VIDEO:_**

- [Handling login](https://youtu.be/8FUUmPcYs4k)
  1. [In App.js, add a form for login using controlled input fields for userid and password](https://fullstackopen.com/en/part5/login_in_frontend#handling-login)
  2. Write function `handleLogin` to handle `onSubmit` for the login form
  3. Write login service to call login api
  4. Call login service from `handleLogin` App.js
  5. In App.js, convert login and note posting forms into functions
  6. Conditionally call the forms based on whether user is logged in
- [Creating new notes](https://youtu.be/nIILytsu7x4)
  1. [Set up `notes.js` service to use token from login response as the `Authorization` header in the notes creation request header](https://fullstackopen.com/en/part5/login_in_frontend#creating-new-notes)
  2. In App.js `handleLogin` function, `setToken` after login is sucessful
  3. In `create note` service, include the `Authorization` header in the correct format with the token
  4. The functionality to `add note` from the react app should work again
- [Saving login information in the browser](https://youtu.be/XwjQ2AVdSeM)
  1. [In `handleLogin` call `window.localStorage.setItem` to store user data in local storage](https://fullstackopen.com/en/part5/login_in_frontend#saving-the-token-to-the-browsers-local-storage)
  - remember to use `JSON.stringify` to convert JS object to string
  2. In `App.js`, write a useEffect hook that will read user data from local storage if available when application loads
  - remember to use `JSON.parse` to convert string to JS object
  3. What happens if saved token is no longer valid? e.g. if token expires?
  - show the proper error
  - remove data from local storage
  - update the user state to null so that the login form appears
  4. [Possible cross site scripting problems when using local storage](https://fullstackopen.com/en/part5/login_in_frontend#a-note-on-using-local-storage)

**_TO-DO:_**

- [5.1-5.4](https://fullstackopen.com/en/part5/login_in_frontend#exercises-5-1-5-4)

</details>

<details><summary>Part 5-b: props.children and proptypes</summary>

- [Part 5-b: props.children and proptypes](https://fullstackopen.com/en/part5/props_children_and_proptypes)

**_LECTURE-VIDEO:_**

- [Using props.children to create a generic Togglable component to control visibility of components](https://youtu.be/MDLTmK0UVqM)
  1. [Move login form to it's own component, LoginForm](https://fullstackopen.com/en/part5/props_children_and_proptypes#displaying-the-login-form-only-when-appropriate)
  2. [Move the `Togglable` logic into it's own component, Togglable](https://fullstackopen.com/en/part5/props_children_and_proptypes#the-components-children-aka-props-children)
  - please note how `props.children` is being used
  3. Modify `App.js > loginForm()` function to call `LoginForm` component within the `Togglable` component to make login form togglable
- [Move the Note adding form (`NoteForm`) into it's own component](https://youtu.be/EuDDEBnmdlk)
  1. Now use the `Togglable` component to toggle visibility of `NoteForm`
  2. [Move new note related state to the `NoteForm` component](https://fullstackopen.com/en/part5/props_children_and_proptypes#state-of-the-forms)
- [Using useRef, forwardRef, and useImperativeHandle](https://youtu.be/JMOma6lzZPQ)
  1. [Use useRef, forwardRef, and useImperativeHandle to pass functions from inner component to outer component](https://fullstackopen.com/en/part5/props_children_and_proptypes#references-to-components-with-ref)
  2. [A note on creating instances of the same component](https://fullstackopen.com/en/part5/props_children_and_proptypes#one-point-about-components)
- [Using prop-types and eslint](https://youtu.be/kay7tfStpjc)
  1. [Use the prop-types package to declare mandatory props and their data type](https://fullstackopen.com/en/part5/props_children_and_proptypes#prop-types)
  - declare mandatory props in the `Togglable` and `LoginForm` components
  2. [Configure eslint to ignore test related errors](https://fullstackopen.com/en/part5/props_children_and_proptypes#e-slint)
  - install the package eslint-plugin-jest as dev dependency
  - create eslint config file, either `.eslintrc.json` (copy from our previous vite repo) or `.eslintrc.js` (from this workshop)
  - add `jest` related env, plugins entries
  3. Create `.eslintignore` file to ignore files where eslint should not check
  4. Give a displayName to the `Togglable` component

**_TO-DO:_**

- [5.5-5.11](https://fullstackopen.com/en/part5/props_children_and_proptypes#exercises-5-5-5-11)
- [5.12](https://fullstackopen.com/en/part5/props_children_and_proptypes#exercise-5-12)

</details>

<details><summary>Part 5-c: Testing React apps</summary>

- [Part 5-c: Testing React apps](https://fullstackopen.com/en/part5/testing_react_apps)

**_WE-WILL-LEARN:_**

We will learn unit testing a React component. We will learn to test:

- a component will render what we expect it to render
- a component will call the correct function passed as a prop when a button is clicked
- a component will re-render correctly when a button is clicked
- a component will call a function with the correct argument when a button is clicked

**_LECTURE-VIDEO:_**

- [Setup initial jest test for Note component](https://youtu.be/DR-0M0soDFs)
  1. Install the required packages
  ```
  npm install --save-dev eslint-plugin-react-refresh @testing-library/react @testing-library/jest-dom jest-environment-jsdom @babel/preset-env @babel/preset-react
  ```
  2. Make the configurations
  - in package.json
  - in .babelrc
  2. Make sure `Note` component has className `note`, so that we can select by it
  3. [Write Note component test in the file src/components/Note.test.js](https://fullstackopen.com/en/part5/testing_react_apps#searching-for-content-in-a-component)
  4. Run the test. You might also need to `npm i -D jest` if `jest` is not already installed
  5. Modify the test to also check by selecting the element by class name in the rendered container
  6. [Use `screen.debug()` to see html output of render and of screen.getByText](https://fullstackopen.com/en/part5/testing_react_apps#debugging-tests)
- [Clicking buttons in test](https://youtu.be/3jYqx43aTJk)
  1. [Set up test for button click](https://fullstackopen.com/en/part5/testing_react_apps#clicking-buttons-in-tests)
  - npm install --save-dev @testing-library/user-event
  2. Write test case for button click on the `Note` component
  3. [Write tests for the Togglable component](https://fullstackopen.com/en/part5/testing_react_apps#tests-for-the-togglable-component)
  - set up Togglable component for testing by adding className="togglableContent"
  - now write the tests
- [Testing the forms](https://youtu.be/ZcdgmWeHImw)
  1. [Write test for form submit](https://fullstackopen.com/en/part5/testing_react_apps#testing-the-forms)
  - add className `formDiv` to `NoteForm`
  2. More options for finding elements
  - [note if there are two input fields](https://fullstackopen.com/en/part5/testing_react_apps#about-finding-the-elements)
    - use `screen.getByPlaceholderText` to be more precise to get right text input field, or use `container.querySelector`
  - using `container.querySelector`
  - using `{ exact: false }` option in the `screen.getByText` method
  - using `screen.findByText`; note it returns a promise
  - using `screen.queryByText`; note it does not cause an exception if the element is not found
- [More notes on tests](https://youtu.be/FekUXVovVSo)
  1. [Finding test coverage](https://fullstackopen.com/en/part5/testing_react_apps#test-coverage)
  - by running `npm test -- --coverage --collectCoverageFrom='src/**/*.{jsx,js}'`
  2. [Frontend integration tests](https://fullstackopen.com/en/part5/testing_react_apps#frontend-integration-tests)
  3. [Snapshot testing](https://fullstackopen.com/en/part5/testing_react_apps#snapshot-testing)

**_TO-DO:_**

- [5.13-5.16](https://fullstackopen.com/en/part5/testing_react_apps#exercises-5-13-5-16)

</details>

<details>
<summary>Part 5-d: End to end Testing</summary>

- [Part 5-d: End to end testing](https://fullstackopen.com/en/part5/end_to_end_testing)

**_LECTURE-VIDEO:_**

- [Initial setup for cypress](https://youtu.be/u2DwyqMHM3M)
  1. [Install cypress to the frontend as development dependency (npm i -D cypress)](https://fullstackopen.com/en/part5/end_to_end_testing#cypress)
  2. Add an npm-script to run it `"cypress:open": "cypress open"`
  - also change dev start to `"dev": "vite --host"`
  3. Add an npm-script to the backend which starts it in test mode `"start:test": "NODE_ENV=test node index.js"`
  4. Start cypress with command `npm run cypress:open`
  5. Create a new test file `notes_app.cy.js` inside the cypress/e2e folder
  6. Write the first test for the front page
- [Writing to a form](https://youtu.be/qSgkWSXTzkQ)
  1. [Extend our tests so that the test tries to log in to our application](https://fullstackopen.com/en/part5/end_to_end_testing#writing-to-a-form)
  - type the username and password in the login form using `cy.type` for the test
  - `cy.get` command allows for searching elements by CSS selectors
  - use `id` to get the value from input fields and use # to select id
  - some things to note
    - to avoid name conflicts, we gave the submit button the id login-button we can use to access it
    - if you are getting eslint errors on cy `npm i -D eslint-plugin-cypress`
    - changing the configuration in `.eslintrc.js`
- [Testing new note form](https://youtu.be/kBDE6gghwkY)
  1. [Only logged-in users can create new notes, so we add logging in to the application in beforeEach block](https://fullstackopen.com/en/part5/end_to_end_testing#testing-new-note-form)
  2. Give adding note input an id to avoid test failing if there is more than one input
  3. Each test starts a fresh browser state, as if a new browser window was opened
- [Controlling the state of the database](https://youtu.be/pXA2dsl_iDs)
  1. Challenge with E2E tests is that they do not have access to the database
  2. [Create API endpoints to the backend for the test](https://fullstackopen.com/en/part5/end_to_end_testing#controlling-the-state-of-the-database)
  - create a new router for the tests `testingRouter` at backend
  - add it to the backend only if the application is run on test-mode
  - the test does HTTP requests to the backend with `cy.request`
  3. Write the test for changing the importance of notes
  4. [Make a test to ensure that a login attempt fails if the password is wrong](https://youtu.be/GXz4AzbPdQk)
  - check error mesage `cy.get(.className).contains(message))`
  - note that css class selector starts with a full stop as in `.className`
  5. For more diverse tests than contains which works based on text content only
  - `should` should always be chained with get (or another chainable command)
  - cypress requires the colors to be given as rgb
  - if the test are for same component we can chain `should` with `and`
- [Bypassing the UI](https://youtu.be/9epuXiy7IzE)
  1. Note : [Fully test the login flow – but only once!](https://docs.cypress.io/guides/end-to-end-testing/testing-your-app#Logging-in)
  2. [Bypass the UI](https://fullstackopen.com/en/part5/end_to_end_testing#bypassing-the-ui)
  3. [Custom command](https://docs.cypress.io/api/cypress-api/custom-commands)
  - create a cy command for login
  - create a cy command for adding new note
  - config baseUrl
  - config the env BACKEND
  4. Revisiting changing the importance of a note
  - chaining contains with contains
  - when coding tests, you should check in the test runner that the tests use the right components!
  - use of `parent()` and `find` and `as` in cy
- [Running and debugging the tests](https://youtu.be/Mlzyi-sMwYE)
  1. Cypress commands always return undefined
  2. Cypress commands are like promises
  3. We can run the test using cli with command `"test:e2e": "cypress run"`
  4. Videos of the test execution can be recorded
  - in the cypress.config.js add `video: true`; then videos will be saved to cypress/videos/
  - gitignore the videos directory

**_TO-DO:_**

- [5.17-5.23](https://fullstackopen.com/en/part5/end_to_end_testing#exercises-5-17-5-23)

</details>
</details>

---

## [PART 6: State management with Redux](https://fullstackopen.com/en/part6)

<details><summary><h3 style="display:inline">Chapters</h3></summary>
<details><summary>Part 6-a: Flux-architecture and Redux</summary>

- [Part 6-a: Flux-architecture and Redux](https://fullstackopen.com/en/part6/flux_architecture_and_redux)

**_WE-WILL-LEARN:_**

- create redux store
- pass the redux store to app via provider

**_LECTURE-VIDEO:_**

- [Create a counter app that uses redux](https://youtu.be/PwaIfWc0Idw)
  1. Setup the application
  - clone the [react starter repo](https://github.com/TEJ-Fellowship/react-start-kit)
  - rename to redux-counter
  - cd redux-counter
  - rm -rf .git
  - npm i redux
  2. Create a simple counter app using useState in index.js (we won't be using App.jsx yet)
  - create a reducer, `counterReducer` in this case. the reducer does the work similar to `setState`
  - create a store, by using `createStore` and passing it the reducer
  - use `store.getState()` to get the store (like the `state`)
  - use `store.dispatch(action)` to modify the store (like calling `setState`)
    - `action` is an object with `type` key, and optionally `data` key
  - use `store.subscribe(React Component)` to rerender component when store changes
- [Create a note app that uses redux](https://youtu.be/5ypUAitqbjQ)
  1. Setup the application
  - clone the [react starter repo](https://github.com/TEJ-Fellowship/react-start-kit)
  - rename to redux-note
  - cd redux-counter
  - rm -rf .git
  - npm i redux
  2. Setup redux in index.jsx for note app
  - create a reducer, `noteReducer` in this case. the reducer does the work similar to `setState`
  - create a store, by using `createStore` and passing it the reducer
  - use `store.getState()` to get the store (like the `state`)
  - use `store.dispatch(action)` to modify the store (like calling `setState`)
    - `action` is an object with `type` key, and `data` key
  - use `store.subscribe(React Component)` to rerender component when store changes
  3. Add functionality to toggle importance using Test Driven Development method
  - setup test environment
    - install required packages
    - configure .babelrc file
    - add test script to package.json
    - add jest environment to .eslintrc.json
    - add `deep-freeze` library to test for immutability
  - move the `noteReducer` to its own file at reducers/noteReducer.js
    - export store and the reducer
  - in the test file `noteReducer.test.js`, put test case for adding a new post
  - add another test to toggle the `important` field
- [Add functionality to add new note](https://youtu.be/y7WYvEL27-U)
  1. Add form to add note
  2. Add `onSubmit` handler that calls `store.dispatch` for adding note
  3. Add frontend for toggling
  - add `onClick` call to `toggleImportance` function from each note display
  - write the function `toggleImportance` to call `store.dispatch`
  4. Write action creators for adding note, and toggling importance
  - write an `action creator` called `toggleImportanceOf` that creates the action to dispatch for toggling importance
  - write an `action creator` called `createNote` that creates the action to dispatch for adding note
- [Refactor note app to use Provider](https://youtu.be/qezPIuply_M)
  1. Put the reducer in the `reducers/noteReducer.js` file
  2. Also move the action creators to `reducers/noteReducer.js`
  3. Move the app component to `App.js`
  4. npm install react-redux
  5. Modify the store related code in `index.js`, pass the store to `Provider` and wrap the `App` with it
  - in `index.js` import `Provider`
  - wrap `App` with `Provider` with `store`
  6. Modify `App` to read `store` from `Provider`
  - `useSelector` to get access to the `store`
  - `useDispatch` to get access to `dispatch`
  7. Now even if we refactor `add new note` form to its own component, we don't need to pass the store from App; the store can be directly accessed by all the components
  - refactor creating new note into its own component

**_TO-DO:_**

- [6.1-6.2](https://fullstackopen.com/en/part6/flux_architecture_and_redux#exercises-6-1-6-2)
- [6.3-6.8](https://fullstackopen.com/en/part6/flux_architecture_and_redux#exercises-6-3-6-8)

</details>

<details><summary>Part 6-b: Many reducers</summary>

- [Part 6-b: Many reducers](https://fullstackopen.com/en/part6/many_reducers)

**_WE-WILL-LEARN:_**

- using `Combined reducers` to combine multiple reducers
- using Redux toolkit to simplify and streamline the use of Redux stores
- using Redux devtool to debug and help develop redux

**_LECTURE-VIDEO:_**

- [Add state for visibility filter by putting it in another reducer using Combined reducers](https://youtu.be/uPWEI39HbFc)
  - note that `NewNote` and `Notes` components have been refactored from `App` component
  1. Initialize `notes` state with two notes in `noteReducer`
  2. Create visibility filter to show all / important notes
  - put radio buttons with `onChange` event handler
  - note that `name` is same for the `radio` inputs to form a `button group`
  - use `useState` to store the state of visibility in `App` component
  - pass the state as prop to `Notes`
  - in `Notes` use the prop to show the desired notes
  3. Create new reducer `filterReducer` to store value of filter
  - put the reducer function `filterReducer`
  - create action creator `filterChange`
  4. Modify index.js to combine the reducers `filterReducer` and `noteReducer`
  - import `combineReducers` from `redux`
  - use `combineReducers` to combine the two reducers
  - change `createStore` to take the combined reducer
  5. Change the code to use redux instead of useState
  - modify `Notes.js` to now only read the `notes` key from the state
  - dispatch to the reducer when radio button is clicked
  - modify `Notes.js` to use filter from redux store instead of useState
  6. Create separate component for `VisibilityFilter`
  - in `App` use the `VisibilityFilter` component to display the filter
- [Using Redux Toolkit](https://youtu.be/dzJeixwWD8A)
  1. Install the Redux Toolkit
  - npm install @reduxjs/toolkit
  2. Modify `index.js` to use toolkit
  - import and use `configureStore` to create store, which will replace `combineReducers` and `createStore`
  3. Modify `noteReducer.js` to use toolkit
  - use `createSlice` to refactor the reducer and action creators
  - use export using toolkit
  - how is `action.type` derived?
- [Using Redux devtool](https://youtu.be/kYXq0ajXHmI)
  1. Install devtool from https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  - this only works if using Redux Toolkit
  2. Open the Redux devtool window
  3. See the change in state for all the actions
  4. Dispatch an action from the toolkit

**_TO-DO:_**

- [6.9](https://fullstackopen.com/en/part6/many_reducers#exercise-6-9)
- [6.10-6.13](https://fullstackopen.com/en/part6/many_reducers#exercises-6-10-6-13)

</details>

<details><summary>Part 6-c: Communicating with server in a redux application</summary>

- [Part 6-c: Communicating with server in a redux application](https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application)

**_WE-WILL-LEARN:_**

- `dispatch` can also take a function. if we pass a function to `dispatch`, then `dispatch` will execute that function by passing dispatch as the first argument

**_LECTURE-VIDEO:_**

- [Getting notes from the backend while using Redux](https://youtu.be/pFkuyboDFRc)
  1. Create `db.json` file in root folder, and put some data
  2. Install and run json server
  - npm install json-server --save-dev
  - in `package.json` add script to run json-server
  - npm run server
  3. Create service to fetch data from backend
  - npm install axios
  - create file `services/notes.js` to fetch data using axios from the backend
  4. Get initial data from backend
  - in `noteReducer` change initial state to empty array
  - in `noteReducer` add an action to append a single note
  - in `noteReducer` add an action to set all the notes
  - in `App`, create a `useEffect` to load the initial data from json-server
- [Storing a note to the backend while using Redux](https://youtu.be/lhZK3HTNz-w)
  1. When creating note, add functionality to also add the new note to backend
  - in `services/notes.js`, add function to create note in backend
  - in `NoteForm` component, modify to call the service to backend
  2. You can also change the `toggle importance` functionality to also update backend
- [Using thunk to move server connection logic to Redux action creator](https://youtu.be/R3LuH9FCt5I)
  1. Modify the initial notes loading functionality to move server communication to a `thunk`
  - change `App` useEffect to just dispatching return value of `initializeNotes` action creator
  - in `noteReducer`, create a new thunk `initializeNotes` that will:
    1. get all notes from the server
    2. then dispatch the notes to Redux store
  2. Modify the `createNote` functionality to move server communication to a `thunk`
  - change `NoteForm` component back to just dispatching return value of `createNote` action creator
  - in `noteReducer`, replace the `createNote` action creator with `createNote` thunk that will:
    1. call RestAPI to create a note in the server
    2. then dispatch the new note to Redux store
  3. Refactor Redux store creation
  - create `store.js` in root folder
  - move all Redux store creation code from `index.js` to `store.js`
  - in `index.js` import the store to pass to `App`

**_TO-DO:_**

- [6.14-6.15](https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application#exercises-6-14-6-15)
- [6.16-6.19](https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application#exercises-6-16-6-19)

</details>

<details><summary>Part 6-d: React Query, useReducer and the context</summary>

- [Part 6-d: React Query, useReducer and the context](https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context)

**_WE-WILL-LEARN:_**

**_LECTURE-VIDEO:_**

- [Using React Query](https://youtu.be/Izocvi0Ht20)
  1. Setup for using React Query
  - `npm install @tanstack/react-query`
  - setup `index.jsx` to use React Query
  2. Retrieve the notes in the `App` component
  - start json-server
  - use `useQuery`
  3. Refactor the server call to it's own `requests` file
- [Adding new note via React Query](https://youtu.be/nJbh4MZ3D54)
  1. Add function `createNote` in `requests` to post note to server
  2. In `App` add `useMutation` code for adding new note
  - call the `mutate` method to post the new note to server via React Query
  - invalidate the `notes` result, so that React Query re-fetches the notes
  3. Add functionality to toggle importance
  - add toggle function to call server in `requests`
  - add mutation code in `App` when note is toggled
- [Optimize React Query code to minimize calls to server](https://youtu.be/UfsE4VyC0BU)
  1. Modify `onSuccess` of new note creation to manually add new note to React Query state
  - add `newNote` parameter to callback function of `onSuccess`
  - getQueryData for `notes` (queryKey has to be an array)
  - manually setQueryData for `notes` adding the `newNote`
  2. Turn off `refetchOnWindowFocus` where not required
  3. React Query is server-state library, Redux is a client-state library
- [useReducer and context](https://youtu.be/LtQhffteDkQ)
  1. Implement `useReducer` for a simple counter app
  - create a new `CounterApp` file
  - render `CounterApp` from `index.jsx`
  2. Use `context` to pass the state
  - create a new file `CounterContext`, and use `createContext` to create a context for the counter state
  - in `CounterApp` use the context provider from `CounterContext` to provide the counter state to `CounterApp`
  - use `useContext` of `CounterContext` to read the value provided by the context provider in all required components
  3. Refactor the code
  - move all counter reducer related code to `CounterContext.jsx` file
  - in `index.jsx`, wrap the `CounterApp` with `CounterContextProvider`
  - refactor `useContext` code into `CounterContext` to fetch the state and the dispatch separately
  - note that `useCounterValue` and `useCounterDispatch` are custom hooks
- [Choosing the correct state management solution]()

**_TO-DO:_**

- [6.20-6.22](https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context#exercises-6-20-6-22)
- [6.23-6.24](https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context#exercises-6-23-6-24)

</details>
</details>

---

## [PART 7: React router, custom hooks, styling app with CSS and webpack](https://fullstackopen.com/en/part7)

<details><summary><h3 style="display:inline">Chapters</h3></summary>
<details><summary>Part 7-a: React-router</summary>

- [Part 7-a: React-router](https://fullstackopen.com/en/part7/react_router)

**_WE-WILL-LEARN:_**

- How to use react router for client side routes

**_LECTURE-VIDEO:_**

- [Implement react router](https://youtu.be/pOjABPs9NeU)
  1. Create new project `react-router` using [react-start-kit](https://github.com/TEJ-Fellowship/react-start-kit)
  2. Create simple SPA with menu
  3. Install react router
  4. Write code to use simple react router
  - use `BrowserRouter` to encapsulate all code that will use router
  - create `Link` for the required links
  - use `Routes` and `Route` to handle the links to components
- [Add parameterized route and useParams to read the parameter](https://youtu.be/PGKinr_tn24)
  1. Show notes
  - create a `Notes.jsx` component to show all notes
  - hardcode `notes` array with some notes in `App.jsx` and pass as props to `Notes.jsx`
  2. Create parameterized route for `note/:id` with `useParams`
  - update `Notes` component that creates `Link` to individual notes based on id
  - create a new `Route` to handle `note/:id` route
  - create `Note` component with `useParams` that will display individual note
- [Add useNavigate to programmatically navigate to a url](https://youtu.be/yU5aDVDj9II)
  1. Create `login` route
  - create a `user` useState to keep track of logged in user
  - if no `user` state, then show link to `login` that is a link to `login` route
  2. Create `Login` component
  3. Create a new route in `App.jsx` to direct the `login` path to `Login` component
  4. Modify `Login` component to handle user login
  - pass the `setUser` from `App` to `Login`
  - create a login form that takes a username and sets it to `user` state
  - use `useNavigate` to navigate to `/` route after logging in
  - in `App.jsx` use `Navigate` component in `users` route to conditionally redirect to `login` route when not logged in
- [Use `useMatch` for better parameterized route](https://youtu.be/PuxP8vk0ZP4)
  1. Move `BrowserRouter` component to `index`
  2. In `App`, use `useMatch` to get the `notes/:id` parameter to find the note
  3. Pass and read the single `note` object to the `Note` component
- [Build and deploy the react router app to node server](https://youtu.be/CPqpOFMA8WY)

**_TO-DO:_**

- [7.1-7.3](https://fullstackopen.com/en/part7/react_router#exercises-7-1-7-3)

</details>

<details><summary>Part 7-b: Custom hooks</summary>

- [Part 7-b: Custom hooks](https://fullstackopen.com/en/part7/custom_hooks)

**_WE-WILL-LEARN:_**

- Creating and using custom hooks
  1. Custom hooks follow the same [rules](https://reactjs.org/docs/hooks-rules.html) as react hooks
  2. Create custom hooks when you need complicated logic with react hooks that can be re-used

**_LECTURE-VIDEO:_**

- [Create custom hook for counter application](https://youtu.be/cQoUv8cx8M8)
  1. Create new project using [react-start-kit](https://github.com/TEJ-Fellowship/react-start-kit)
  2. Create simple counter application
  3. Move counter logic to custom hook `useCounter` in `hooks` folder
  - make sure the name of custom hook always starts with `use`
  4. Use `useCounter` for two different counters in the same `App` component
- [Using custom hook for forms](https://youtu.be/ZLgN00Fr_zg)
  1. Create an App with forms
  2. Create `useField` custom hook in `hooks` folder
  3. Use it in a form field
  4. Use the spread operator
  - to pass props to component from object with same named keys
  - to pass attributes to elements from object with same named keys

**_TO-DO:_**

- [7.4-7.8](https://fullstackopen.com/en/part7/custom_hooks#exercises-7-4-7-8)

</details>

<details><summary>Part 7-c: More about styles</summary>

- [Part 7-c: More about styles](https://fullstackopen.com/en/part7/more_about_styles)

**_WE-WILL-LEARN:_**

- use of readymade UI libraries for styling in react

**_LECTURE-VIDEO:_**

- [React Bootstrap](https://youtu.be/T7OxCk0Tsn8)
  - npm install react-bootstrap
  - add a link for loading the CSS stylesheet for Bootstrap inside of the head tag in the `public/index.html` file
  - container `<div className="container">`
  - import `{ Table,Form,Button }` from 'react-bootstrap'
  - render list of notes as a table
  - improve the form in the Login view with the help of Bootstrap `Form`
  - stlye notification message using `Alert` component
  - navigation structure
- [Material UI](https://youtu.be/PyRuWEIeakQ)
  1. [Material UI](https://fullstackopen.com/en/part7/more_about_styles#material-ui)
  - install the library with command `{npm install @mui/material @emotion/react @emotion/styled}`
  - use `Material UI` to make the same changes that were made using `react-bootstrap`
  - each component has to be imported separately
- [Other styling options](https://youtu.be/sDBuveNOq0c)
  1. [Styled Components](https://fullstackopen.com/en/part7/more_about_styles#styled-components)
  - `npm install styled-components`
  2. [Other UI frameworks](https://fullstackopen.com/en/part7/more_about_styles#other-ui-frameworks)

**_TO-DO:_**

- The exercises related to the topics presented here can be found at the end of this course material section in the exercise set [for extending the blog list application.](https://fullstackopen.com/en/part7/exercises_extending_the_bloglist)

</details>

</details>

---

## [PART 13: Using relational databases](https://fullstackopen.com/en/part13)

<details><summary><h3 style="display:inline">Chapters</h3></summary>
<details><summary>Part 13-a: Using relational databases with Sequelize</summary>

- [Part 13-a: Using relational databases with Sequelize](https://fullstackopen.com/en/part13/using_relational_databases_with_sequelize)

**_WE-WILL-LEARN:_**

- Using Relational Database (Postgres) instead of mongoDB for the notes app
- Using `Sequelize` ORM to create JS Model for Postgres tables

**_USEFUL-SQL-COMMANDS:_**

- Create a table called `notes`

```
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content text NOT NULL,
    important boolean,
    date time
);
```

- Insert a row into `notes` table

```
insert into notes (content, important) values ('Relational databases rule the world', true);
```

- Read rows from `notes` table

```
select * from notes;
```

- Remove the table `notes`

```
drop table notes;
```

**_LECTURE-VIDEO:_**

- [Setup the relational database](https://youtu.be/idA_eY8Y1nY)
  1. Create a Postgres DB in [render](https://dashboard.render.com/)
  2. Install `Postgresql` extension by Chris Kolkman to connect to the database
  - make sure to correctly setup ssl
  3. Use the `Postgresql` extension
  - create table `notes` in the database using the extension
  - insert a few rows into the table
  - check the table and the inserted rows with the extension
- [Create notes-server to connect to relational database](https://youtu.be/vNOznwlG2Ps)
  1. Create `part13/notes-server`
  - make the folder `notes-server`
  - `npm init -y` to create a new npm project
  - `npm install express dotenv pg sequelize`
  2. Add the DB connection string to `.env` file
  3. Write api to read all notes from db
  - create `index.js`
  - write the `api/notes` for `get` method to read all notes from DB using `select` query
- [Using Sequelize ORM](https://youtu.be/Bjdy0WCvJiw)
  1. Use `Sequelize` ORM to rewrite `api/notes` `get` method
  - create a `Model` for `Note`
  - use the `Note` model to get all notes from DB
  2. Add api to create a single note with simple error handling
  - remember to use middleware to correctly read json data sent to server
  - note the difference between `create` and `build`
  3. Call the single note creation api
- [Additional notes on relational database](https://youtu.be/6BwW2USXL5E)
  1. Creating database tables automatically using the `Sequelize` model
  2. Add api to read a single note
  3. Add api to modify a note
  4. Printing the objects returned by `Sequelize` to the console
  - using `toJSON`
  - using `JSON.stringify`

**_TO-DO:_**

- [13.1-13.3](https://fullstackopen.com/en/part13/using_relational_databases_with_sequelize#tasks-13-1-13-3)
- [13.4](https://fullstackopen.com/en/part13/using_relational_databases_with_sequelize#task-13-4)

</details>

<details><summary>Part 13-b: Join tables and queries</summary>

- [PART 13-b: Join tables and queries](https://fullstackopen.com/en/part13/join_tables_and_queries)

**_WE-WILL-LEARN:_**

- User management in sequelize
- Joining data from two tables in sequelize
- Using query parameters in REST API

**_LECTURE-VIDEO:_**

- [Refactoring the code](https://youtu.be/lJV20vTJCss)
  1. Start with `util` directory
  - create `config.js` to read configurations from environment
  - create `db.js` to put DB boilerplate code
  2. Refactor route handling to controllers
  - move notes routes to `controllers/notes.js`
  - modify `index.js` to use the notes controller for all `/api/notes` requests
  3. Refactor models
  - move `Note` model to `models/note.js`
  - create `models/index.js` to centralize all models related code
  4. Move db connection code to `util/db.js` file
  - add a function to test the db connection, then call it before starting app
  5. Refactor notes controller
  - put repetitive code to middleware
  - call middleware in the routes where required
- [Create user login](https://youtu.be/4dHCCbllNbc)
  1. Create `User` model
  - create `models/user.js` for `User` model
  - include the `User` model to `models/index.js`
  2. Create routes for user management
  - create `controllers/users.js`
  - create `controllers/login.js`
  - add `SECRET` in `.env` and `util/config.js`
  - npm install jsonwebtoken
  - include the routes in `index.js`
  3. Use `REST Client` to test login
  - create user from the `REST Client`
  - login with user and get token
- [Add user to note](https://youtu.be/4dHCCbllNbc?t=894)
  1. Add relation between `User` and `Note`
  - in `models/index.js` add the foreign key from `User` to `Note`
  2. Modify note post route to also insert logged in userId
  - in `controllers/notes.js`, add `tokenExtractor` middleware
  - use `tokenExtractor` to decode the the userId from token
  - include the userId while inserting a new note into the DB
  3. Use `REST Client` to create note using token
  - call api to create note by passing token and note object
- [Cleaning up & more queries](https://youtu.be/giN9wR9Km4I)
  1. Modify get notes to return the full user
  2. Modify get users to return notes created by user
  3. Modify get notes to use query parameters to fine tune sequelize query
  - include the `important` field in the api call
  - include the option to show all results when `important` is not specified in the query
  - modify `Note` model to not allow null for `important`
  - include searching text inside `content` field
  - exclude `where` clause when not required

**_TO-DO:_**

- [13.5-13.7](https://fullstackopen.com/en/part13/join_tables_and_queries#tasks-13-5-13-7)
- [13.8-13.12](https://fullstackopen.com/en/part13/join_tables_and_queries#tasks-13-8-13-12)
- [13.13-13.16](https://fullstackopen.com/en/part13/join_tables_and_queries#tasks-13-13-13-16)

</details>

<details><summary>Part 13-c: Migrations, many-to-many relationships</summary>

- [Part 13-c: Migrations, many-to-many relationships](https://fullstackopen.com/en/part13/migrations_many_to_many_relationships)

**_WE-WILL-LEARN:_**

- How to properly migrate database (create / update database schema)
- Through table, and many-to-many relations
- Other sequelize functionalities

**_LECTURE-VIDEO:_**

- [Data migration the proper way](https://youtu.be/V10LVTJY1dA)
  1. Create the initial data migration script
  - create the file `migrations/20230929_00_initialize_notes_and_users.js`
  2. Write code to run migrations
  - npm install umzug
  - add migration code to `util/db.js`
  - remove the `sync` code from `models/index.js`
  3. Run the first migration
  - drop all existing tables
  - start the node server
- [Admin user and user disabling](https://youtu.be/y9e3rEGovpI)
  1. Create a user
  2. Create a few notes
  3. Stop the server
  4. Create migration file with new fields
  - create the file `migrations/20230929_01_admin_user_disabling.js`
  5. Make corresponding changes to `models/User`
  6. Start the server
  7. Make changes to loginRouter to disallow logging in for users with `disabled` field set to true
  8. Try logging in with disabled user
  - create a disabled user
  - using REST Client, try logging in with the disabled user vs. a not-disabled user
  9. Create route for admin user to change status of a user
  - make changes in `controllers/users`
  - move `tokenExtractor` from `controllers/notes` to `util/middleware.js`
  - import `tokenExtractor` in both `controllers/users` and `controllers/notes`
  10. Create admin user that can change disabled user to enabled user
  - convert user 1 to admin
  ```sql
  update users
  set admin=true
  where id=1;
  ```
  - login with user 1
  - use token from user 1 to update user 2 to enabled
  11. Create rollback functionality to undo migration
  - modify `util/db` to put rollback function
  - create `util/rollback.js` that calls the rollback function
  - add script in package.json to run the rollback file
- [Creating many-to-many relationship to allow users to be part of multiple teams](https://youtu.be/VzK0_efeKU0)
  1. Create migration for `teams` and `memberships` tables in file `migrations/20230929_02_add_teams_and_memberships.js`
  2. Make models form `Team` and `Membership` to reflect updated schema
  3. Update `models/index` to define the new relationships
  4. Create some teams
  5. Add users to teams in the membership table
  6. Now change get users route to include teams of the users, and excluding through table data
  7. Understand the object returned by sequelize such as in the code below:
  ```js
  const user = await User.findByPk(1, {
    include: {
      model: Note,
    },
  });
  user.notes.forEach((note) => {
    console.log(note.content);
  });
  ```
  8. Creating new return object when required shape is different from object returned by database
- [Revisiting many-to-many relationships](https://youtu.be/cSCbmTmdp2M)
  1. Create migration for `user_notes` through table to associate many users with many notes
  2. Create `userNote` model
  3. Modify `models/index` for the many to many relation
  4. Modify get users route to return users' notes and user marked notes
  5. In the route, add the author of the note
- [Concluding remarks](https://youtu.be/OJ6d18lIyPU)
  1. Lazy fetch based on query parameter
  - Modify get user so that it fetches the user's teams only if the query parameter `teams` is set in the request
    - note how `getTeams` method is generated by sequelize based on defined relationships
  2. Defining default scopes for model
  - in `User` model, exclude disabled users by default
  - also define `admin` scope
  - includ admin scope in sequelize query with `User.scope('admin').findAll()`
  3. Adding methods to sequelize models
  - add instance method `numberOfNotes`
  - add class method `with_notes`
  4. Repeatability of models and migrations
  - generating migration and model using sequelize command line tool

**_TO-DO:_**

- [13.17-13.18](https://fullstackopen.com/en/part13/migrations_many_to_many_relationships#tasks-13-17-13-18)
- [13.19-13.23](https://fullstackopen.com/en/part13/migrations_many_to_many_relationships#tasks-13-19-13-23)
- [13.24](https://fullstackopen.com/en/part13/migrations_many_to_many_relationships#task-13-24)

</details>
</details>

---

## [PART 9: TypeScript](https://fullstackopen.com/en/part9)

<details><summary><h3 style="display:inline">Chapters</h3></summary>
<details><summary>Part 9-a: Background and introduction</summary>

- [Part 9-a: Background and introduction](https://fullstackopen.com/en/part9/background_and_introduction)

**_WE-WILL-LEARN:_**

**_LECTURE-VIDEO:_**

- [Main principles](https://youtu.be/I0IYtP-IXsM)
  1. Typed superset over JavaScript
  - Compiles to plain JavaScript
  - Type annotations
    - input type of function
    - output type of function
  - Typing
    - explicit typing
    - inferred type
  2. Lifecycle of TypeScript
  3. Why to use TypeScript
  - type checking
  - static code analysis
  - code level documentation
  4. What TypeScript does not do
  - external libraries with no types
  - runtime validations

**_TO-DO:_**

Nothing to do!

</details>
<details><summary>Part 9-b: First steps with TypeScript</summary>

- [Part 9-b: First steps with TypeScript](https://fullstackopen.com/en/part9/first_steps_with_type_script)

**_WE-WILL-LEARN:_**

**_LECTURE-VIDEO:_**

- [Setting up TypeScript tooling for Node project](https://youtu.be/4DMU8QNwREg)
  1. Manual setup
  - create folder
  - create npm project `npm init -y`
  - install libraries `npm install --save-dev ts-node typescript`
  - add script inside package.json
  2. Create our first TypeScript function, with plain JavaScript
  - create a file `multiplier.ts`
  - run it with `npm run ts-node -- multiplier.ts`
  3. Let's use TypeScript
  - give input types for function parameters
  4. Create custom type
  - create union type
  - see type suggestion
  - try using a not accepted argument
  5. Add return type
  6. Throw error when required
  - catch the error without putting any type
  - catch the error as `unknown`
    - then requires Type narrowing to access error.message
- [Putting TypeScript in Express server](https://youtu.be/e5l_FuOZtFo)
  1. Change `tsconfig.json`
  2. Configure script
  3. Create `index.ts` file
  4. Run it
  - change config to make it work
  - change back config
  5. Types for express
  - convert `require` to `import`
  - add required types to make code work
    - `npm install --save-dev @types/express`
  6. Other config related errors
  7. Install ts-node-dev
  - `npm install --save-dev ts-node-dev`
  - add package.json script
- [Add api endpoint for calculate](https://youtu.be/njfKRYLZ5_A)
  1. Add code for `/calculate` endpoint
  - export and import the `multiplicator` function
  - use it in the api
  2. Difference between explicit and implicit `any`
  3. Disallow explicit `any`
  - `npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`
  - configure `.eslintrc`
  - add script to `package.json`
  4. Setup more eslint rules
  - modify `.eslintrc`
  - fix the unsafe `any` issues
  - do some code level validation to sanitize data
  5. Using type assertion
  - import type `Operation`
  - use it to assert the `op` that is posted to `calculate` api
  - we can now remove the eslint warning, but this could cause runtime errors

**_TO-DO:_**

- [9.1-9.3](https://fullstackopen.com/en/part9/first_steps_with_type_script#exercises-9-1-9-3)
- [9.4-9.5](https://fullstackopen.com/en/part9/first_steps_with_type_script#exercises-9-4-9-5)
- [9.6-9.7](https://fullstackopen.com/en/part9/first_steps_with_type_script#exercises-9-6-9-7)

</details>
<details><summary>Part 9-c: Typing an Express app</summary>

- [Part 9-c: Typing an Express app](https://fullstackopen.com/en/part9/typing_an_express_app)

**_WE-WILL-LEARN:_**

**_LECTURE-VIDEO:_**

- [Setting up production grade project](https://youtu.be/kLgqYlmeC6w)
  1. Initialize a project using TypeScript
  - create directory `flight_diary`
  - `cd flight_diary`
  - `npm init -y`
  - `npm install typescript --save-dev`
  - add script run typescript
  - create tsconfig.json by initializing typescript
  2. Customize to our needs
  - configure tsconfig for our needs
  - install required additional packages
  - create `.eslintrc`
  - install and configure ts-node-dev for dev
  3. Get a basic node server working
  - Create `index.ts`
  - Build the project
  - Eslint ignore the js files
  - Create and run script from the compiled `build` folder
- [Start coding](https://youtu.be/QaxskzqgyeI)
  1. Create a directory structure
  2. Make a new `diaries` route
  - create `diaries.ts` inside `routes` folder
  - call it from index.ts
  3. Serve the data
  - store the data in `data/entries.json`
  - create `src/services/diaryService.ts` to manipulate the data
  - configure `resolveJsonModule` in tsconfig
  4. Create and use `types`
  - create file `src/types.ts`
  - add `Weather`, `Visibility` types
  - add `DiaryEntry` interface
  - use our type in diaryService
  - do type assertion for diaryData
  5. Convert the json data directly to typed data
  - create file `data/entries.ts` and export typed data
  - use typed data directly into service
  6. Defining optional fields in types
  7. Utility types
  - using `Pick` and `Omit` to choose or remove from object types
  - create `NonSensitiveDiaryEntry` from `DiaryEntry` type by omitting `comment` field
  - use `NonSensitiveDiaryEntry` for the service `getNonSensitiveEntries`
    - there is an issue!
    - modify to manually remove sensitive data
  8. Complete the routes
- [Adding functionalities](https://youtu.be/Xst_MRjhAfQ)
  1. Fetching one specific diary entry
  - Add api for specific id
    - fix the problem for potential `undefined` value
  2. Adding a new diary
  - convert argument to object
  - use utility type to define new diary entry without the `id` field
  - ignore error in post
  - parse json object in api
  3. Convert the incoming post data to typed data
  - define function `toNewDiaryEntry` in `utils.ts`
  - use it in the api
  - remove the ignore error from routes/diaries.ts
  - set the object param to `unknown`
  4. Check the incoming fields using `type guard`
  - check comment field
  - check date field
  - weather
    - use Enum
    - also make changes to `data/entries.ts`
    - need to assert the `NewDiaryEntry` as `DiaryEntry`
  - visibility
    - use Enum
  5. Complete the `toNewDiaryEntry` function
  - we can remove the existence check because of the `in` operator
  6. Test the new diary entry api

**_TO-DO:_**

- [9.8-9.9](https://fullstackopen.com/en/part9/typing_an_express_app#exercises-9-8-9-9)
- [9.10-9.11](https://fullstackopen.com/en/part9/typing_an_express_app#exercises-9-10-9-11)
- [9.12-9.13](https://fullstackopen.com/en/part9/typing_an_express_app#exercises-9-12-9-13)

</details>
<details><summary>Part 9-d: React with types</summary>

- [Part 9-d: React with types](https://fullstackopen.com/en/part9/react_with_types)

**_WE-WILL-LEARN:_**

- TypeScript will help us catch the following errors:
  - trying to pass an extra/unwanted prop to a component
  - forgetting to pass a required prop to a component
  - passing a prop with the wrong type to a component
- Useful resources
  - [React TypeScript cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
  - [UseState generics detail](https://codewithstyle.info/Using-React-useState-hook-with-TypeScript/)

**_LECTURE-VIDEO:_**

- [Create React App with TypeScript](https://youtu.be/x1NuR5xOYtA)
  1. Create `my-app` with `create-react-app` using TypeScript template
  - `npx create-react-app my-app --template typescript`
  2. Modify default app
  - in `tsconfig.json`, turn off `allowJs`
  - create `.eslintrc`
  - add script to run linting
  3. Examining a React component
  - delete all files inside `src` folder
  - delete all except `index.html` in `public` folder
  - create `index.tsx` in `src` folder
  - types are defined for component as in a regular function
  - we can remove the return type in component
  - type assertion for `document.getElementById`
- [Deeper type usage](https://youtu.be/LBYN0ED4zec)
  1. Create types
  - create file `types.ts` in `src` folder
  - add the required interfaces
  - create a union type
  - refactor the types
    - create a base
    - `extend` the base
  2. Use types in `App.tsx`
  - create `App.tsx`
    - import types
    - return null for now
    - export App
  - play around with `kind`
    - TypeScript implicitly narrows the type based on the `kind`
  3. Discriminated union - type narrowing of union type based on literal attribute
  - write jsx to show CourseParts
  - show name and exerciseCount
  - use ternary for type narrowing
  4. Exhaustive type checking to make sure all union types have been used
- [React app with state](https://youtu.be/SAIVWSU_LTQ)
  1. Create a new App-note.tsx
  - the first `useState` infers the type `string`
  - the second `useState` is not able to infer the type
    - lets explicitly put the type
  2. Add code to initialize some data, and show it in jsx
  3. Add function to create new note
  - put a form with controlled input
  - add `onSubmit` for the form
    - fix the type error for event
  4. Communicating with the server
  - start the json server from part6/redux-notes
  - install axios
  - get the initial notes from rest api
  - set the generics type for `axios.get` method
  5. Connect the add note to server
  6. A note about defining object types
  - interface vs type

**_TO-DO:_**

- [9.14](https://fullstackopen.com/en/part9/react_with_types#exercise-9-14)
- [9.15](https://fullstackopen.com/en/part9/react_with_types#exercise-9-15)
- [9.16-9.19](https://fullstackopen.com/en/part9/react_with_types#exercises-9-16-9-19)

</details>
<details><summary>Part 9-e: Grande finale: Patientor</summary>

- [Part 9-e: Grande finale: Patientor](https://fullstackopen.com/en/part9/grande_finale_patientor)

**_WE-WILL-LEARN:_**

**_LECTURE-VIDEO:_**

- [Working with an existing project](https://youtu.be/MF9G6IXxlVw)
  1. Clone and run an existing frontend project
  - `https://github.com/fullstack-hy2020/patientor.git`
  - cd patientor
  - rm -rf .git
  - npm i
  - npm run dev
  2. Run existing backend project
  - cd patientor-backend
  - npm run dev
  3. Serve the expanded patients data
  - copy the [expanded data set](https://github.com/fullstack-hy2020/misc/blob/master/patients-full.ts)
  - create the required types for entry
    - start with a common type, refer to `code` from `Diagnose` type for `diagnosisCodes`
    - extend it
    - creat a union type
    - understanding and using `UnionOmit`

**_TO-DO:_**

- [9.20-9.21](https://fullstackopen.com/en/part9/grande_finale_patientor#exercises-9-20-9-21)
- [9.22-9.29](https://fullstackopen.com/en/part9/grande_finale_patientor#exercises-9-22-9-29)

</details>
</details>

---

## [PART 11: CI/CD](https://fullstackopen.com/en/part11)

<details><summary><h3 style="display:inline">Chapters</h3></summary>
<details><summary>Part 11-a: Introduction to CI/CD</summary>

- [Part 11-a: Introduction to CI/CD](https://fullstackopen.com/en/part11/introduction_to_ci_cd)

**_WE-WILL-LEARN:_**

- Software development life cycle
- Meaning of CI / CD

**_LECTURE-VIDEO:_**

- [Software journey from development to production](https://youtu.be/lur5tfxqJT4)
  1. Follow the [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) for software development
  - create a feature branch
  - complete coding and testing the feature
  - create a `Pull request` to the main branch
    - another user checks the code, and merges to the main branch
  2. Build the application to make it ready for `deploying` to server
  3. `Deploy` the code to production
- [CI / CD](https://youtu.be/lur5tfxqJT4)
  1. CI: `Continuous Integration` refers to merging developer changes to the main branch. This involves:
  - `merging` feature branch to main branch
  - `lint`
  - `build`: e.g. build the frontend code and put it in static folder of backend repository
  - `test`: run all frontend/backend jest, cypress tests to make sure they pass
  - `package`: e.g. create a zip file of part3/notes-server with `ALL` required code files including `node_modules`
  - `deploy`: e.g. ftp the zip file to production server, unzip it, and restart the node server
  2. CD: could mean `Continuous Delivery` or `Continuous Deployment`
  - the practice where the main branch is kept deployable at all times
  - automated deployments triggered from merges into the main branch
  3. `Important principals`: The goal is better, faster software development with fewer preventable bugs and better team cooperation
  - How to make sure that tests run on all code that will be deployed?
  - How to make sure that the main branch is deployable at all times?
  - How to ensure that builds will be consistent and will always work on the platform it'd be deploying to?
  - How to make sure that the changes don't overwrite each other?
  - How to make deployments happen at the click of a button or automatically when one merges to the main branch?
  4. Types of CI Setup
  - Self hosted setup, e.g. Jenkins
  - Cloud based solution, e.g. GitHub Actions

**_TO-DO:_**

- [11.1](https://fullstackopen.com/en/part11/introduction_to_ci_cd#exercise-11-1)

</details>

<details><summary>Part 11-b: Getting started with GitHub Actions</summary>

- [Part 11-b: Getting started with GitHub Actions](https://fullstackopen.com/en/part11/getting_started_with_git_hub_actions)

**_WE-WILL-LEARN:_**

- How to create GitHub Action

**_LECTURE-VIDEO:_**

- [Creating a GitHub Action](https://youtu.be/O4DycKA88kI)
  1. be aware of the [basic needs](https://fullstackopen.com/en/part11/getting_started_with_git_hub_actions#basic-needs) required to create CI operation
  2. create the folder `.github/workflows` in the root of the repository
  3. create a `workflow` file `hello.yml` inside `.github/workflows` directory
  4. put the workflow code in [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html) with the following elements:
  - **name**: identifier for the workflow
  - **on**: the [event that will trigger the workflow](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows) to be executed
  - **jobs**: one or more `jobs` (series of steps) to be executed in the workflow
  5. commit & push
  6. check the `Actions` tab in GiHub to see the workflow
  7. add step to list the files
  - you can configure a GitHub action workflow to start once:
    - An event on GitHub occurs such as when someone pushes a commit to a repository or when an issue or pull request is created
    - A scheduled event, that is specified using the cron-syntax, happens
    - An external event occurs, for example, a command is performed in an external application such as Slack or Discord messaging app
- [Setting up lint, test and build steps](https://youtu.be/uWrCIJZc3T4)
  1. create new workflow file `pipeline.yml`
  2. add new workflow code
  3. create a job
  - setup environment to run the job
  - add step to checkout the code
  - add step to setup node
  - add step to run npm install (you can set working-directory if required)
  - add step to run linting (you can set working-directory if required)
  4. commit and push code

**_TO-DO:_**

- [11.2](https://fullstackopen.com/en/part11/getting_started_with_git_hub_actions#exercise-11-2)
- [11.3-11.4](https://fullstackopen.com/en/part11/getting_started_with_git_hub_actions#exercises-11-3-11-4)
- [11.5-11.9](https://fullstackopen.com/en/part11/getting_started_with_git_hub_actions#exercises-11-5-11-9)

</details>

<details><summary>Part 11-c: Deployment</summary>

- [Part 11-c: Deployment](https://fullstackopen.com/en/part11/deployment)

**_WE-WILL-LEARN:_**

- deployment

**_LECTURE-VIDEO:_**

- [How to deploy in CI / CD](https://youtu.be/V6-LolcWCuA)
  1. good rules for CI / CD
  - expect anything that can go wrong to go wrong
  - silent failures are very bad
  2. read what a [good deployment system should do](https://fullstackopen.com/en/part11/deployment#what-does-a-good-deployment-system-do)
- []()

**_TO-DO:_**

- [11.10-11.12](https://fullstackopen.com/en/part11/deployment#exercises-11-10-11-12)

</details>

<details><summary>Part 11-d: Keeping green</summary>

- [Part 11-d: Keeping green](https://fullstackopen.com/en/part11/keeping_green)

**_WE-WILL-LEARN:_**

- Put conditions for executing Github Actions
- Versioning git repositories

**_LECTURE-VIDEO:_**

- [Workflow in Pull Requests](https://youtu.be/Ibit4QxIF_c)
  1. keep the main branch green
  2. usage of pull requests
  - for code review
  - automate trigger of tasks in the CI pipeline
  3. configure GitHub action to trigger on PR
  - NOTE!! make sure your `PR` is from your feature branch to YOUR main branch
  4. put condition on `deploy` step to only execute on certain `github.event_name` condition
- [About versioning](https://youtu.be/vNb-0_FDa0A)
  1. types of versioning
  - semantic versioning: {major}.{minor}.{patch} (e.g. 1.2.23)
  - hash versioning: is the hash from the commit point
  2. ways to keep track of versions
  - something in the code itself (e.g. a file in the repo with version number)
  - something in the repo or repo metadata (e.g. `tags` or `releases` in git)
  - something completely outside the repo (e.g. a spreadsheet that lists the Semantic Version and the commit it points to)
  3. best versioning workflow:
  - CI system keeps track of development by hash versioning
  - once code is successfully merged to main branch, then CI system gives a semantic version
  4. use [anothrNick/github-tag-action](https://github.com/anothrNick/github-tag-action) for automating semantic versioning in GitHub Actions
  - put it in a separate job
  - use the `needs` keyword to make this job depend on the previous job, `simple_deployment_pipeline`
  - only run this job on PR merge
  - checkout the code in the first step
  - in the tag step
    - change the default bump to `patch`
    - add token for authentication in your repository, as the action is third-party which needs authentication
    - only run the step if the commit message does not contain `#skip`
- [Final notes](https://youtu.be/vNb-0_FDa0A?t=1083)
  1. when using third party actions, e.g. github-tag-action, it might be a good idea to specify the used version with hash instead of using a version number
  2. keep the main branch protected

**_TO-DO:_**

- [11.13-11.14](https://fullstackopen.com/en/part11/keeping_green#exercises-11-13-11-14)
- [11.15-11.16](https://fullstackopen.com/en/part11/keeping_green#exercises-11-15-11-16)
- [11.17](https://fullstackopen.com/en/part11/keeping_green#exercise-11-17)

</details>

<details><summary>Part 11-e: Expanding Further</summary>

- [Part 11-e: Expanding Further](https://fullstackopen.com/en/part11/expanding_further)

**_WE-WILL-LEARN:_**

**_LECTURE-VIDEO:_**

- [Additional usage of CI pipelines](https://youtu.be/AOUNtGhznR4)
  1. use commit comments to automate bug tracking systems
  2. automate communications based on CI status
  3. steps to build discord success/failure notification to discord
  - use GitHub action [discord-webhook-notify](https://github.com/marketplace/actions/discord-webhook-notify) to send notification to [University of Helsinki discord channel - fullstack_webhook](https://study.cs.helsinki.fi/discord/join/fullstack) using [their webhook](https://discord.com/api/webhooks/905102634300637195/G6o7r15r3rO5PO7IFw0xaiJ79oYO0QttiXFU9Ab5hr_McBWZDXjJCoAJSkH4VRj3V3uC)
    - a success indication if a new version gets deployed
    - an error indication if a build fails
  4. **regarding metrics** - keep metrics of build time so that you can
  - project future build times
  - see if there are any sudden build time changes
  5. **periodic tasks** - automate with either commonly available tools, or, if not available, build automation yourself. you can schedule through GitHub Actions
  6. **building vs buying** - it's almost always better to use a tool that already does the job than to roll your own solution
  7. creating your own pipeline
  - create a new repo
  - includ phonebook server code into `server` folder
  - put phonebook frontend into `client` folder
  - make sure that `MONGODB_URI` env is entered into heroku `config vars`
  - make sure `HEROKU_API_KEY` is entered as github actions secret
  - make sure that the build script in `package.json` is named `build`
    - it should build to a folder that is referred from the backend's `express.static`
  8. protect your `main` branch
  - require a pull request. make sure approval is required
  - do not allow bypassing even for administrators

**_TO-DO:_**

- [11.18](https://fullstackopen.com/en/part11/expanding_further#exercise-11-18)
- [11.19-11.21](https://fullstackopen.com/en/part11/expanding_further#exercises-11-19-11-21)

</details>

</details>

---

## 💚 Senior Phase

The senior phase will focus on alrogithms and projects

## WEEK 1

<details>
<summary><h3 style="display:inline">Days</h3></summary>

<details><summary>Day 1</summary>

[Grace Shopper](./e-commerce/grace_shopper.pdf)

**_WE-WILL-LEARN:_**

- Getting started with e-commerce project

**_WEB APP DESIGN_**

1. requirements, user stories

- As a `<persona>`, I want to `<do something>` so that `<reason>`
  - example: as a `phonebook owner`, I want to see all of my contacts, so that I can see their phone number

2. implementation detail

- How you will actually fulfill a user story
- Split each story into specific, bite-size tasks (implementation detail)
  - Should always serve a user story
- examples:
  - an Express route on the backend
    (GET `/api/contacts`) should serve up the name,
    phone number of all the contacts from our Postgres database. access should be restricted to only the owner of the contact.
  - a React component on the frontend should call `/api/contacts` on first load, save it on redux, and use contacts from redux to display them on the screen

3. models

- list all the different models you will need, e.g. `users`, `contacts`
- write down all the fields for the models
- draw connections between models, e.g. one-to-one, one-to-many etc

4. wireframes

- rough mockups for all the frontend screens

**_TO-DO:_**

- gather user stories
- models
- implementation details
- wireframes

</details>
<details>
<summary>Day 2</summary>

**_WE-WILL-LEARN:_**

- Algorithms
  - Linear search
  - Binary search
  - Two crystal ball
  - Bubble sort
- REACTO
- Big O
- System design an ATM Machine

**_INTERVIEWING USING REACTO_**

- Read
  - ask clarifying questions
  - confirm your assumptions with the interviewer
- Example
  - write down example
    - one simple case
    - edge cases (many, if you can think of)
  - for arrays, always ask
    - is it sorted
    - can there be duplicates
- Analyze
  - tell your interviewer that you are going to analyze the simpe case first. think aloud to the interviewer as you are analyzing the simple case solution. let her hear all your thoughts; don't just analyze in your mind. come out with the solution that you are able to think of right away, don't try to be clever to come up with the optimal solution in the first go. it is ok if it is a naive solution
  - talk about the Big(O) of the solution
    - time complexity
    - space complexity
- Code it completely
- Test it using the simple example
  - then test for some of the edge cases, and see if you need to modify code for it
- Optimize solution if possible. but since you have done naive solution already, there isn't pressure to complete it

**_BIG O NOTATION_**

[Big O](https://theprimeagen.github.io/fem-algos/lessons/algorithms-and-time-space-complexity/time-and-space-complexity) is a way to categorize your algorithm's time or memory requirements based on input. It is not meant to be an exact measurement. It will not tell you how many CPU cycles it takes, instead it is meant to generalize the growth of your algorithm.

- Big O of time
  - O(N) - if there is one loop through the input
  - O(N^2) - if there is nested loop through the input
  - O(log N) - if the input is halved in each step
  - O(N log N) - if the input is halved in each step
- Big O of space
  - how much memory is the algorithm going to consume?
  - generally, not much focus will be put on this
  - it only comes into focus when using hashing function

### While calculating Big O

1. look for loops!
1. growth is with respect to the input
1. constants are dropped
1. worst case is usually the way we measure

**_TO-DO:_**

- REACTO interview problems
- Web app design for Blogslist

</details>

</details>

---

<details><summary>TEMPLATE</summary>

<details><summary>Part : </summary>

- [Part : ]()

**_WE-WILL-LEARN:_**

**_LECTURE-VIDEO:_**

- []()
  1.
- []()

**_TO-DO:_**

- [.-.]()

</details>

</details>
