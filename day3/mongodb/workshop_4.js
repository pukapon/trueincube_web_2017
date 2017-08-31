var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/workshop_3';
MongoClient.connect(url, function(err, db) {
    db.collection('topic').findOne({}, function(err, item) {
        console.log(item)
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    db.collection('topic').find({}, function(err, item) {
        item.toArray(function(err, o){
            console.log(o)
        })
        db.close();
    });
});
