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
    const form = document.getElementById('form2');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let formData = {
        //Individual
        name: document.getElementById('name').value ,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
  
      };
      submitData(formData);
    });
  });
  
  async function submitData(data) {
    try {
  
      const userCollection = firestore.collection('users');
      const snapshot = await userCollection.get();
      const users = snapshot.docs.map(doc => doc.data());
      let user = users.find(u => u.phone === data.phone);
    
      if (user) {
        alert('Phone number already exists');
        return;
      }
      // Add a new document with a generated id.
      await userCollection.add(data);
      // Show alert
      alert('Data saved successfully');
    } catch (error) {
      console.log("submitData = error:", error)
    }
  }
  