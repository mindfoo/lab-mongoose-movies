const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');



router.get('/movies/new', (req, res) => res.render('movies/new')); 

router.post('/movies/create', (req, res, next) => {
  const {title, genre, plt, cast} = req.body;

  const newMovie = new Celebrity({name, occupation, catchPhrase});
  
  newMovie.save()
  .then(()=> {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    next(error);
  });

});


module.exports = router;