---
name: CLI
---

# CLI
CLI tool for osbjs

## Usage
### Create a new storyboard project 
```bash
npx @osbjs/osbjs create-storyboard [project-name]
```
This will generate the initial project structure and install all the needed dependencies.
If project name is not specified, it will assume the project folder is the current directory where the command was executed.
```
components
├── HelloWorld.js
scenes
├── Main.js
index.js
osbjs.config.json
```
Once the folder are generated, update `path` and `filename` in osbjs.config.json and start coding!

#### Options:
- **-d**: Create a diff specific storyboard
```bash
npx @osbjs/osbjs create-storyboard -d
```
- **-t <template-name>**: template name. available: `common` for CommonJS syntax, `es` for ESModule syntax, `ts` for TypeScript. Default: `common`
```bash
npx @osbjs/osbjs create-storyboard -t es
```
- **-c**: if you don't want to generate example components.
```bash
npx @osbjs/osbjs create-storyboard -c
```
### Customize a pre-built component
In case you want to customize a pre-built component from `@osbjs/components` package, run:
```bash
npx @osbjs/osbjs customize <name>
```
where name is the component name. Available components: `background`, `hitobjecthighlight`, `lyrics`. This will also install needed dependencies for that component.

### Create a new component
```bash
npx @osbjs/osbjs create-component <name>
```
This will create an empty component.

### Create a new scene
```bash
npx @osbjs/osbjs create-scene <name>
```
This will create an empty scene.
