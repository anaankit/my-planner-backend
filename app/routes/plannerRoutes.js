const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const appConfig = require('../config/appconfig');
const userController = require('../controller/userController');
const authMiddleware = require('../middlewares/auth');
const plannerController = require('../controller/plannerController')


let setRouter = (app) =>{

    let baseURl = `${appConfig.apiVersion}/planner`;

    app.post(`${baseURl}/addEvent`,authMiddleware.isAuthorized,plannerController.addEvent)

    /**
   * @apiGroup planner
   * @apiVersion  1.0.0
   * @api {post} /api/v1/planner/addEvent to add an event
   * @apiParam {string} authToken (query params) (required)
   * @apiParam {string} title (body params) (required)
   * @apiParam {string} userId (body params) (required)
   * @apiparam {date} start (body params) (required)
   * @apiparam {date} end (body params) (required)
   * @apiparam {string} where (body params) (required)
   * @apiparam {string} purpose (body params) (required)
   * @apiparam {string} purpose (body params) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
     {
    "error": false,
    "message": "event has been created",
    "status": 200,
    "data": {
        "id": "X7mnZHcTf",
        "userId": "lL81mKYqg",
        "start": "Wed Aug 01 2018 15:20:00 GMT+0530 (India Standard Time)",
        "end": "Wed Aug 01 2018 15:15:00 GMT+0530 (India Standard Time)",
        "title": "uff",
        "color": "black",
        "where": "no info",
        "purpose": "no info",
        "createdBy": "Admin",
    }
}   
     
 */


    app.get(`${baseURl}/getEvents/:userId`,authMiddleware.isAuthorized,plannerController.getAllEventsOfUser)

    
    /**
   * @apiGroup planner
   * @apiVersion  1.0.0
   * @api {get} /api/v1/planner/:userId to get all events of a user.
   * @apiParam {string} authToken (query params) (required)
   * @apiParam {string} userid (url params) (required)
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
     {
    "error": false,
    "message": "all user events found",
    "status": 200,
    "data": [
        {
            "id": "EMU9aL8zs",
            "start": "Wed Aug 01 2018 15:20:00 GMT+0530 (India Standard Time)",
            "end": "Wed Aug 01 2018 15:15:00 GMT+0530 (India Standard Time)",
            "title": "uff",
            "where": "no info",
            "purpose": "no info",
            "createdBy": "Admin"
        },
     
 */

    app.post(`${baseURl}/get/event/byDate`,authMiddleware.isAuthorized,plannerController.getAllEventsByDate)

    
    /**
   * @apiGroup planner
   * @apiVersion  1.0.0
   * @api {post} /api/v1/planner/get/event/byDate to get all events of a user by date.
   * @apiParam {string} authToken (query params) (required)
   * @apiParam {string} email (body params) (required)
   * @apiParam {string} start start date of the evemt (body params) (required)
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
     {
    "error": false,
    "message": "all events found",
    "status": 200,
    "data": [
        {
            "id": "EMU9aL8zs",
            "start": "Wed Aug 01 2018 15:20:00 GMT+0530 (India Standard Time)",
            "end": "Wed Aug 01 2018 15:15:00 GMT+0530 (India Standard Time)",
            "title": "uff",
            "where": "no info",
            "purpose": "no info",
            "createdBy": "Admin"
        },
     
 */


    app.post(`${baseURl}/editEvent`,authMiddleware.isAuthorized,plannerController.editEvent)

    
    /**
   * @apiGroup planner
   * @apiVersion  1.0.0
   * @api {post} /api/v1/planner/editEvent to edit a particular event
   * @apiParam {string} authToken (query params) (required)
   * @apiParam {string} id id of the event(body params) (required)
   * @apiParam {any} options all the fields to edit (body params)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
     {
    "error": false,
    "message": "update successfull",
    "status": 200,
    "data": {
        "ok": 1,
        "nModified": 0,
        "n": 1
    }
}
     
 */


    app.post(`${baseURl}/deleteEvent`,authMiddleware.isAuthorized,plannerController.deleteEvent);

     /**
   * @apiGroup planner
   * @apiVersion  1.0.0
   * @api {post} /api/v1/planner/deleteEvent to delete a particular event
   * @apiParam {string} authToken (query params) (required)
   * @apiParam {string} id id of the event to be delete(body params) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
     {
    "error": false,
    "message": "deleted successfully",
    "status": 200,
    "data": {
        "ok": 1,
        "n": 1
    }
}
     
 */

    
}

module.exports = {
    setRouter:setRouter
}


