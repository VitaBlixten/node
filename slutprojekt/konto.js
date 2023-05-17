var socket = io();
socket.on("login", redirect)

$(() => {

    $("#reg").click(() => {
        var konto = ({förnamn: $("#förnamn").val(), efternamn: $("#efternamn").val(), klass: $("#klass").val(), discord: $("#discord").val(), epost: $("#epost").val(), password: $("#lösenord").val()});
        postKonto(konto);
        setTimeout(sendSite, 10);
    });

    $("#lin").click(() => {
        var konto2 = ({epost: $("#epost2").val(), password: $("#password2").val()});
        postLogin(konto2);
    });


})

function redirect(){
    window.location.href = "http://localhost:34739/indexl.html";
  }

function postKonto(konton){
    $.post("http://localhost:34739/konton", konton);
}

function postLogin(login){
    $.post("http://localhost:34739/login", login);
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