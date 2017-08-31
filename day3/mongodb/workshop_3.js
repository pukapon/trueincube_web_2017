use workshop_3

db.forum.createIndex({name:1},{unique:true});
db.user.createIndex({name:1},{unique:true});
var siliconvalley = db.forum.insertOne({name:"siliconvalley"}).insertedId;
var food = db.forum.insertOne({name:"food"}).insertedId;

var myuser = db.user.insertOne({name:"james"}).insertedId;
var meen = db.user.insertOne({name:"meen"}).insertedId;

var mytopic = db.topic.insertOne({name: "how to make sandwich?", user_id: myuser, forum_id: food, tags: ["sandwich","food","kitchen"]}).insertedId;
db.topic.insertOne({name: "angularJS tutorial", user_id: meen, forum_id: siliconvalley, tags: ["computer"]});
db.topic.insertOne({name: "mongodb tutorial", user_id: myuser, forum_id: siliconvalley, tags: ["computer"]});

var comment = db.comment.insertOne({ comment : "I don't know" , user_id: meen}).insertedId;
db.topic.updateOne({_id:mytopic}, { $push: { comment_ids: comment}})

var comment2 = db.comment.insertOne({ comment : "Thanks" , user_id: myuser}).insertedId;
db.topic.updateOne({_id:mytopic}, { $push: { comment_ids: comment2}})
