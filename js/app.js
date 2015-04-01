$(document).ready(function() {

	$('.add-items').click(function(event){
		event.preventDefault();
		$( ".list-items" ).append( "<li>"+$('.itemstoadd').val()+"</li>")


	})





});