firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    // Hide login page elements and view profile page elements
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      var password = user.password;
      var name = user.name;

      document.getElementById("user_email").innerHTML = email_id;
      document.getElementById("user_password").innerHTML = password;
      document.getElementById("user_name").innerHTML = name;
    }

  } else {
    // No user is signed in.

    // Hide profile page elements and view login page elements
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

function logout() {
  firebase.auth().signOut();
}

function getUserData(uid) {
  firebase.database().ref('Users/' + uid + '/name')
}
