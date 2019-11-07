var pBFF = require("../data/potentialBestFriendsForever");

module.exports = function(app) {

    app.get("/api/potentialBestFriendsForever", function(req, res){
        res.json(pBFF);
    });
    app.post("/api/potentialBestFriendsForever", function(req, res){
        console.log("POST request at /api/potentialBestFriendsForever");
        var user = req.body;
        console.log(user);
        var bFF = {};
        var bestMatch = Infinity;
        pBFF.forEach(function(friend) {
            var cohesion = 0;
            for (let i=0; i<friend.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
            cohesion += Math.abs(user.scores[i] - friend.scores[i]);
            }
            console.log("compatibility: " + cohesion);
            if (cohesion<bestMatch) {
            bestMatch = cohesion;
            bFF = friend;
            }
        });
        res.json({
            photo: bFF.photo,
            name: bFF.name
        });

        pBFF.push(user)
    });
}