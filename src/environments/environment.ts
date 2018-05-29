// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAEv-Ip6AZwHzU7wgLaFzy8eI-TW2D69aE",
    authDomain: "eveapitools-20e5e.firebaseapp.com",
    databaseURL: "https://eveapitools-20e5e.firebaseio.com",
    projectId: "eveapitools-20e5e",
    storageBucket: "eveapitools-20e5e.appspot.com",
    messagingSenderId: "332823720132"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.