var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userdetailsSchema = new Schema({
	unique_id:Number,
	uid : String,
	country:String,
	currency:String,
	mobile:Number,
	company:String,
	position:String,
	status:String
}),


userdetails = mongoose.model('user_detail',userdetailsSchema);

module.exports = userdetails;