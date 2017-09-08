var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/workshop_3', { useMongoClient: true });

var topicSchema = mongoose.Schema({
    name: String,
    forum_id: { type: Schema.Types.ObjectId, ref: 'Forum' },
    tags: [String],
    comment_ids: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }
});
var userSchema = Schema({
    name: String
})
var commentSchema = Schema({
    name: String,
    comment: String,
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }
})
var forumSchema = Schema({
    name: String
})
var Topic = mongoose.model('Topic', topicSchema, 'topic');
var User = mongoose.model('User', userSchema, 'user');
var Comment = mongoose.model('Comment', userSchema, 'comment');
var Forum = mongoose.model('Forum', userSchema, 'forum');

Topic.find({_id: mongoose.Types.ObjectId("59a7d24b42bb762ab27cc4c3")}).
    populate('forum_id user_id comment_ids ').
    populate({
        path : "comment_ids",
            populate:{
                path: "user_id",
                model: "User"
            }
    }).
    exec(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(require('util').inspect(doc, false, null));
        }
    });

