const signinForm = document.getElementById("signinForm");
var provider = new firebase.auth.GoogleAuthProvider();

signinForm.addEventListener('submit', signinUser);

function signinUser(e) {


    e.preventDefault();

    auth.signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ..
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;

        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        console.log(errorCode);
        console.log(errorMessage);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ..
    });
    auth.onAuthStateChanged(statuscheck);

    function statuscheck(user) {

        if (user) {
            console.log("ok");
            document.getElementsByClassName('applylink')[0].style.display = "block";
            document.getElementById('logoutlink').style.display = "block";
            document.getElementsByClassName('signinlink')[0].style.display = "none";
            window.open("apply.html", "_top");

        }

    }
}
