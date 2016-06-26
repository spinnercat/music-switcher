var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.username) {
    res.redirect("lobby");
  } else {
    res.render('index');
  }
});

router.post("/signin", function(req, res) {
  var username = req.body.username;
  req.session.username = username;

  res.redirect("/");
});

router.get('/lobby', function(req, res) {
  if (!req.session.username) {
    res.redirect("/");
  }

  res.render("lobby", {
    username: req.session.username,
    rooms: [{name: "Puppy Room"}, {name: "Corgi Room"}]
  });
});

module.exports = router;
