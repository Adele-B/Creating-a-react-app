# Creating-a-react-app

This initialises the app by creating a package.json file
- `npm init -y`
- `mkdir public`
- `touch public/index.html`

webpack
- `npm i webpack webpack-cli --save-dev`
- `mkdir src`
- `touch src/index.js`
- `touch webpack.config.js`

plugins
- `npm i html-webpack-plugin --save-dev`
- `npm i copy-webpack-plugin --save-dev`
- `npm i mini-css-extract-plugin --save-dev`

loaders
- `npm i style-loader --save-dev`
- `npm i css-loader --save-dev`
- `npm i sass sass-loader --save-dev`
- `npm i url-loader --save-dev`

webpack dev server
- `npm i --save-dev webpack-dev-server`

babel
- `npm i @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`
- `touch .babelrc`

react
- `npm i react react-dom react-router-dom --save`
- `npm i @babel/preset-react --save-dev`

eslint
- `npm init @eslint/config`
- `npm install --save-dev eslint-formatter-table`
- `npm install --save-dev eslint-plugin-babel`
- `npm install --save-dev eslint-plugin-jest`
- `npm install --save-dev eslint-plugin-jsx-a11y`

testing
- `npm install --save-dev jest`
- `npm install --save-dev jest-environment-jsdom`
- `npm install --save-dev @testing-library/react`
- `npm install --save-dev @testing-library/jest-dom`
- `npm install --save-dev @testing-library/user-event`

Add starter code to
- index.html
- index.js
- App.jsx
- webpack.config.js
- .babelrc
- .eslintrc.json

Update scripts on
- package.json

