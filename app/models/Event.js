const mongoose = require('mongoose');
Schema = mongoose.Schema;



let eventSchema = new Schema({


    id:{
        type:String,
        unique:true,
        default:''
    },
    userId:{
        type:String,
        default:' '
    },
    start:{
        type:String,  
        default:new Date()
    },
    end:{
        type:String,
        default:new Date()
    },
    title:{
        type:String,
        default:' '
    },
    color:{
        type:String,
        default:'black'
    },
    where:{
        type:String,
        default:'no info'
    },
    purpose:{
        type:String,
        default:'no info'
    },
    createdBy:{
        type:String,
        default:'Admin'
    }


})


module.exports = mongoose.model('Event', eventSchema)