$(document).ready(function() {

	$('.add-items').click(function(event){
		event.preventDefault();
		$( ".list-items" ).append( "<li>"+$('.itemstoadd').val()+"</li>")
	})
	
	$('.itemstoadd').keypress(function(event) {
		if (event.which==13) {
			$( ".list-items" ).append( "<li>"+$('.itemstoadd').val()+"</li>")
		};
	})





});