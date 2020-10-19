# Akhbary Web App
This is the frontend web app of akhbary. It's built using React, React Router, and Redux

## Build

To build this project you will need to follow the following steps:
1. Install packages
2. Configure Environment
3. Run The App

### `Install packages`

To build this project we first start by installing its dependancies. To install the dependancies use either of the following command based on package manager you prefer.
```bash
# if you npm then
npm install --save
# if you npm then
yarn install
```

### `Configure Environment`

After Installing dependancies, it's time to configure our environment. you will find a templete for the env in the source folder called [env.js.example](./src/env.js.example). This example contains all the needed enviroment congiuraion.

### `Run The App`

Now you can run the app using `yarn start` or `npm start`. Then the app will start running on localhost port 3000. Keep in mind that this web app depends on the [Akhbary Laravel Server](../AkhbaryServer) so you will need to build and run the server before building this web app.
