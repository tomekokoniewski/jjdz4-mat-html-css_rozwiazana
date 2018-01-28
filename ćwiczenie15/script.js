$(document).ready(
    function() {
        $('#button').click(
            function () {
                var formularz = $('#imie').val();
                $('#wyswietl').toggle();
                $('#wczytaj').css('display', 'inline');
                $("#wczytaj").text(formularz);

            })
    })