$(document).ready(function() {
    console.log($('.wrapper'));
    console.log($('.firstSection'));
    console.log($('ul li.list_item:nth-child(3)'));
    //console.log($('a[href="https://www.wikipedia.org/"]')); lub jeżeli http musimy użyc poniższego
    console.log($('a[href*="wikipedia"]'));

});