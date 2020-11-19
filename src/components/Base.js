import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmccWp5t8vRfO4PXCsRkwt6vfqUi9RDf0",
    authDomain: "chat-box-app-aab7a.firebaseapp.com",
    databaseURL: "https://chat-box-app-aab7a.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
