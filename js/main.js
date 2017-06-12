var cargarPagina = function () {
  cargarPersonajes();
};

var cargarPersonajes = function () {
  $.ajax("http://swapi.co/api/people/",{
    method: "GET",
    dataType: "json",
    success: function (response) {
      var personajes = response.results;
      $("#total").text(response.count);
      var ul = $("#personajes");

      personajes.forEach(function (personaje) {
        var li = $("<li/>");
        li.text(personaje.name + " -  " + personaje.height);
        ul.append(li);
      });
    },
    error: function (error) {
      console.log("error", error);
    }
  });
};

$(document).ready(cargarPagina);

// -----------Metodo anterior---------
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
