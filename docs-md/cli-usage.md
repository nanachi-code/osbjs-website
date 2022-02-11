---
name: CLI usage
---

# CLI
CLI tool for osbjs

## Install
Global
```bash
npm i -g @osbjs/cli
```

As dev dependency
```bash
npm i -D @osbjs/cli
```

## Usage
### Create a new storyboard project
Create a new project folder, then open it:
```bash
cd your-project-folder
npx @osbjs/cli create-storyboard
```

This will generate the initial project structure and install all the needed dependencies:
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
npx @osbjs/cli create-storyboard -d
```
- **-t <template-name>**: template name. available: `common` for CommonJS syntax, `es` for ESModule syntax. Default: `common`
```bash
npx @osbjs/cli create-storyboard -t es
```

### Customize a pre-built component
In case you want to customize a pre-built component from `@osbjs/components` package, run:
```bash
npx @osbjs/cli customize <name>
```
where name is the component name. Available components: `background`, `hitobjecthighlight`, `lyrics`. This will also install needed dependencies for that component.

#### Options:
- **-t <template-name>**: template name. available: `common` for CommonJS syntax, `es` for ESModule syntax. Default: `common`
```bash
npx @osbjs/cli customize lyrics -t es
```
