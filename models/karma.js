var orm = require("../config/orm");
var karma = {

    home: function(cb) {
        orm.selectAll("karmaactivity", function(res) {
            cb(res);
        });
    },

    comments: function(id, cb) {
        orm.selectAllcomments(id, function(res) {
            cb(res);
        });
    },
    insert: function(col1, col2, col3, col4, cb) {
        orm.insert(col1, col2, col3, col4, function(res) {
            cb(res);
        });
    },
    insertuser: function(col1, col2, col3, cb) {
        orm.insertuser(col1, col2, col3, function(res) {
            cb(res);
        });
    },
    insertcomment: function(col1, col2, cb) {
        orm.insertcomment(col1, col2, function(res) {
            cb(res);
        });
    },
    updatevote: function(col1, cb) {
        orm.updatevote(col1, function(res) {
            cb(res);
        });
    },

    // update: function(col1, cb) {
    //     orm.updateOne(col1, function(res) {
    //         cb(res);
    //     });
    // }
}

module.exports = karma;