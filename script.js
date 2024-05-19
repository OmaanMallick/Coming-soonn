let countDownDate = new Date("June 01, 2024 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// MainPage CountDown

let countDownnDate = new Date("June 01, 2024 00:00:00").getTime();
let xx = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dayss").innerHTML = days;
  document.getElementById("hourss").innerHTML = hours;
  document.getElementById("minutess").innerHTML = minutes;
  document.getElementById("secondss").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dayss").innerHTML = "00";
    document.getElementById("hourss").innerHTML = "00";
    document.getElementById("minutess").innerHTML = "00";
    document.getElementById("secondss").innerHTML = "00";
  }
}, 1000);

// FireBase

document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCvFEhfz3q9Xp4nPzVljyH63AOvfyfxtGQ",
    authDomain: "coming-soon-30034.firebaseapp.com",
    projectId: "coming-soon-30034",
    storageBucket: "coming-soon-30034.appspot.com",
    messagingSenderId: "805730875697",
    appId: "1:805730875697:web:7f9ead50ba96a8fe7a1810",
    measurementId: "G-FS432XWW02",
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();

  const email = document.getElementById("email");
  const submitbtn = document.getElementById("submitbtn");
  const errorMessage = document.getElementById("error-message");

  submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = email.value;

    if (!isValidEmail(text)) {
      errorMessage.style.display = "block";
      return;
    } else {
      errorMessage.style.display = "none";
    }

    db.collection("emails")
      .add({ text: text })
      .then(() => {
        // Open the default mail client with pre-filled recipient email
        window.location.href = `mailto:omaanmallick11@gmail.com?subject=Notify%20Me&body=Please%20notify%20me%20at%20${encodeURIComponent(
          text
        )}`;
        email.value = ""; // Clear the input field
      })
      .catch((error) => {
        alert("Error adding email: " + error.message);
      });
  });
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
