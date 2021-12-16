// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { getFirestore } from "firebase/firestore";

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDxtLeqwR3AMlQYM6zk7Uz4e8_Dk0MZWoI",
    authDomain: "clinido-ce15d.firebaseapp.com",
    projectId: "clinido-ce15d",
    storageBucket: "clinido-ce15d.appspot.com",
    messagingSenderId: "584753027934",
    appId: "1:584753027934:web:719e525a3580d8fbad8dcf"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
