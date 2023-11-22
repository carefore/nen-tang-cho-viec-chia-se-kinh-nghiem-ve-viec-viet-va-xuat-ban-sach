$(document).ready(function(){
    $('#bookForm').submit(function(e){
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'save.php',
            data: $(this).serialize(),
            success: function(response){
                $('#response').html(response);
                $('#bookForm')[0].reset();
            }
        });
    });
});
