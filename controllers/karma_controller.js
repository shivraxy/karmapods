var express = require("express");
var router = express.Router();

let karma = require("../models/karma.js");

router.get("/", function(request, response) {
    karma.home(function(data) {
        console.log('===============HOME=================' + data);
        var hbsObject = {
            data: data
        };
        response.render("index", hbsObject);
    });
});

router.get("/:id?", function(request, response) {
    console.log('========sending==================' + request.params.id);
    karma.comments(request.params.id, function(data) {
        console.log('================================' + data);
        var hbsObject = {
            data: data
        };
        response.render("comments", hbsObject);
    });
});


router.post("/api/cheer", function(request, response) {
    karma.insert(request.body.userName, request.body.message, request.body.peerName, request.body.imageLink, function(data) {
        var hbsObject = {
            cheer: data
        };
        response.render("index", hbsObject);
    });
});

router.post("/api/comment", function(request, response) {
    karma.insertcomment(request.body.activity_id, request.body.comment, function(data) {
        var hbsObject = {
            comment: data
        };
        response.render("comments", hbsObject);
    });
});


router.post("/api/user", function(request, response) {
    karma.insertuser(request.body.userName, request.body.email, request.body.image, function(data) {
        var hbsObject = {
            user: data
        };
        response.render("index", hbsObject);
    });
});

router.post("/api/vote", function(request, response) {
    karma.updatevote(request.body.activity_id, function(data) {
        var hbsObject = {
            vote: data
        };
        response.render("comments", hbsObject);
    });
});

module.exports = router;