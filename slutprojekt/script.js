let socket = io();

$(() => {
    $("send").click(() => {
            console.log("hej");
        });
})

///socket.on("medlem", addMedlem);

function getMedlem(){
    $.get("http://localhost:34739/medlem", (data) => {
        data.forEach(addMedlem);
    });
}

function postMedlem(medlem){
    $.post("http://localhost:34739/medlem", medlem);
}

function otherSite(){
    window.location.href = "http://localhost:34739/";
};

$(document).ready(function() {
    var button = $('#send');
    $(button).prop('disabled', true);

    $('#accept').click(function() {
        if ($(button).prop('disabled')) $(button).prop('disabled', false);
        else $(button).prop('disabled', true);
    });

});