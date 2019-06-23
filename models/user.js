var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//logininf0 schema
userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
    fullname: String,
	password: String,
	passwordConf: String,
	email_code:String,
	email_verified:Number,
	Date:String,
	ip:String,
	status:Number,
	
}),


User = mongoose.model('logininfo', userSchema);

module.exports = User;
