/*
$(document).ready(function() {
    $('#button').on('click', function() {
        // Tutaj powinna znaleźć się Twoja funkcja
    });
});
*/

$(document).ready(
    function() {
        $('#button').click(
            function () {
                $('#alert').css('background', 'green');
            })
    })