---
name: Getting started with osbjs
---

# Getting started with osbjs

## CLI (Recommended)

A recommended way to setup your project is to use `@osbjs/cli`, which sets up everything automatically for you.
```ssh
npx @osbjs/cli create-storyboard
```

After the installation is complete:
- you need to change `path` and `filename` in the osbjs config file to your beatmap folder path and osb filename respectively.
- start writing some codes.
- run `npm run build` and see the result in the osu editor.

If you are not familiar with the [component concept](/docs/introducing-components), you can take a look at the following section on how to setup `osbjs` manually.

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
