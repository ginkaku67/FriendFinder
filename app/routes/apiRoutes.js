var potentialBestFriends = require("../data/potentialBestFriends");

module.exports = function(app) {

    app.get("/api/potentialBestFriends", function(req, res){
        res.json(potentialBestFriends);
    });
    app.post("/api/potentialBestFriends", function(req, res){
        var user = req.body;
        var bFF = {};
        var bestMatch = 60;
        potentialBestFriends.forEach(function(friend) {
            var userScore = 0;
            for (var i=0; i<friend.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
            userScore += Math.abs(user.scores[i] - friend.scores[i]);
            }
            if (userScore<bestMatch) {
            bestMatch = userScore;
            bFF = friend;
            }
        });
        res.json({
            name: bFF.name,
            photo: bFF.photo
        });

        potentialBestFriends.push(user)
    });
}