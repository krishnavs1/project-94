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
function adduser() {
    user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html";
}