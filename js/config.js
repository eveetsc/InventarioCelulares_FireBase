(function () {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAeVhDhrJRxeD3S_y3x4GIzy34zlrqs0Hs",
    authDomain: "webappssteeve.firebaseapp.com",
    databaseURL: "https://webappssteeve.firebaseio.com",
    storageBucket: "webappssteeve.appspot.com",
    messagingSenderId: "680840394178"
  };
  firebase.initializeApp(config);

  //////////
  const refSelect = document.getElementById('modelo');
  const ref = firebase.database().ref().child('modelos').child(0);
  $("#marca").change(function(e) {
      $("#modelo").html("<option selected=selected>Seleccione una opcion</option>");
      var idMarca = $(this).val();
      var refModelos = ref.child(idMarca);
      refModelos.on('child_added', function (snapshot) {
          var option = document.createElement('option');
          var price =  snapshot.val().Precio
          option.setAttribute("value", price);
          option.innerText = snapshot.val().modelo;
          refSelect.appendChild(option);
      });
      refModelos.on('child_changed', function (snapshot) {
          var option = document.createElement('option');
          var price =  snapshot.val().Precio
          option.setAttribute("value", price);
          option.innerText = snapshot.val().modelo;
          refSelect.appendChild(option);
      });
      refModelos.on('child_removed', function (snapshot) {
          var option = document.createElement('option');
          var price =  snapshot.val().Precio
          option.setAttribute("value", price);
          option.innerText = snapshot.val().modelo;
          refSelect.appendChild(option);
      });
  });




}());
function Total(){
    var n1=parseInt($("#precio").val());
    var n2=parseInt($("#cantidad").val());
    alert(n1*n2);
}

function getPrecio(el){
    $("#precio").val($(el).val());
}

