// const signupTab = document.getElementById("signupTab");
// const signinTab = document.getElementById("signinTab");
// const signinForm = document.getElementById("signinForm");
// const signupForm = document.getElementById("signupForm");
// var provider = new firebase.auth.GoogleAuthProvider();

// if (window.location.pathname.includes('signup.html')) {
//     function signupUser(e) {
//         e.preventDefault();
//         if (signupForm['inputEmail'].checkValidity()) {
//             let email = signupForm['inputEmail'].value;
//             let password = signupForm['inputPassword'].value;

//             //Sign up Users
//             auth.createUserWithEmailAndPassword(email, password).then(cred => {

//                 signupForm.reset();
//             }).catch(err => {
//                 signupForm.querySelector('.error').innerHTML = err.message;
//               });
//         }
//     }
//     signinForm.addEventListener('submit', signinUser);

//     function signinUser(e) {


//         e.preventDefault();
        
//       auth.signInWithPopup(provider).then(function(result) {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // ..
//           }).catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;

//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             console.log(errorCode);
//             console.log(errorMessage);
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ..
//           });

          
//     }
// auth.onAuthStateChanged(statuscheck);

//  function statuscheck(user) {

//      if (user) {
//          // User is signed in.
//         //  userloggedin(user);
//          document.getElementsByClassName('applylink')[0].style.display = "block";
//          logout.style.display = "block";
//          document.getElementsByClassName('signinlink')[0].style.display = "none";
//          window.open("apply.html", "_top");


//          //   userloggedin(user);

//      }



//     }

   
// }

 

// if (window.location.pathname.includes('facilities.html')) {

//     const images = document.getElementsByTagName('img');
//     const library = images[0];
//     const lab = images[1];
//     const pingpong = images[2];
//     const cafeteria = images[3];
//     const gym = images[4];
//     const kitchen = images[5];

//     library.addEventListener('click', () => {
//         if (library.getAttribute('src') == './img/library1.jpg') {
//             library.setAttribute('src', './img/library.jpg');
//         }
//         else {
//             library.setAttribute('src', './img/library1.jpg');

//         }
//     })
//     lab.addEventListener('click', () => {
//         if (lab.getAttribute('src') == './img/lab1.jpg') {
//             lab.setAttribute('src', './img/lab.jpg');
//         }
//         else {
//             lab.setAttribute('src', './img/lab1.jpg');

//         }
//     })
//     pingpong.addEventListener('click', () => {
//         if (pingpong.getAttribute('src') == './img/ping_pong1.jpg') {
//             pingpong.setAttribute('src', './img/ping_pong.jpg');
//         }
//         else {
//             pingpong.setAttribute('src', './img/ping_pong1.jpg');

//         }
//     })
//     cafeteria.addEventListener('click', () => {
//         if (cafeteria.getAttribute('src') == './img/cafeteria1.jpg') {
//             cafeteria.setAttribute('src', './img/cafeteria.jpg');
//         }
//         else {
//             cafeteria.setAttribute('src', './img/cafeteria1.jpg');

//         }
//     })
//     gym.addEventListener('click', () => {
//         if (gym.getAttribute('src') == './img/gym1.jpg') {
//             gym.setAttribute('src', './img/gym.jpg');
//         }
//         else {
//             gym.setAttribute('src', './img/gym1.jpg');

//         }
//     })
//     kitchen.addEventListener('click', () => {
//         if (kitchen.getAttribute('src') == './img/kitchen1.jpg') {
//             kitchen.setAttribute('src', './img/kitchen.jpg');
//         }
//         else {
//             kitchen.setAttribute('src', './img/kitchen1.jpg');

//         }
//     })

// }
// if (window.location.pathname.includes('/apply.html')) {
//     const container = document.getElementsByClassName('container')[0];
    
//     const step1Button = document.getElementById('step1Button');

//     step1Button.addEventListener('click', (e)=>{
//         e.preventDefault();
//         createCard("Step 2", "Apply for RC South", "Submit the RC South Application.", "button2");
//         step1Button.disabled=true;
//       const step2Button = document.getElementById('button2');
//       step2Button.addEventListener('click', (e)=>{
//         e.preventDefault();

//         createCard("Step 3", "Wait for your application to get approved", "In the meanwhile if you have any question about the application. Please contact Ms Sue.", "step4button");
//         step2Button.disabled=true;

//     });
// });









//     function createCard(headertext, title, bodypart, buttonID) {
//         //Full card Container
//         const cardDivContainer = document.createElement('div');
//         cardDivContainer.className = 'card w-75  mx-auto m-3';
    
//         //Header Starts
    
//         //Header Part Container
//         const headerDiv = document.createElement('div');
//         headerDiv.className = 'card-header h3';
    
//         //Header text Container
//         const headerText = document.createTextNode(headertext);
    
//         //Body starts
    
//         //Body of the card container
//         const bodyDivContainer = document.createElement('div');
//         bodyDivContainer.className = 'card-body';
    
//         //Body Title 
//         const cardTitle = document.createElement('h5');
//         cardTitle.className = 'card-title';
//         cardTitle.appendChild(document.createTextNode(title));

//         //Body text
//         const cardText = document.createElement('p');
//         cardText.className = 'card-text';
//         cardText.appendChild(document.createTextNode(bodypart));

//         //Button 
//         const done = document.createElement('button');
//         done.className="btn btn-info"
//         done.setAttribute("id", buttonID);
//         done.appendChild(document.createTextNode("Done"));





//         //Add header text to header container 
//         headerDiv.appendChild(headerText);
    
    
//         //Add title, text and Button to body container
//         bodyDivContainer.appendChild(cardTitle);
//         bodyDivContainer.appendChild(cardText);
//         bodyDivContainer.appendChild(done);

    
    
//         //Add header and body to the card
//         cardDivContainer.appendChild(headerDiv);
//         cardDivContainer.appendChild(bodyDivContainer);
    
//         // add card to the main container
//         container.appendChild(cardDivContainer);
    
    


//     }



// }


// Log User Out




