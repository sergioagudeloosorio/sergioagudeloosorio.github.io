// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDyAR24XvaMfaEaYoO97wJTEg-qPJc4iGw",
    authDomain: "venturi-01.firebaseapp.com",
    databaseURL: "https://venturi-01.firebaseio.com",
    projectId: "venturi-01",
    storageBucket: "venturi-01.appspot.com",
    messagingSenderId: "783660710888",
    appId: "1:783660710888:web:a2663e9cd9214c1e6fc25d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var plan = getInputVal('plan');
    var course = getInputVal('course');
    
    
//Save message
saveMessage(firstName, lastName, email, plan, course);

// Show alert
  document.querySelector('.submitted').style.display = 'block';

// Hide alert after 5 sec
  setTimeout(function(){
    document.querySelector('.submitted').style.display = 'none';
  },5000);

// Clear form
  document.getElementById('contactForm').reset();

}




// Function to get form from values
function getInputVal(id){
    return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(firstName, lastName, email, plan, course){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstName:firstName,
        lastName:lastName,
        email:email,
        plan:plan,
        course:course
    });
}