app.get("/api/:friends", function(req, res) {
    var fD= req.params.friendData;
    console.log(fD;
    for (var i = 0; i < friendData.length; i++) {
      if (fD=== friendData[i].customerID) {
        return res.json(friendData[i]);
      }
    }
    return res.json(false);
  });
  app.post("/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTableRes = req.body;
    // Using a RegEx Pattern to remove spaces from newTableRes
    newTableRes.customerID = newTableRes.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTableRes);
    friendData.push(newTableRes);
    res.json(newTableRes);
  });