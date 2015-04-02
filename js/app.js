$(document).ready(function() {

	$('.add-items').click(function(event) {
		event.preventDefault();
		$( ".list-items" ).append( "<li>"+$('.itemstoadd').val()+"<input type='checkbox'</i>"+"</li>");
			$( '.itemstoadd').val('');

	})

	$('.itemstoadd').keypress(function(event) {
		if (event.which==13) {
			$( ".list-items" ).append( "<li>"+$('.itemstoadd').val()+"<input type='checkbox'</i>"+"</li>");
				$( '.itemstoadd').val('');
		};
	})





});