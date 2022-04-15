/**
 * what should we do when want to use firebase authentication in react JSON: follow the steps,
 * 1.visit site to create a project on console .firebase.google.com .
 * 2.install firebase :cmd -npm install firebase
 * 3.Register web app in firebase
 * 4.copy firebase init with config from firebase project settings into file firebase.init.js
 * 5.export deafult app and others from firebase.init.js file.
 * 6.import (app) file from firebase.init.js into your app.js
 * 7.import getAuth from firebase/auth and create  const auth =getAuth(app)
 * 8.turn on/enable google authentication  from my created project(firebase=>authentication=>google or others enable sign in jabo)
 * 9.create google provider
 * 10.use signInWithPopup(auth,provider) in handlegoogleSignIn btn.
 * 11.handle then(if successful) and catch error(if error)
 * */
