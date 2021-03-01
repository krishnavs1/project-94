var firebaseConfig = {
      apiKey: "AIzaSyDknOieWyYIkd6UC66UjsJUjbbnzhBGd9w",
      authDomain: "kwitter-f463d.firebaseapp.com",
      projectId: "kwitter-f463d",
      storageBucket: "kwitter-f463d.appspot.com",
      messagingSenderId: "1075782176789",
      appId: "1:1075782176789:web:8523e7e28d8863e3847e1c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

  