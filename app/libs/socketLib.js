const socketio = require('socket.io');
const express = require('express');
const mongoose = require('mongoose');
const shortId = require('shortid');
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib');

const events = require('events');
const eventsEmitter = new events.EventEmitter();
const tokenLib = require('../libs/tokenLib');
const response = require('../libs/responseLib');
const nodeMailer = require('../libs/nodemailerLib')

// let arr = [];

// let setServer = (server) =>{

//     let io = socketio.listen(server);


//     let myIo = io.of('/');

    
//     myIo.on('connection',(socket)=>{
//         // console.log('connected'+socket.id);
        
//         socket.emit('sendUserId','hi');

//         socket.on('userId',(userId)=>{
//             socket.userId = userId
//             arr.push(socket);
//         })
//             socket.on('newEvent',(details)=>{
                
//                 for(let each of arr){
//                     if(each.userId==details.userId){
//                         myIo.to(each.id).emit('newEventAdded',details);
//                     }
//                 }

//             })
     
//             socket.on('eventEdited',(edetails)=>{
                
//                 for(let each of arr){
//                     if(each.userId==edetails.userId){
//                         myIo.to(each.id).emit('eventEdited',edetails);
//                     }
//                 }

//             })

            
//             socket.on('eventDeleted',(ddetails)=>{
                
//                 for(let each of arr){
//                     if(each.userId==ddetails.userId){
//                         myIo.to(each.id).emit('eventDeleted',ddetails);
//                     }
//                 }

//             })

//             socket.on('disconnect',()=>{
                
//                 console.log('disconnect');
//                 var removeIndex = arr.map(function(socket) { return socket; }).indexOf(socket);
//                  arr.splice(removeIndex,1)
                

//             })

//             socket.on('sendMail',(mailDetails)=>{
//                 nodeMailer.sendMail(mailDetails)
//             })

//     })

// }

// NEW SOCKEY CODE




let arr = []

let setServer = (server) =>{
    // let allOnlineUsers = []
    let io = socketio.listen(server);
    let myIo = io.of('')

    myIo.on('connection',(socket)=>{
        
        socket.emit('sendUserId','hi');

        socket.on('userId',(userId)=>{
                
            let abc = {
                userId:userId,
                socketid:socket.id
            }

            arr.push(abc);

                    }) //  end of userId

    socket.on('newEvent',(details)=>{
                
            for(let each of arr){
                if(each.userId == details.userId){
                    myIo.to(each.socketid).emit('newEventAdded',details);
                }
            }        

            }) //  end of new event

            socket.on('eventEdited',(details)=>{

                for(let each of arr){
                    if(each.userId == details.userId){
                        myIo.to(each.socketid).emit('eventEdited',details);
                    }
                }

            }) // end of edit event
            
            socket.on('eventDeleted',(details)=>{
                
                for(let each of arr){
                    if(each.userId == details.userId){
                        myIo.to(each.socketid).emit('eventDeleted',details);
                    }
                }

            }) // end of event deleted


            socket.on('sendMail',(mailDetails)=>{
                nodeMailer.sendMail(mailDetails)
            }) //  end of send mail

            

        socket.on('disconnect',()=>{
            
            console.log("user is disconnected");
            
            for(let each of arr){
                if(each.socketid == socket.id){
                    let index = arr.indexOf(each)
                    console.log(index);
                    arr.splice(index,1)
                    
                }
            }
            
        }) // end of disconnect
        


    })
}



// END OF NEW SOCKET CODE




module.exports={
    setServer : setServer
}


