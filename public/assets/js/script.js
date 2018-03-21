let loggedinUser = "Guest";

$(function() {
    $("#addNew").on("click", function(event) {
        event.preventDefault();
        let imglink = "";
        if ($("#image").val().trim() === "")
            imglink = '\\assets\\images\\NoImageFound.png';
        else
            imglink = $("#image").val().trim();

        var newCheer = {
            userName: loggedinUser,
            peerName: $("#name").val().trim(),
            imageLink: imglink,
            message: $("#message").val().trim(),
        };

        $.ajax("/api/cheer", {
            type: "POST",
            data: newCheer,
        }).then(function() {
            console.log("created new cheer for Peer !!! ");
            location.reload();
        });
    });

    $("#addNewComment").on("click", function(event) {
        event.preventDefault();
        console.log(getUrlParameter('id'))
        console.log(parseInt($("#hidethissh").attr('value')))
        var newcomment = {
            activity_id: parseInt($("#hidethissh").attr('value')),
            comment: $("#comment").val().trim(),
        };

        $.ajax("/api/comment", {
            type: "POST",
            data: newcomment,
        }).then(function() {
            console.log("created new comment for Peer !!! ");
            location.reload();
        });
    });

    //comment if it doesnt work

    $("#addVote").on("click", function(event) {
        event.preventDefault();
        var addvote = {
            activity_id: parseInt($("#hidethissh").attr('value'))
        };

        $.ajax("/api/vote", {
            type: "POST",
            data: addvote,
        }).then(function() {
            location.reload();
        });
    });







})

$(".signout").on("click", function(event) {
    event.preventDefault();
    onSignOut();

});

$(".leftlist").on("click", function(event) {
    event.preventDefault();
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var idToken = googleUser.getAuthResponse().id_token;
    let url;

    $('#profilename').html('Welcome ' + profile.ofa)
    loggedinUser = profile.U3;

    var newUser = {
        userName: profile.ofa,
        email: profile.U3,
        image: profile.Paa
    };

    $.ajax("/api/user", {
        type: "POST",
        data: newUser,
    }).then(function() {});

}

function onSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};