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

Fix the first visit not working still - either send message from the service
worker to let the app know `fetch` is now being intercepted or do a test `fetch`
first until it starts working? Because the service worker `install` handler didn't
seem to have access to `clients` - it was empty.
