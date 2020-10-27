import firebase from 'firebase'


var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDE0wwOCx-zXQCZUpg_xVxNTVtci9bP_Z0",
    authDomain: "myportfolio-75155.firebaseapp.com",
    databaseURL: "https://myportfolio-75155.firebaseio.com",
    projectId: "myportfolio-75155",
    storageBucket: "myportfolio-75155.appspot.com",
    messagingSenderId: "943332805633",
    appId: "1:943332805633:web:89854513b88359b8080400",
    measurementId: "G-P3SJ46CJTN"
});
firebaseConfig.analytics();

export const checkIfDataExist = (fromData, dataToCheck) => {
    return firebase.firestore().collection('contacts').where(fromData, '==', dataToCheck).get()
}

export const detabase = firebaseConfig.firestore();


let fireStore = firebase.firestore();
export let storage = firebase.storage().ref()



export let docRefContact = fireStore.collection('contacts')
export let docRefEmailLists = fireStore.collection('emailList')
export let docRefBlog = fireStore.collection('Blog')