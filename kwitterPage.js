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

function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebaseMessageId = childKey;
                        messageData = childData;
                        //Início do código

                        //Fim do código
                  }
            });
      });
}
getData();
