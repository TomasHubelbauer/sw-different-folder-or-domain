# Service Worker JavaScript to TypeScript Transpiler Demo

[**DEMO**](https://tomashubelbauer.github.io/sw-js-to-ts-transpiler-demo)

This is a demo repository for the [Service Worker JavaScript to TypeScript Transpiler script](https://github.com/TomasHubelbauer/sw-js-to-ts-transpiler).

To run locally run:

- `npm install` to install React & ReactDOM type definitions and `serve`
- `npm start` to serve the directory on `localhost:5000`

(The `file://` protocol is insecure and service workers require `localhost` or HTTPS.)

## To-Do

Find out how to get rid of the *'React/ReactDOM' refers to a UMD global, but the current file is a module. Consider adding an import instead* hints in VS Code.
https://stackoverflow.com/q/56960465/2715716

Combine `index.js` and `worker.js` into one by recognizing if we're in the tab execution context or in the module execution context.
If in tab, download the transpiler script and register the service worker.
If in worker, execute the transpiler script.
