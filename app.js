function scrollWin() {
  window.scrollBy(0, 500);
}
const search = () => {
  let filter = document.querySelectorAll('#myInput')[0].value.toUpperCase();
  let a = document.querySelector(".lessons");
  let tr = a.querySelectorAll('li');
  
  let myTable = document.querySelectorAll('.lesson-icon');
 
  for (let i = 0; i < myTable.length; i++) {
    let p = myTable[i].querySelector('p');
    let textValue = p.textContent || p.innerHTML;

    if (textValue.toUpperCase().indexOf(filter) > -1 ) {
      tr[i].style.display = '';
    } else {
      tr[i].style.display = 'none';
    }
  }
}


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCRtooXgv2vIyT-S-VPlq3JCUXi794tZ74",
  authDomain: "my-project-87b76.firebaseapp.com",
  databaseURL: "https://my-project-87b76.firebaseio.com",
  projectId: "my-project-87b76",
  storageBucket: "my-project-87b76.appspot.com",
  messagingSenderId: "51854678787",
  appId: "1:51854678787:web:161ba6942052487f63a736"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form-inner").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".messageplace").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form-inner").reset();

  sendEmail(name, email, message);

  success();
}

function success(){
  status.classList.add("success");
  status.innerHTML = "Thanks";
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

//Send Email info
function sendEmail(name, email, message) {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "priyanshusingh.84495@gmail.com",
    Password : "lkaradvxbwuwvufg",
    To : 'priyanshusingh.84495@gmail.com',
    From : "priyanshusingh.84495@gmail.com",
    Subject : `${name} send you a message`,
    Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
}).then(e => alert("Thanks"))
}