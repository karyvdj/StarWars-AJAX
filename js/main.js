var cargarPagina = function () {
  cargarPersonajes();
};

var cargarPersonajes = function () {
  var url = "http://swapi.co/api/people/";
  $.get(url,function (response) {
    var personajes = response.results;
    var total = response.count;
    mostrarTotalPersonajes(total);
    mostrarPersonajes(personajes);
  });
};

var mostrarTotalPersonajes = function (total){
  $("#total").text(total);
}

var mostrarPersonajes = function (personajes) {
  var ul = $("#personajes");
  personajes.forEach(function (personaje) {
     var li = $("<li/>");
     li.text(personaje.name + " -  " + personaje.height);
     ul.append(li);
  });
}
$(document).ready(cargarPagina);

// -----------Metodo anterior $.ajax--------------
// var cargarPersonajes = function () {
//   $.ajax("http://swapi.co/api/people/",{
//     method: "GET",
//     dataType: "json",
//     success: function (response) {
//       var personajes = response.results;
//       $("#total").text(response.count);
//       var ul = $("#personajes");
//
//       personajes.forEach(function (personaje) {
//         var li = $("<li/>");
//         li.text(personaje.name + " -  " + personaje.height);
//         ul.append(li);
//       });
//     },
//     error: function (error) {
//       console.log("error", error);
//     }
//   });
// };
