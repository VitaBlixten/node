
$(() => {

    $("#reg").click(() => {
        var konto = ({förnamn: $("#förnamn").val(), efternamn: $("#efternamn").val(), klass: $("#klass").val(), discord: $("#discord").val(), epost: $("#epost").val(), password: $("#lösenord").val()});
        postKonto(konto);
        setTimeout(sendSite, 10);
    });

    $("#lin").click(() => {
        var konto = ({epost: $("#epost").val(), password: $("#lösenord").val()});

        sendSite()
    });


})

function postKonto(konton){
    $.post("http://localhost:34739/konton", konton);
}

function sendSite(){
    window.location.href = "http://localhost:34739/indexl.html";
};

$(document).ready(function() {
    var button = $('#reg');
    $(button).prop('disabled', true);

    $('#accept').click(function() {
        if ($(button).prop('disabled')) $(button).prop('disabled', false);
        else $(button).prop('disabled', true);
    });

});