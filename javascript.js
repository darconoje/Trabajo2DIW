$("#topsPlataforma").show();
$("#topsGenero").hide();

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