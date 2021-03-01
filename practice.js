var firebaseConfig = {
    apiKey: "AIzaSyB-Y-FuYdtQON1wnDslMetsJXvus5YRd3E",
    authDomain: "project-93-94-95-96.firebaseapp.com",
    projectId: "project-93-94-95-96",
    storageBucket: "project-93-94-95-96.appspot.com",
    messagingSenderId: "552933834756",
    appId: "1:552933834756:web:49b22460ff86bba4ce3551"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adduser()
{
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}
//ADD YOUR FIREBASE LINKS