define({ "api": [
  {
    "group": "planner",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/planner/:userId",
    "title": "to get all events of a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>(query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>(url params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\"error\": false,\n\"message\": \"all user events found\",\n\"status\": 200,\n\"data\": [\n    {\n        \"id\": \"EMU9aL8zs\",\n        \"start\": \"Wed Aug 01 2018 15:20:00 GMT+0530 (India Standard Time)\",\n        \"end\": \"Wed Aug 01 2018 15:15:00 GMT+0530 (India Standard Time)\",\n        \"title\": \"uff\",\n        \"where\": \"no info\",\n        \"purpose\": \"no info\",\n        \"createdBy\": \"Admin\"\n    },",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/plannerRoutes.js",
    "groupTitle": "planner",
    "name": "GetApiV1PlannerUserid"
  },
  {
    "group": "planner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/planner/addEvent",
    "title": "to add an event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>(query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "start",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "end",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": "<p>(body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"event has been created\",\n    \"status\": 200,\n    \"data\": {\n        \"id\": \"X7mnZHcTf\",\n        \"userId\": \"lL81mKYqg\",\n        \"start\": \"Wed Aug 01 2018 15:20:00 GMT+0530 (India Standard Time)\",\n        \"end\": \"Wed Aug 01 2018 15:15:00 GMT+0530 (India Standard Time)\",\n        \"title\": \"uff\",\n        \"color\": \"black\",\n        \"where\": \"no info\",\n        \"purpose\": \"no info\",\n        \"createdBy\": \"Admin\",\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/plannerRoutes.js",
    "groupTitle": "planner",
    "name": "PostApiV1PlannerAddevent"
  },
  {
    "group": "planner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/planner/deleteEvent",
    "title": "to delete a particular event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>(query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the event to be delete(body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/plannerRoutes.js",
    "groupTitle": "planner",
    "name": "PostApiV1PlannerDeleteevent"
  },
  {
    "group": "planner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/planner/editEvent",
    "title": "to edit a particular event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>(query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the event(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "options",
            "description": "<p>all the fields to edit (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"update successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 0,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/plannerRoutes.js",
    "groupTitle": "planner",
    "name": "PostApiV1PlannerEditevent"
  },
  {
    "group": "planner",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/planner/get/event/byDate",
    "title": "to get all events of a user by date.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>(query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start",
            "description": "<p>start date of the evemt (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\"error\": false,\n\"message\": \"all events found\",\n\"status\": 200,\n\"data\": [\n    {\n        \"id\": \"EMU9aL8zs\",\n        \"start\": \"Wed Aug 01 2018 15:20:00 GMT+0530 (India Standard Time)\",\n        \"end\": \"Wed Aug 01 2018 15:15:00 GMT+0530 (India Standard Time)\",\n        \"title\": \"uff\",\n        \"where\": \"no info\",\n        \"purpose\": \"no info\",\n        \"createdBy\": \"Admin\"\n    },",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/plannerRoutes.js",
    "groupTitle": "planner",
    "name": "PostApiV1PlannerGetEventBydate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/allUsers",
    "title": "api to get all normal users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"all users found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"3WRsctFZn\",\n            \"userType\": \"normal\",\n            \"firstName\": \"ankit\",\n            \"lastName\": \"anand\",\n            \"email\": \"ankit@gmail.com\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 123,\n            \"createdOn\": \"2018-07-29T08:01:01.000Z\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersAllusers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/getUser/:userId",
    "title": "api to get a user details using user ID.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Id. (URL params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"3WRsctFZn\",\n            \"userType\": \"normal\",\n            \"firstName\": \"ankit\",\n            \"lastName\": \"anand\",\n            \"email\": \"ankit@gmail.com\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 123,\n            \"createdOn\": \"2018-07-29T08:01:01.000Z\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetuserUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users//verify/:token",
    "title": "api to get a user details using password reset token.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>reset token. (URL params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user details found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"QTWguvRkA\",\n        \"userType\": \"admin\",\n        \"firstName\": \"test\",\n        \"lastName\": \"Admin\",\n        \"email\": \"test-admin@gmail.com\",\n        \"countryCode\": 91,\n        \"mobileNumber\": 123,\n        \"createdOn\": \"2018-08-03T14:37:13.000Z\",\n        \"PasswordResetToken\": \"pd-vRnsjy\",\n        \"PasswordResetExpiration\": \"2018-08-03T18:25:24.841Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersVerifyToken"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZGQiOiJWSDlrMUpUWnIiLCJpYXQiOjE1MzMzMDcyNTQzOTAsImV4cCI6MTUzMzM5MzY1NCwic3ViIjoiYXV0aFRva2VuIiwiaXNzIjoiZWRDaGF0IiwiZGF0YSI6eyJ1c2VySWQiOiJsTDgxbUtZcWciLCJ1c2VyVHlwZSI6Im5vcm1hbCIsImZpcnN0TmFtZSI6IkFua2l0IiwibGFzdE5hbWUiOiJBbmFuZCIsImVtYWlsIjoiYW5hYW5raXQ5OTJAZ21haWwuY29tIiwiY291bnRyeUNvZGUiOjkxLCJtb2JpbGVOdW1iZXIiOjg4ODQzODMxMzEsIlBhc3N3b3JkUmVzZXRUb2tlbiI6InBkLXZSbnNqeSIsIlBhc3N3b3JkUmVzZXRFeHBpcmF0aW9uIjoiMjAxOC0wOC0wM1QxODoyNToyNC44NDFaIn19.ScC_Lw4ktqdCLs7rcnQn2LYwe95YJDO2uViL1lYyusA\",\n        \"userDetails\": {\n            \"userId\": \"lL81mKYqg\",\n            \"userType\": \"normal\",\n            \"firstName\": \"Ankit\",\n            \"lastName\": \"Anand\",\n            \"email\": \"anaankit992@gmail.com\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 8884383131,\n            \"PasswordResetToken\": \"pd-vRnsjy\",\n            \"PasswordResetExpiration\": \"2018-08-03T18:25:24.841Z\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/singup",
    "title": "api for new user singup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>first Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "LastName",
            "description": "<p>last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userType",
            "description": "<p>userType of the user. (body params) (optional - only required to create an admin account)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"User Account successfully create\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"QTWguvRkA\",\n        \"userType\": \"admin\",\n        \"firstName\": \"test\",\n        \"lastName\": \"Admin\",\n        \"email\": \"test-admin@gmail.com\",\n        \"countryCode\": 91,\n        \"mobileNumber\": 123,\n        \"createdOn\": \"2018-08-03T14:37:13.000Z\",\n        \"PasswordResetToken\": \"\",\n        \"PasswordResetExpiration\": \"\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSingup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/update",
    "title": "api to update user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "options",
            "description": "<p>options to be update. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"update successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 0,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUpdate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/updatePassword",
    "title": "api to update a users password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passoword",
            "description": "<p>password of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"update successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 0,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUpdatepassword"
  }
] });
