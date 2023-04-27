let socket = io();

$(() => {

    $("#send").click(() => {
        var medlem = {status:"Medlem", förnamn: $("#förnamn").val(), efternamn: $("#efternamn").val(), discord: $("#discord").val(), epost: $("#epost").val()};
        postMedlem(medlem);
        setTimeout(otherSite, 1);
    })  


    getMedlem();
})

socket.on("medlem", addMedlem);

function addMedlem(medlem){
    $("#medlem").append(`<h4> ${medlem.status} </h4> <p>Namn: ${medlem.förnamn} ${medlem.efternamn}, Discord id: ${medlem.discord}, Epost: ${medlem.epost} </p>`);
}

function getMedlem(){
    $.get("http://localhost:34739/medlem", (data) => {
        data.forEach(addMedlem);
    });
}

function postMedlem(medlem){
    $.post("http://localhost:34739/medlem", medlem);
}

function otherSite(){
    window.location.href = "http://localhost:34739/medlemmar.html";
};

$(document).ready(function() {
    var button = $('#send');
    $(button).prop('disabled', true);

    $('#accept').click(function() {
        if ($(button).prop('disabled')) $(button).prop('disabled', false);
        else $(button).prop('disabled', true);
    });

});