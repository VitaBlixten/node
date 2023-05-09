
$(() => {

    $("#reg").click(() => {
        var konto = {förnamn: $("#förnamn").val(), efternamn: $("#efternamn").val(), klass: $("#klass").val(), discord: $("#discord").val(), epost: $("#epost").val(), password: $("#password").val()};
        postKonto(konto);
    })  

})

function postKonto(konton){
    $.post("http://localhost:34739/konton", konton);
}

$(document).ready(function() {
    var button = $('#reg');
    $(button).prop('disabled', true);

    $('#accept').click(function() {
        if ($(button).prop('disabled')) $(button).prop('disabled', false);
        else $(button).prop('disabled', true);
    });

});