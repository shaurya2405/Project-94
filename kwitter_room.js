var firebaseConfig = {

    apiKey: "AIzaSyC1tjFIbOHW-dIMFqf5-ztU5yCqf1N4nIw",
  
    authDomain: "project-94-1fe2a.firebaseapp.com",
  
    databaseURL: "https://project-94-1fe2a-default-rtdb.firebaseio.com",
  
    projectId: "project-94-1fe2a",
  
    storageBucket: "project-94-1fe2a.appspot.com",
  
    messagingSenderId: "637699377829",
  
    appId: "1:637699377829:web:67a88b61abe3c5bcf0db4c"
  
  };
  
  firebase.initializeApp(firebaseConfig);

  function addRoom() 
  {
  user_name = document.getElementById("room").value;
  firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"    
  });
  }