var mongoose = require('mongoose');
var URLSlugs = require('mongoose-url-slugs');
var passportLocalMongoose = require('passport-local-mongoose');

/*var User = new mongoose.Schema({
  images:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
});

var Image = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  url: {type:String, required: true},
});*/

var User = new mongoose.Schema({
  lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});

//include grocery schemas here

var Item = new mongoose.Schema({
	//name:{type:String, required:true},
	//quantitiy:{type:Number, required:true},
	//checked:{type:Boolean, required:false},
	
	
	name: String,
	quantitiy: Number,
	checked:Boolean,

});

var List = new mongoose.Schema({
	/*//user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	name:{type:String, required:true},
	//createdBy:{type:String, required:true},
	createdBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	//items:[{type: mongoose.Schema.Types.ObjectId, ref:'Item'}],
	//name: String,
	//createdBy: String,
	items: [Item] //name, quantity, checked */
	user: [User],
	name:String,
	createdBy: String,
	items: [Item] //name, quantity, checked */
	
	
	
	
	
});

// NOTE: we're using passport-local-mongoose as a plugin
// our schema for user looks pretty thin... but that's because
// the plugin inserts salt, password and username
List.plugin(URLSlugs('name'));
User.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', User);
//module.exports = mongoose.model('Image', Image);
module.exports = mongoose.model('List', List);
module.exports = mongoose.model('Item', Item);

mongoose.connect('mongodb://localhost/userdb');
