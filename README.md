# OrangeDigital React Challenge

This code challenge will test your:

- Ability to think on the spot
- Communication skills and ability to talk through their code with others
- Logical thought processes
  This coding challenge designed to be completed in 8 hours. We are going to evaluate the work that has been acheaved in the first 60 minutes of work but we also encourage the developer to work longer and try to complete the task. The task does not need to be completed for a successfull interview, but we will appreciate the effort in trying to complete the task. 

## Writing your code

Please look at the layout png image included in the repo. Think how to structure the HTML structure and how to split the elements in components and how to style them to look as the same as the picture.

You are encouraged to use the Material Library for styling the React components. It offers React components for faster and easier web development. You can find more at:

[Material UI Github](https://github.com/mui/material-ui)

[Material UI Official Website](https://mui.com/core/)

When Writing your code, please be mindful of the following:

- use eslint for js lint
- use stylelint for scss lint
- use editorconfig for editor configuration
- use packages.json to expose your scripts
- write the code functional and testable

The code must be submitted to public repo in your own git account and a live version has to be deployed on vercel if possible.

Please add the public link to the README.md file on your codebase. The layout must be responsive and optimise for iPad and iPhone.

You are encouraged to use Material UI Components and implement custom styles using emotion

[emotion for react ](https://emotion.sh/docs/introduction)

[emotion and Material UI](https://networksynapse.net/development/mui-v5-material-with-emotion/)

## Installation

Create a new react application named material-ui run the code below. ( NB. USE AND PROPER SETUP OF TYPESCRIPT in this challenge will be considered as an appreciated extra )

NB. Create React App used as a possible way. 

```bash
npx create-react-app OrangeDigital

yarn add @mui/core fontsource-roboto @mui/icons

yarn add @emotion/react

yarn add @emotion/styled

yarn add --dev @emotion/babel-plugin

```

## Usage

In index.js

```JavaScript
// After you installed all the required modules you can start using react with material-ui and style our components. (EXAMPLE ONLY)
/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/react"
import Button from "@material-ui/core/Button";

const App = () => {
  return (
    <Button
    css={css`
             margin-left: 10px;
        `}
        variant="contained" color="primary">
      Orange Digital
    </Button>
  );
}
```

# The Layout

The app will have 2 pages as per image below.

The hamburger menu will have 1 link for the gallery page and one link for the detail page.

Please contact: domenico@orangedigital.com.au if any questions.

![Portal Home](https://bitbucket.org/orangedigital/od-react-challege/raw/bce74dbb748d91a5b334f1b0035bea4ce08e2260/app-page-figma.png)

# The Backend API

Write a simple NodeJS server that serves a RESTFUL API endpoint with a JSON structure data to popuplate the pages information.

Hint: ExpressJS, NextJS.

The JSON Should include:

1) Page Name
2) Users Details
3) Video Details
4) Pictures Details


Please include in the package.json file a command to start the ExpressJS server prior Serving the project so that the app can load the data when served.

NB. No DB required just create a static json file that gets served via the NodeJS server.


    How to run the project

    first you have to install the dependency I recommend this command

    npm i; cd orange-digital; npm i; cd ..

    Then to build the application

    npm run tsc ; cd orange-digital ; npm run build ; cp build -r ../build/ ; cd ..

    Finally to run the app

    node build/index.js

