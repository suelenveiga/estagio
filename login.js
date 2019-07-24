firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("btnSair").style.display = "none";
      document.getElementById("logado").style.display = "block";

      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("btnSair").style.display = "block";
      document.getElementById("logado").style.display = "none";
  
    }
  });
  
  function login(){
    var userEmail = document.getElementById("loginEmail").value;
    var userPass = document.getElementById("loginSenha").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });  
  }
  function logout(){
    firebase.auth().signOut();
  }
  