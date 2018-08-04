// including all required 
const mongoose = require('mongoose');
const shortId = require('shortid');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerLib');
const inputValidator = require('../libs/paramsValidationLib');
const tokenLib = require('../libs/tokenLib');
const check = require('../libs/checkLib');
const passwordLib = require('../libs/generatePasswordLib');
const time = require('../libs/timeLib');



// including all models
const authModel = mongoose.model('Auth');
const userModel = mongoose.model('User');
const eventModel = mongoose.model('Event');

let addEvent = (req,res) =>{

 if(!req.body){
     let apiResponse = response.generate(true,'no info has been passed','404',null);
     res.send(apiResponse)
 }else{
    
    let newEvent = new eventModel({

        id:shortId.generate(),
        userId:req.body.userId,
        start:req.body.start,
        end:req.body.end,
        title:req.body.title,
        color:req.body.color,
        where:req.body.where,
        purpose:req.body.purpose,
        createdBy:req.body.createdBy

    })
    
    newEvent.save((err,result)=>{
        delete result.__v
            delete result._id
        if(err){

            let apiResponse = response.generate(true,'error while saving the event',404,null);
            res.send(apiResponse)

        }else if(check.isEmpty(result)){

            let apiResponse = response.generate(true,'empty result returned',404,null);
            res.send(apiResponse)

        }else{
                
            delete result.__v
            delete result._id
            let apiResponse = response.generate(false,'event has been created',200,result)
            res.send(apiResponse)
        }

    }) //  end of new event save

 }   


} // end of add Event


let getAllEventsOfUser = (req,res) =>{

    if(!req.params.userId){

        let apiResponse =  response.generate(true,'userId has not been provided',404,null);
        res.send(apiResponse)

    }else{
        eventModel.find({userId:req.params.userId})
        .select('-__v -_id -eventId -userId -color')
        .lean()
        .exec((err,result)=>{
            if(err){
                let apiResponse=response.generate(true,'error in searching',404,null);
                res.send(apiResponse)
            }else if(check.isEmpty(result)){
                let apiResponse=response.generate(true,'no such user exits',404,null);
                res.send(apiResponse)
            }else{
                let apiResponse = response.generate(false,'all user events found',200,result);
                res.send(apiResponse)
            }
        })
    }

} // end of getAllEvents of useret

let getAllEventsByDate = (req,res) =>{


eventModel.find({  $or:[ {userId:req.body.userId,start:new Date(req.body.start)} , {userId:req.body.userId,end:new Date(req.body.start)} ]   })
.lean()
.exec((err,result)=>{
    if(err){
        let apiResponse = response.generate(true,'unable to search',404,null)
        res.send(apiResponse)
    }else if(check.isEmpty(result)){
        let apiResponse = response.generate(true,'no events found',404,null);
        res.send(apiResponse)
    }else{
        let apiResponse = response.generate(false,'all details found successfully',200,result)
        res.send(apiResponse);
    }
})

} //  end of get all events by date


let editEvent = (req,res) =>{
    let options = req.body
    eventModel.update({id:req.body.id},options)
    .lean()
    .exec((err,result)=>{

        if(err){
            let apiResponse = response.generate(true,'error in updating',404,null)
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            let apiResponse = response.generate(true,'unable to update',null);
            res.send(apiResponse)
        }else{
            let apiResponse = response.generate(false,'update successfull',200,result)
            res.send(apiResponse);
        }

    })
} // end of edit event

let deleteEvent = (req,res)=>{
    
    eventModel.deleteOne({id:req.body.id})
    .lean()
    .exec((err,result)=>{

        if(err){
            let apiResponse = response.generate(true,'error in deleting',404,null);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            let apiResponse = response.generate(true,'unable to delet',404, null);
            res.send(apiResponse);
        }else{
            let apiResponse = response.generate(false,'deleted successfully',200,result);
            res.send(apiResponse);
        }       

    })
}

module.exports = {
    addEvent:addEvent,
    getAllEventsOfUser:getAllEventsOfUser,
    getAllEventsByDate:getAllEventsByDate,
    editEvent:editEvent,
    deleteEvent:deleteEvent
}