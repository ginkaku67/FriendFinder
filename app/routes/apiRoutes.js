var potentialBestFriendsForever = require("../data/potentialBestFriendsForever");

module.exports = function(app) {

    app.get("/api/potentialBestFriendsForever", function(req, res){
        res.json(potentialBestFriendsForever);
    });
    app.post("/api/potentialBestFriendsForever", function(req, res){
        var user = req.body;
        var bFF = {};
        var bestMatch = Infinity;
        potentialBestFriendsForever.forEach(function(friend) {
            var cohesion = 0;
            for (let i=0; i<friend.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
            cohesion += Math.abs(user.scores[i] - friend.scores[i]);
            }
            if (cohesion<bestMatch) {
            bestMatch = cohesion;
            bFF = friend;
            }
        });
        res.json({
            name: bFF.name,
            photo: bFF.photo
        });

        potentialBestFriendsForever.push(user)
    });
}