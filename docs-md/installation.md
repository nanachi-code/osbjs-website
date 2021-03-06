---
name: Getting started with osbjs
---

# Getting started with osbjs

*Note*: `osbjs` uses `node-canvas` for generating image so make sure you have `node-gyp` installed. Read [this section](https://github.com/nodejs/node-gyp#installation) for more info on how to install `node-gyp` for your operating system.

## CLI (Recommended)

A recommended way to setup your project is to use the cli, which sets up everything automatically for you.
```ssh
npx @osbjs/osbjs create-storyboard
```

After the installation is complete:
- you need to change `path` and `filename` in the osbjs config file to your beatmap folder path and osb filename respectively.
- start writing some codes.
- run `npm run build` and see the result in the osu editor.

## Manual setup
If you are creating a simple storyboard that doesn't need to be seperated into multiple files, you can simply install `osbjs` in your project.
```ssh
npm i @osbjs/osbjs
```
Open package.json and add the following script:
```json
"scripts": {
	"build": "node index",
}
```
Create a new `index.js` file and start editing. Run `npm run build` to generate storyboard after you finish.

## Hot reload
If you want to update your storyboard everytime you make changes to your code, `nodemon` is perfect for that.
```ssh
npm i -D nodemon
```
Open package.json and add the following script:
```json
"scripts": {
	...
	"dev": "nodemon index",
}
```
Now instead of running `npm run build` everytime you saved, you can run `npm run dev` instead.

## Next step
Now that you have created your storyboard project, you can start [creating your first storyboard](/docs/create-your-first-storyboard).
