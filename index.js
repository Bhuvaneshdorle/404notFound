const firebaseConfig = {
  apiKey: "AIzaSyDZ3yY7V4-n1dllJ0SlMiobPD8RI_U0ol0",
  authDomain: "notfound-c69e2.firebaseapp.com",
  databaseURL: "https://notfound-c69e2-default-rtdb.firebaseio.com",
  projectId: "notfound-c69e2",
  storageBucket: "notfound-c69e2.appspot.com",
  messagingSenderId: "783172064273",
  appId: "1:783172064273:web:5ff163577de51c19ca4db0",
  measurementId: "G-YMWN4S34JR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();


document.addEventListener('DOMContentLoaded', function () {
  const individualForm = document.getElementById('form1');
  const ngoForm = document.getElementById('form2');
  const hotelForm = document.getElementById('form3');

  individualForm?.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = {
      //Individual
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      food: document.getElementById('food').value,

    };
    submitIndividualData(formData);
  });

  ngoForm?.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = {
      //Individual
      name: document.getElementById('name').value,
      registrationNumber: document.getElementById('registration-no').value,
      legalStatus: document.getElementById('legal-status').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
    };
    submitNGOData(formData);
  });

  hotelForm?.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = {
      //Individual
      name: document.getElementById('name').value,
      fssai: document.getElementById('fssai').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      landmark: document.getElementById('landmark').value,
      food: document.getElementById('food').value,
    };
    submitIndividualData(formData);
  });

});

async function submitIndividualData(data) {
  try {

    const userCollection = firestore.collection('users');
    // Add a new document with a generated id.
    await userCollection.add(data);
    // Show alert
    alert('Data saved successfully');
  } catch (error) {
    console.log("submitData = error:", error)
  }
}

async function submitHotelData(data) {
  try {

    const userCollection = firestore.collection('hotel');
    // Add a new document with a generated id.
    await userCollection.add(data);
    // Show alert
    alert('Data saved successfully');
  } catch (error) {
    console.log("submitData = error:", error)
  }
}

async function submitNGOData(data) {
  try {

    const userCollection = firestore.collection('ngo');
    // Add a new document with a generated id.
    await userCollection.add(data);
    // Show alert
    alert('Data saved successfully');
  } catch (error) {
    console.log("submitData = error:", error)
  }
}