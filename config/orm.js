var connection = require("./connection")

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "select ka.activity_id,substr(ku.name,1,20) name,substr(ka.peer_name,1,7) peer_name,ka.image,substr(ka.text,1,100) text,IFNULL(ka.votes,0) votes,count(1) comments from karma_db.karmaactivity ka inner join karma_db.karmauser ku on  ka.user_name = ku.email left join karma_db.karmacomments kc on ka.activity_id =kc.activity_id group by ka.activity_id,ku.name,ka.peer_name,ka.image,substr(ka.text,1,20),ka.votes order by votes,comments desc;"
        connection.query(queryString, [tableInput], function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    selectAllcomments: function(idValue, cb) {
        var queryString = "select ka.activity_id,comment,text,votes,peer_name,image,user_name,activitydate,name,photoPath from karma_db.karmacomments kc left outer join karma_db.karmaactivity ka on kc.activity_id=ka.activity_id inner join karma_db.karmauser ku on ka.user_name = ku.email and ka.activity_id=" + idValue + " order by comment_date desc;"
        connection.query(queryString, [idValue], function(err, result1) {
            var queryString = "select * from karma_db.karmaactivity where activity_id=" + idValue + ";"
            connection.query(queryString, [idValue], function(err, result2) {
                results = {
                    results1: result1,
                    results2: result2
                }

                if (err) throw err;
                cb(results);
            });
        });
    },
    insert: function(username, message, peer_name, image_link, cb) {
        var queryString = "insert into karma_db.karmaactivity(activitydate,user_name,text,peer_name,image) values(SYSDATE(),?,?,?,?)";
        connection.query(queryString, [username, message, peer_name, image_link], function(err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    insertuser: function(username, email, image, cb) {
        var queryString = "insert into karma_db.karmauser(name,email,photoPath) values(?,?,?)";
        connection.query(queryString, [username, email, image], function(err, results) {
            if (err) {
                console.log(err);
                if (err.code === 'ER_DUP_ENTRY') {
                    // Duplicate username
                    results = { succes: false, message: 'User already exist!' };
                } else throw err;
            }
            cb(results);
        })
    },
    insertcomment: function(activity_id, comment, cb) {
        var queryString = "insert into karma_db.karmacomments(activity_id,comment) values(?,?)";
        connection.query(queryString, [activity_id, comment], function(err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    updatevote: function(activity_id, cb) {
        var queryString = "update karma_db.karmaactivity set votes = IFNULL(votes,0)+1 where activity_id=" + activity_id + ";";
        connection.query(queryString, [activity_id], function(err, results) {
            if (err) throw err;
            cb(results);
        })
    }



    // updateOne: function(columnValue) {
    //     var queryString = "update burgers set devoured = 1 where burger_name = ?";
    //     connection.query(queryString, [columnValue], function(err, results) {
    //         if (err) throw err;
    //         console.log(results);
    //         return results;
    //     })
    // }
}

module.exports = orm;