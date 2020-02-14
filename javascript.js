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