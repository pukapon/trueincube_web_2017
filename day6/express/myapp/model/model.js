var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
    name: { type: String , required: true},
    desc: String,
    price: Number,
    photo: String,
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});
var categorySchema = mongoose.Schema({
    name: String,
    desc: String,
    photo: String,
})

module.exports = {
    Category: mongoose.model(
        'Category', categorySchema, 'category'),
    Menu: mongoose.model(
        'Menu', menuSchema, 'menu')
};
