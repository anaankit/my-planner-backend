const mongoose = require('mongoose');
const shortId = require('shortid');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerLib');
const inputValidator = require('../libs/paramsValidationLib');
const tokenLib = require('../libs/tokenLib');
const checkLib = require('../libs/checkLib');
const passwordLib = require('../libs/generatePasswordLib');
const time = require('../libs/timeLib');

var User = require('../models/User');
var Auth = require('../models/Auth');
var Event = require('../models/Event');


// including all models
const authModel = mongoose.model('Auth');
const userModel = mongoose.model('User');
const eventModel = mongoose.model('Event');
const nodeMailer = require('../libs/nodemailerLib')
const moment = require('moment')



let check = () =>{
console.log(moment().format() + ' '+' moment time here');
console.log(time.now()+ ' '+'js time here')

eventModel.find()
.exec((err,result)=>{
 

  let year = time.now();
  year = year.slice(0,4);

 let month = time.now();
   month = month.slice(6,7);

  let day = time.now();
  day=day.slice(9,10);

  let hour =  moment().format()
  hour = hour.slice(11,13);

  let minute = moment().format()
  minute = minute.slice(14,16);

  for (let each of result){

      if(year  == each.start.slice(0,4)){

        if(month == each.start.slice(6,7)){

         if(day == each.start.slice(9,10)){
            

          if(hour == each.start.slice(11,13)){
            
            let  a = each.start.slice(14,16);
              a = parseInt(a);

             let b = parseInt(minute);

              if(a-b == 1){

                userModel.find({userId:each.userId})
                .exec((err,result1)=>{
                   
                    let mailDetails = {
                        receiver:result1[0].email,
                        subject:'Event Schdule remainder',
                        html:`<p>Hi,</p><p>You Have an Event scheduled in 1 minute</p><h4>${each.title}</h4><br><p>${each.start}</p><br><p>TO</p><br><p>${each.end}</p>`
                      }
                  
                      nodeMailer.sendMail(mailDetails);
                                

                })

              }

          }
         
            
         }

        }

      } 
    
  }

})

setTimeout(() => {
  check();
}, 10000);

}



    // for(let each of result){
        
    //   if(moment(each.start).format('MM')==moment().format('MM')){

    //     if(moment(each.start).format('DD')==moment().format('DD')){

    //       if(moment(each.start).format('HH')==moment().format('HH')){

    //         let a = parseInt(moment(each.start).format('mm'))
    //          let b = parseInt(moment().format('mm'));
             
    //          if((a-b)==1){
    
    //             userModel.find({userId:each.userId})
    //             .exec((err,result1)=>{
    //                 console.log(result1);
    //                 let mailDetails = {
    //                     receiver:result1[0].email,
    //                     subject:'Event Schdule remainder',
    //                     html:`<p>Hi,</p><p>You Have an Event scheduled in 1 minute</p><h4>${each.title}</h4><br><p>${each.start}</p><br><p>TO</p><br><p>${each.end}</p>`
    //                   }
                  
    //                   nodeMailer.sendMail(mailDetails);
                                

    //             })
    
    //          }
    //       }

    //     }

    //   }
    // }



module.exports = {
    check:check
}