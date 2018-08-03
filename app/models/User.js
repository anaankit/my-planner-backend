const mongoose = require('mongoose');
Schema = mongoose.Schema;

let userSchema =  new Schema({

    userId:{
        type:String,
        unique:true,
        index:true,
        default:''
    },
    userType:{
        type:String,
        default:'normal'
    },
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:'password'
    },
    email:{
        type:String,
        default:'',
        unique:true
    },
    countryCode:{
        type:Number,
        default:91
    },
    mobileNumber:{
        type:Number,
        default:0
    },
    createdOn:{
        type:Date,
        default:""
    },
    PasswordResetToken:{
        type:String,
        default:''
    },
    PasswordResetExpiration :{
        type:String,
        default:''
    }

})

mongoose.model('User',userSchema);