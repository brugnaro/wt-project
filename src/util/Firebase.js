const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

  constructor() {

    this._config = {
      apiKey: "AIzaSyBGFw4g7v0rROGg1inR8BB_mBhpgqtkRz0",
      authDomain: "wtproject-663eb.firebaseapp.com",
      databaseURL: "https://wtproject-663eb.firebaseio.com",
      projectId: "wtproject-663eb",
      storageBucket: "wtproject-663eb.appspot.com",
      messagingSenderId: "85393010399"
    };

    this.init();

  }

  init() {

    if (!this._initialized) {

      firebase.initializeApp(this._config);

      firebase.firestore().settings({
        timestampsInSnapshots: true
      });

      this._initialized = true;

    }

  }


  static db() {

    return firebase.firestore();

  }

  static hd() {

    return firebase.storage();

  }

  initAuth() {

    return new Promise((s, f) => {

      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
        .then(result => {

          let token = result.credential.accessToken;
          let user = result.user;

          s({
            user, token
          });

        })
        .catch(err => {
          f(err);
        });

    });

  }

}

