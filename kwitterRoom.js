const firebaseConfig = {
  apiKey: "AIzaSyAS7zddejHlJsp2TiqWP15gDofs-BlgEmo",
  authDomain: "seu-carrinho-e8a7a.firebaseapp.com",
  databaseURL: "https://seu-carrinho-e8a7a-default-rtdb.firebaseio.com",
  projectId: "seu-carrinho-e8a7a",
  storageBucket: "seu-carrinho-e8a7a.appspot.com",
  messagingSenderId: "921568834449",
  appId: "1:921568834449:web:7c151fcbd3df00f8c72030"
};


firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function musk() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name: userName,
    like: 0,
    message: msg

  });

  document.getElementById("msg").value = "";
}

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
