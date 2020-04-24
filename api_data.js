define({ "api": [
  {
    "type": "post",
    "url": "/api/common-activities",
    "title": "Common Activity - POST",
    "description": "<p>Creates a new Common Activity object</p>",
    "version": "1.0.0",
    "name": "AddCommonActivity",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the values of the Common Activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example 1",
          "content": "{\n    \"name\": \"Common Activity 1\" //required, max_len: 200 characters,\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the added Common Activity object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n     \"messages\": {\n         \"success\": \"Successfully Added\"\n     },\n     \"data\": {\n         \"name\": \"Common Activity 1\",\n         \"is_deleted\": \"0\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Save\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Create' permissions for 'Time - Activity Info - Common Activities' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCommonActivitiesEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "post",
    "url": "/api/customers",
    "title": "Customers - POST",
    "description": "<p>Creates a new Customer object</p>",
    "version": "1.0.0",
    "name": "AddCustomer",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the values of the Customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example 1",
          "content": "{\n    \"name\": \"Customer 1\" //required, max_len: 50 characters,\n    \"description\": \"Customer 1\" //max_len: 255 characters,\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the added Customer object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n     \"messages\": {\n         \"success\": \"Successfully Added\"\n     },\n     \"data\": {\n         \"customerId\": \"1\",\n         \"is_deleted\": \"0\",\n         \"name\": \"Customer 1\",\n         \"description\": \"Customer 1 Description\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Save\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Create' permissions for 'Time - Activity Info - Customers' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCustomersEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "post",
    "url": "/api/projects",
    "title": "Project - POST",
    "description": "<p>Creates a new Project object</p>",
    "version": "1.0.0",
    "name": "CreateProject",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the values of the Project</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example1",
          "content": "{\n    \"name\": \"Project 1\" //required, max_len: 50 characters,\n    \"description\": \"Project 1 Description\" //max_len: 255 characters,\n    \"customerId\": \"1\" //required,\n    \"status\": \"1\",\n    \"projectAdmins\": [\"1\", \"10\"],\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the updated Project object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n     \"messages\": {\n         \"success\": \"Successfully Updated\"\n     },\n     \"data\": {\n         \"projectId\": \"1\",\n         \"customerId\": \"1\",\n         \"is_deleted\": \"0\",\n         \"name\": \"Project 1 - updated\",\n         \"description\": \"Project 1 desc - updated\",\n         \"status\": \"1\",\n         \"projectAdmins\": [\n             {\n                 \"empNumber\": \"1\",\n                 \"employeeId\": \"EMP-ID-001\",\n                 \"firstName\": \"emp_firstname_1\",\n                 \"middleName\": \"emp_middle_name_1\",\n                 \"lastName\": \"emp_lastname_1\"\n             },\n             {\n                 \"empNumber\": \"10\",\n                 \"employeeId\": \"EMP-ID-010\",\n                 \"firstName\": \"emp_firstname_10\",\n                 \"middleName\": \"emp_middle_name_10\",\n                 \"lastName\": \"emp_lastname_10\"\n             }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Update\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Update' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectsEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "post",
    "url": "/api/projects/:id/activities",
    "title": "Project Activity - POST",
    "description": "<p>Creates a new Project Activity object</p>",
    "version": "1.0.0",
    "name": "CreateProjectActivity",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Project which the Project Activity should belong to</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the values of the Project Activity to be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example1",
          "content": "{\n    \"name\": \"Project 1 Activity 1\" //required, max_len: 200 characters,\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the updated Project object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n     \"data\": {\n         \"activityId\": \"1\",\n         \"projectId\": \"1\",\n         \"name\": \"Project 1 Activity 1 - updated\",\n         \"is_deleted\": \"0\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Save\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Update' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectActivitiesEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "delete",
    "url": "/api/common-activities",
    "title": "Common Activities - DELETE",
    "description": "<p>Delete Common Activities by sending an array of ids</p>",
    "version": "1.0.0",
    "name": "DeleteCommonActivities",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>object which contains ids of Common Activities to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n     'ids' : [1, 2, 3]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object with confirmation of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"data\":\n        {\n            \"success\":true\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Delete' permissions for 'Time - Activity Info - Common Activities' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCommonActivitiesEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "delete",
    "url": "/api/customers",
    "title": "Customers - DELETE",
    "description": "<p>Delete Customers by sending an array of ids</p>",
    "version": "1.0.0",
    "name": "DeleteCustomers",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>object which contains ids of Customers to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n     'ids' : [1, 2, 3]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object with confirmation of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"data\":\n        {\n            \"success\":true\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Delete' permissions for 'Time - Activity Info - Customers' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCustomersEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "delete",
    "url": "/api/projects/:id/activities",
    "title": "Project Activities - DELETE",
    "description": "<p>Delete Projects Activities by sending an array of ids</p>",
    "version": "1.0.0",
    "name": "DeleteProjectActivities",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Project which the deleted Project Activities belong to</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>object which contains ids of Project Activities to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n     'ids' : [1, 2, 3]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object with confirmation of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"data\":\n        {\n            \"success\":true\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Delete' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectActivitiesEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "delete",
    "url": "/api/projects",
    "title": "Projects - DELETE",
    "description": "<p>Delete Projects by sending an array of ids</p>",
    "version": "1.0.0",
    "name": "DeleteProjects",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>object which contains ids of Projects to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n     'ids' : [1, 2, 3]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object with confirmation of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"data\":\n        {\n            \"success\":true\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Delete' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectsEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/common-activities",
    "title": "Common Activities - GET",
    "description": "<p>Returns the list of Common Activities</p>",
    "version": "1.0.0",
    "name": "GetCommonActivities",
    "group": "Time",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>List of Common Activities objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n       {\n           \"activityId\": \"1\",\n           \"name\": \"Common Activity 1\",\n           \"is_deleted\": \"0\"\n       },\n       {\n           \"activityId\": \"2\",\n           \"name\": \"Common Activity 2\",\n           \"is_deleted\": \"0\"\n       },\n       {\n           \"activityId\": \"3\",\n           \"name\": \"Common Activity 3\",\n           \"is_deleted\": \"0\"\n       },\n   ],\n   \"meta\": {\n       \"total\": 3,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Create' permissions for 'Time - Activity Info - Common Activities' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCommonActivitiesEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/common-activities/:id",
    "title": "Common Activity - GET",
    "description": "<p>Returns the details of the Common Activity object having the given id</p>",
    "version": "1.0.0",
    "name": "GetCommonActivity",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Common Activity to be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Common Activity Details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": {\n         \"activityId\": \"1\",\n         \"name\": \"Common Activity 1\",\n         \"is_deleted\": \"0\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Read' permissions for 'Time - Activity Info - Common Activities' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCommonActivityEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/customers/:id",
    "title": "Customer - GET",
    "description": "<p>Returns the details of the Customer object having the given id</p>",
    "version": "1.0.0",
    "name": "GetCustomer",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Customer to be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Customer Details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": {\n         \"customerId\": \"1\",\n         \"is_deleted\": \"0\",\n         \"name\": \"Customer 1\",\n         \"description\": \"Customer 1 Description\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Read' permissions for 'Time - Activity Info - Customers' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCustomerEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/customers",
    "title": "Customers - GET",
    "description": "<p>Returns the list of Customers</p>",
    "version": "1.0.0",
    "name": "GetCustomers",
    "group": "Time",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>List of Customer objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n       {\n           \"customerId\": \"1\",\n           \"is_deleted\": \"0\",\n           \"name\": \"Customer 1\",\n           \"description\": \"Customer 1 Description\",\n       },\n       {\n           \"customerId\": \"2\",\n           \"is_deleted\": \"0\",\n           \"name\": \"Customer 2\",\n           \"description\": \"Customer 2 Description\",\n       },\n       {\n           \"customerId\": \"3\",\n           \"is_deleted\": \"0\",\n           \"name\": \"Customer 3\",\n           \"description\": \"Customer 3 Description\",\n       },\n   ],\n   \"meta\": {\n       \"total\": 3,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Read' permissions for 'Time - Activity Info - Customers' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCustomersEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/projects/:id",
    "title": "Project - GET",
    "description": "<p>Returns the details of the Project object having the given id</p>",
    "version": "1.0.0",
    "name": "GetProject",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Project to be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Project Details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": {\n         \"projectId\": \"1\",\n         \"customerId\": \"1\",\n         \"is_deleted\": \"0\",\n         \"name\": \"Project 1\",\n         \"description\": \"Project 1 desc\",\n         \"status\": \"1\",\n         \"projectAdmins\": [\n             {\n                 \"empNumber\": \"1\",\n                 \"employeeId\": \"EMP-ID-001\",\n                 \"firstName\": \"emp_firstname_1\",\n                 \"middleName\": \"emp_middle_name_1\",\n                 \"lastName\": \"emp_lastname_1\"\n             },\n             {\n                 \"empNumber\": \"10\",\n                 \"employeeId\": \"EMP-ID-010\",\n                 \"firstName\": \"emp_firstname_10\",\n                 \"middleName\": \"emp_middle_name_10\",\n                 \"lastName\": \"emp_lastname_10\"\n             }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Read' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/projects/:id/activities",
    "title": "Project Activities - GET",
    "description": "<p>Returns the list of Project Activities</p>",
    "version": "1.0.0",
    "name": "GetProjectActivities",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Project which the Project Activity belongs to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>List of Project Activity objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [{\n       \"activityId\": \"1\",\n       \"projectId\": \"1\",\n       \"name\": \"Project 1 Activity 1\",\n       \"is_deleted\": \"0\"\n  },\n  {\n       \"activityId\": \"1\",\n       \"projectId\": \"1\",\n       \"name\": \"Project 1 Activity 1\",\n       \"is_deleted\": \"0\"\n   }],\n   \"meta\": {\n       \"total\": 2,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Read' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectActivitiesEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/projects/:id/activities/:activityId",
    "title": "Project Activity - GET",
    "description": "<p>Returns the details of the Project Activity object having the given id and in the given project id</p>",
    "version": "1.0.0",
    "name": "GetProjectActivity",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Project which the Project Activity belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>id of the Project Activity to be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Project Activity Details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": {\n         \"activityId\": \"1\",\n         \"projectId\": \"1\",\n         \"name\": \"Project 1 Activity 1\",\n         \"is_deleted\": \"0\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Read' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectActivityEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/projects",
    "title": "Projects - GET",
    "description": "<p>Returns the list of Projects</p>",
    "version": "1.0.0",
    "name": "GetProjects",
    "group": "Time",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>List of Project objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [{\n       \"projectId\": \"1\",\n       \"customerId\": \"1\",\n       \"is_deleted\": \"0\",\n       \"name\": \"Project 1\",\n       \"description\": \"Project 1 desc\",\n       \"status\": \"1\",\n       \"projectAdmins\": [\n           {\n               \"empNumber\": \"1\",\n               \"employeeId\": \"EMP-ID-001\",\n               \"firstName\": \"emp_firstname_1\",\n               \"middleName\": \"emp_middle_name_1\",\n               \"lastName\": \"emp_lastname_1\"\n           },\n           {\n               \"empNumber\": \"10\",\n               \"employeeId\": \"EMP-ID-010\",\n               \"firstName\": \"emp_firstname_10\",\n               \"middleName\": \"emp_middle_name_10\",\n               \"lastName\": \"emp_lastname_10\"\n           }\n       ]\n  },\n  {\n       \"projectId\": \"2\",\n       \"customerId\": \"2\",\n       \"is_deleted\": \"0\",\n       \"name\": \"Project 2\",\n       \"description\": \"Project 2 desc\",\n       \"status\": \"1\",\n       \"projectAdmins\": [\n           {\n               \"empNumber\": \"3\",\n               \"employeeId\": \"EMP-ID-003\",\n               \"firstName\": \"emp_firstname_3\",\n               \"middleName\": \"emp_middle_name_3\",\n               \"lastName\": \"emp_lastname_3\"\n           }\n       ]\n   }],\n   \"meta\": {\n       \"total\": 2,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Read' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectsEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "patch",
    "url": "/api/common-activities/:id",
    "title": "Common Activity - PATCH",
    "description": "<p>Performs an update to the Common Activity object having the given id</p>",
    "version": "1.0.0",
    "name": "UpdateCommonActivity",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Common Activity to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the updated values of the Common Activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example 1: Update both 'name' and 'description'",
          "content": "{\n    \"name\": \"Customer 1 - updated\" //max_len: 200 characters,\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the updated Common Activity object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n     \"messages\": {\n         \"success\": \"Successfully Updated\"\n     },\n     \"data\": {\n         \"activityId\": \"1\",\n         \"name\": \"Common Activity 1 - updated\",\n         \"is_deleted\": \"0\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Update\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Update' permissions for 'Time - Activity Info - Common Activities' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCommonActivityEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "patch",
    "url": "/api/customers/:id",
    "title": "Customer - PATCH",
    "description": "<p>Performs an update to the Customer object having the given id</p>",
    "version": "1.0.0",
    "name": "UpdateCustomer",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Customer to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the updated values of the Customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example 1: Update both 'name' and 'description'",
          "content": "{\n    \"name\": \"Customer 1 - updated\" //max_len: 50 characters,\n    \"description\": \"Customer 1 Description - updated\" //max_len: 255 characters,\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the updated Customer object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n     \"messages\": {\n         \"success\": \"Successfully Updated\"\n     },\n     \"data\": {\n         \"customerId\": \"1\",\n         \"is_deleted\": \"0\",\n         \"name\": \"Customer 1 - updated\",\n         \"description\": \"Customer 1 Description - updated\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Update\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Update' permissions for 'Time - Activity Info - Customers' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeCustomerEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "patch",
    "url": "/api/projects/:id",
    "title": "Project - PATCH",
    "description": "<p>Performs an update to the Project object having the given id</p>",
    "version": "1.0.0",
    "name": "UpdateProject",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Project to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the updated values of the Project</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example1",
          "content": "{\n    \"name\": \"Project 1 - updated\" //max_len: 50 characters,\n    \"description\": \"Project 1 Description - updated\" //max_len: 255 characters,\n    \"customerId\": \"1\",\n    \"status\": \"1\",\n    \"projectAdmins\": [\"1\", \"10\"],\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the updated Project object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n     \"messages\": {\n         \"success\": \"Successfully Updated\"\n     },\n     \"data\": {\n         \"projectId\": \"1\",\n         \"customerId\": \"1\",\n         \"is_deleted\": \"0\",\n         \"name\": \"Project 1 - updated\",\n         \"description\": \"Project 1 desc - updated\",\n         \"status\": \"1\",\n         \"projectAdmins\": [\n             {\n                 \"empNumber\": \"1\",\n                 \"employeeId\": \"EMP-ID-001\",\n                 \"firstName\": \"emp_firstname_1\",\n                 \"middleName\": \"emp_middle_name_1\",\n                 \"lastName\": \"emp_lastname_1\"\n             },\n             {\n                 \"empNumber\": \"10\",\n                 \"employeeId\": \"EMP-ID-010\",\n                 \"firstName\": \"emp_firstname_10\",\n                 \"middleName\": \"emp_middle_name_10\",\n                 \"lastName\": \"emp_lastname_10\"\n             }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Update\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Update' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "patch",
    "url": "/api/projects/:id/activities/:activityId",
    "title": "Project Activity - PATCH",
    "description": "<p>Performs an update to the Project Activity object having the given id</p>",
    "version": "1.0.0",
    "name": "UpdateProjectActivity",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Project which the Project Activity belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "activityId",
            "description": "<p>id of the Project Activity to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Json Object containing the updated values of the Project Activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example1",
          "content": "{\n    \"name\": \"Project 1 Activity 1 - updated\" //max_len: 200 characters,\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing the updated Project object and messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n     \"data\": {\n         \"activityId\": \"1\",\n         \"projectId\": \"1\",\n         \"name\": \"Project 1 Activity 1 - updated\",\n         \"is_deleted\": \"0\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": " {\n     \"messages\": {\n         \"error\": \"Failed to Update\"\n     }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Returns an object containing all the validation errors</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No 'Update' permissions for 'Time - Activity Info - Projects' data group</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Object was not found</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectActivityEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "post",
    "url": "/api/project/:projectId/members",
    "title": "Project Members - POST",
    "description": "<p>Add Project Members</p>",
    "version": "1.0.0",
    "name": "addProjectMembers",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object with employee numbers to add as project members</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter",
          "content": "{\n     \"$memberIds\": [1, 2, 3],\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object with inserted project member data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n     \"messages\": {\n         \"success\": \"Successfully Saved\"\n     }\n}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Permission Required</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectMembersEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "delete",
    "url": "/api/project/:projectId/members",
    "title": "Project Members - DELETE",
    "description": "<p>Delete project members by project id and member ids</p>",
    "version": "1.0.0",
    "name": "deleteProjectMembers",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>object which contains employee numbers ids of members to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n        'memberIds' : [1, 2, 3],\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object with confirmation of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"data\":\n        {\n            \"success\":true\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectMembersEndpoint.php",
    "groupTitle": "Time"
  },
  {
    "type": "get",
    "url": "/api/project/:projectId/members?limit=:limit&offset=:offset",
    "title": "Project Members - GET",
    "description": "<p>Get Project Members for the project</p>",
    "version": "1.0.0",
    "name": "projectMembers",
    "group": "Time",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Starting point of the searched project member list</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of the data set returned</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing project member details which will be feed to the list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"data\": [\n         {\n             \"empNumber\": \"1\",\n             \"empName\": \"Britney T Reed\",\n             \"jobTitle\": \"SE\",\n             \"subUnit\": \"Department B\",\n             \"location\": \"Colombo\",\n         },\n         {\n             \"empNumber\": \"2\",\n             \"empName\": \"Abbie Campbell\",\n             \"jobTitle\": \"ASE\",\n             \"subUnit\": \"Department A\",\n             \"location\": \"New York\",\n         },\n         {\n             \"empNumber\": \"3\",\n             \"name\": \"Adam Oliver\",\n             \"jobTitle\": \"TL\",\n             \"subUnit\": \"Department A\",\n             \"location\": \"London\"\n         }\n     ],\n     \"meta\": {\n         totalCount: 3,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No view permission for Time Project data group</p>"
          }
        ]
      }
    },
    "filename": "orangehrmITWPTimePlugin/api/ITWPTimeProjectMembersEndpoint.php",
    "groupTitle": "Time"
  }
] });
