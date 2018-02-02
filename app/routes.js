var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route index page
router.get('/atp', function (req, res) {
  res.render('atp.html')
})


// Branching

router.get('/banking-test', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var openBanking = req.query.openBanking

  console.log(openBanking)

  if (openBanking === 'No') {
    // redirect to the relevant page
    res.redirect('/other-departments')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('banking')
  }
})

module.exports = router
