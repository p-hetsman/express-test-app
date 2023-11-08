# express-test-app

## Install dependencies

```bash
cd express-test-app
cd client
npm install
cd ..
npm install
```

## Start the development server

```bash
npm run watch
npm run dev
```

- Run the above two commands on different terminal sessions.

- In this case `npm run watch` needs to be executed before starting the development server with `npm run dev` as the TypeScript files need to be compiled to JavaScript before staring the dev server with node. `ts-node` can be used this to avoid this.

## Run tests

```bash
npm run test
```

## Build production bundle

```bash
npm run build
```

## Run production server

```bash
NODE_ENV="production" node ./dist/index.js
```
