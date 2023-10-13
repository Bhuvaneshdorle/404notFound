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

async function fetchDataFromDb() {
    const userCollection = firestore.collection('ngo');
    const snapshot = await userCollection.get();

    snapshot.docs.forEach(doc => {
        const docId = doc._delegate._key.path.segments[6]; // Retrieving the ID
        const userData = doc.data();
        AddItemToTable(userData, docId);
    });
}


function handleApply(event) {
    const shouldApply = confirm("Are you sure you want to apply?");
    if (shouldApply) {
        const docId = event.target.getAttribute('data-id');
        deleteFromFirebase(docId);
    }
}


async function deleteFromFirebase(docId) {
    try {
        await firestore.collection('ngo').doc(docId).delete();
        alert("Applied successfully!");
        location.reload();  
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

//filling the table
var srno = 0;
var tbody = document.getElementById('tbody1');
function AddItemToTable(payload, id) {
    const { name, registrationNumber, legalStatus, address, phone } = payload;
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');

    var td7 = document.createElement('td');
    var applyButton = document.createElement('button');
    applyButton.innerText = 'Apply';
    applyButton.setAttribute('data-id', id);
    applyButton.addEventListener('click', handleApply);
    td7.appendChild(applyButton);


    td1.innerHTML = ++srno;
    td2.innerHTML = name;
    td3.innerHTML = registrationNumber;
    td4.innerHTML = legalStatus;
    td5.innerHTML = address;
    td6.innerHTML = phone;


    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);

    tbody.appendChild(trow);
}

document.addEventListener('DOMContentLoaded', async function () {
    try {
        console.log("🚀 ~ file: table.html:124 ~ error:")
        await fetchDataFromDb();
    } catch (error) {
        console.log("🚀 ~ file: table.html:124 ~ error:", error)
    }
});