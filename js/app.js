$(document).ready(function() {

	$(function () {
    $(".itemstoadd").keypress(function (e) {
        if (e.which == 13) {
            var content = $(".itemstoadd").val();
            var li  = $('<li />', {
                    text : content
                }),
                inp = $('<input />', {
                    'class': 'check',
                    type   : 'checkbox',
                    on : {
                        change: function() {
                            if (this.checked) {
                                $(this).closest('li').wrapInner('<del />');
                            }else {
                                $(this).unwrap();
                            }
                        }
                    }
                });
            $('.list-items').append( li.append(inp) );
            $(".itemstoadd").val('');
            $('#default').hide();
        };
    });
});

	$(function () {
    $(".add-items").click(function (e) {
            var content = $(".itemstoadd").val();
            var li  = $('<li />', {
                    text : content
                }),
                inp = $('<input />', {
                    'class': 'check',
                    type   : 'checkbox',
                    on : {
                        change: function() {
                            if (this.checked) {
                                $(this).closest('li').wrapInner('<del />');
                            } else {
                                $(this).unwrap();
                            }
                        }
                    }
                });
                // console.log(content);
            $('.list-items').append( li.append(inp) );
            $(".itemstoadd").val('');
            $('#default').hide();
    });
});

$('.reset').click(function(event) {
	$('.list-items').empty();
    $('#default').fadeIn( "slow" );
});

// $('.email').click(function(event) {
// 	alert("Coming Soon!")
// });

$('.email').click(function() {
        
        
        
            // var name = $('#name').val();
            var email = $('#email').val();
            var list = $('.list-items').text();
            var varData = 'email=' + email + '&list=' + list;
            console.log(varData);
                
            $.ajax({
                type: "POST",
                url:'php.php',
                data: varData,
                success: function() {
                    alert("Email List Sent!");
                }
            
            });
        
        });


// $('.add-items').click(function(additem));

	// $('.add-items').click(function(event) {
	// 	event.preventDefault();
	// 	$( ".list-items" ).append( "<li>"+$('.itemstoadd').val()+"<input class='checkbox' type='checkbox'</i>"+"</li>");
	// 		$( '.itemstoadd').val('');

	// });

	// $('.itemstoadd').keypress(function(event) {
	// 	if (event.which==13) {
	// 		$( ".list-items" ).append( "<li>"+$('.itemstoadd').val()+"<input type='checkbox'</i>"+"</li>");
	// 			$( '.itemstoadd').val('');
	// 	};
	// })

	// $('.checkbox').click(function () {
	// 	$(this).find('li').addClass("crossed-off");
	// 		// $(this).addClass("crossed-off");
	// });

});