var express = require('express');
var router = express.Router();
var request = require ('request');

var url = "http://server:3000/todos/";
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  request.get(url, function(err, response, body) {
    if (err) return next(err);
      res.send (body);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  request.post({url:url, json: req.body}, function(err, response, body) {
    if (err) return next(err);
      res.send (body);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  request.get(`${url}/${req.params.id}`, function(err, response, body) {
    if (err) return next(err);
      res.send (body);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  request.put({url:`${url}/${req.params.id}`, json: req.body}, function(err, response, body) {
    if (err) return next(err);
      res.send (body);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  request.del({url:`${url}/${req.params.id}`, json: req.body}, function(err, response, body) {
    if (err) return next(err);
      res.send (body);
  });
});

module.exports = router;
