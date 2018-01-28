$(document).ready(function () {
    $.ajax({
        dataType: 'json',
        url: 'data/data.json',
        data: { get_param: 'subjects' },
        success: function (data) {
            console.log(data)
        }
    });
});