$("#topsPlataforma").show();
$("#topsGenero").hide();

$("#pagina1").show();
$("#pagina2").hide();

$("#porGenero").click(function() {
   $("#topsPlataforma").hide();
   $("#topsGenero").show();
});

$("#porPlataforma").click(function() {
	$("#topsPlataforma").show();
	$("#topsGenero").hide();
});


$('[data-toggle="tooltip"]').tooltip();

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('#formRegistro').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();
});

$("#botonpg1").click(function() {
	$("#pagina1").show();
	$("#pagina2").hide();
});

$("#botonpg2").click(function() {
	$("#pagina1").hide();
	$("#pagina2").show();
});