define({ "api": [
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
        ]
      }
    },
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCustomerEndpoint.php",
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
          "title": "Example: Update both 'name' and 'description'",
          "content": "{\n    \"name\": \"Customer 1 - updated\",\n    \"description\": \"Customer 1 Description - updated\",\n}",
          "type": "Json"
        },
        {
          "title": "Example: Update 'name'.",
          "content": "{\n    \"name\": \"Customer 1 - updated\",\n}",
          "type": "Json"
        },
        {
          "title": "Example: Update 'description'.",
          "content": "{\n    \"description\": \"Customer 1 Description - updated\",\n}",
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
            "description": "<p>No 'Update' permissions for 'Time - Activity Info - Customers' data group</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCustomerEndpoint.php",
    "groupTitle": "Time"
  }
] });
