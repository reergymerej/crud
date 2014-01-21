// import monk and mongodb
var mongodb = require('mongodb');
var monk = require('monk');

// connect to db
// use 'crud'
var db = monk('localhost:27017/crud');


exports.index = function (req, res) {
  // my items are called 'items'
  // select collection with monk
  var collection = db.get('items');

  // search for all of the items
  collection.find({}, function (err, docs) {

    if (!err) {
      res.render('./crud/index', {
        docs: docs
      });
    } else {
      console.log(err);
      res.end('error');
    }
  });
};

exports.view = function (req, res) {
  console.log(req.params);

  var collection = db.get('items');
  collection.findOne({ _id: req.params.id }, function (err, docs) {
    if (!err) {
      res.render('./crud/view', {
        doc: docs
      });
    } else {
      console.log(err);
      res.end(err);
    }
  });
};