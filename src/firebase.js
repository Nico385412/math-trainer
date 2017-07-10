import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCyIzUmXuy7K3rZ21ASVFojPLKoTe1NVfA",
    authDomain: "math-trainer-d5fc8.firebaseapp.com",
    databaseURL: "https://math-trainer-d5fc8.firebaseio.com",
    projectId: "math-trainer-d5fc8",
    storageBucket: "math-trainer-d5fc8.appspot.com",
    messagingSenderId: "1079983848414"
};
// Creation et connection à la base de donnée
export const firebaseApp = firebase.initializeApp(config);

// Création des Objets dans la base
export const questionRef = firebase.database().ref('questions');

