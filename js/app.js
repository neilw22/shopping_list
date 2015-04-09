$(document).ready(function() {

function addItemtoList() {

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

            console.log(content);
            if (content == ('')) {
                alert("Please enter an item");
            }

            else {
            $('.list-items').append( li.append(inp) );
            $(".itemstoadd").val('');
            $('#default').hide();
            };
        };
        
$(".itemstoadd").keypress(function (e) {
        if (e.which == 13) {
            addItemtoList();
        }
    });

$(".add-items").click(function (e) {
    
            addItemtoList();
            
        });

$('.reset').click(function(event) {
	$('.list-items').empty();
    $('#default').fadeIn( "slow" );
    });

$('.email').click(function() {
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

});