define({ "api": [
  {
    "parameter": {
      "examples": [
        {
          "title": "Employee Object-Example:",
          "content": "{\n    \"42\": {\n        \"emp_number\": \"42\",\n        \"job_category\": \"20\",\n        \"effective_date\": \"2018-11-14\",\n        \"event_name\": \"joined\",\n        \"remove_existing_supervisors\": true\n    },\n        \"54\": {\n        \"emp_number\": \"54\",\n        \"job_title\": \"1\",\n        \"effective_date\": \"2018-11-14\",\n        \"event_name\": \"joined\",\n        \"remove_existing_supervisors\": true\n    }\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\"messages\":{\"success\":\"Successfully Saved\"},\"updateCount\":1}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./orangehrmPimPlugin/api/EmployeeBulkUpdateEndpoint.php",
    "group": "/home/arunatebel/Documents/OrangeHRM/dev/html/OHRMStandalone/TEST/itwp/symfony/plugins/orangehrmPimPlugin/api/EmployeeBulkUpdateEndpoint.php",
    "groupTitle": "/home/arunatebel/Documents/OrangeHRM/dev/html/OHRMStandalone/TEST/itwp/symfony/plugins/orangehrmPimPlugin/api/EmployeeBulkUpdateEndpoint.php",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/jobTitles",
    "title": "JobTitle - Add",
    "description": "<p>Add Job Title</p>",
    "version": "1.0.0",
    "name": "addJobTitle",
    "group": "ADMIN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing job title data to be saved</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Object-Example:",
          "content": "{\n \"jobTitleName\": \"Accompanist\",\n \"jobDescription\": \"Accompanist Description\",\n \"note\": \"Accompanist Note\",\n \"currentJobSpecification\":\"keepCurrent\"\n \"jobSpecification\":\n     {\n         \"base64\":\"ClVQREFURSBgb2hybV9tZW51X2l0ZW1gIFNFVCBg\",\n         \"filename\": \"AccompanistAttachment.pdf\",\n         \"filesize\": \"1728\",\n         \"filetype\": \"application/pdf\"\n     }\n}",
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
            "description": "<p>Object containing inserted job title data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"data\": {\n   \"id\": \"1\",\n   \"jobTitleName\": \"Accompanist\",\n   \"jobDescription\": \"Accompanist Description\",\n   \"note\": \"Accompanist Note\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmAdminPlugin/modules/api/actions/jobTitlesAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "post",
    "url": "/api/nationality",
    "title": "Nationality - Add",
    "description": "<p>Add Nationality</p>",
    "version": "1.0.0",
    "name": "addNationality",
    "group": "ADMIN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object that contains nationality data (name) to be inserted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n\t\"name\":\"American\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object that contains newly added nationality data ( id, name )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n   \"id\": \"1\",\n   \"name\": \"American\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmAdminPlugin/modules/api/actions/nationalityAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "delete",
    "url": "/api/jobTitles",
    "title": "JobTitle - Delete",
    "description": "<p>Delete jobTitles by id list</p>",
    "version": "1.0.0",
    "name": "deleteJobTitle",
    "group": "ADMIN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing job title ids to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\"data\":[\"7\",\"6\",\"5\"]}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>Returns Nothing</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmAdminPlugin/modules/api/actions/jobTitlesAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "delete",
    "url": "/api/nationality",
    "title": "Nationality - Delete",
    "description": "<p>Delete Nationality</p>",
    "version": "1.0.0",
    "name": "deleteNationality",
    "group": "ADMIN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing nationality ids to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\"data\":[\"7\",\"6\",\"5\"]}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>Returns Nothing</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmAdminPlugin/modules/api/actions/nationalityAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "get",
    "url": "/api/jobTitles?limit=:limit&offset=:offset&sortingField=:sortingField&sortingOrder=:sortingOrder",
    "title": "JobTitle - Get",
    "description": "<p>Get JobTitles</p>",
    "version": "1.0.0",
    "name": "getJobTitles",
    "group": "ADMIN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortingField",
            "description": "<p>Sorting Field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortingOrder",
            "description": "<p>Sorting Order as ASC or DESC</p>"
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
            "description": "<p>Object contains 'data' and 'meta' fields. 'data' is an array of objects which contains Job Title data ( id, jobTitleName, jobDescription, note, isDeleted ). 'meta' is an object containing total number of records (total)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n \"data\": [\n     {\n         'id': '1',\n         'jobTitleName': 'Office Clerk',\n         'jobDescription': 'Office Clerk Description',\n         'note': 'Office Clerk Note',\n         'isDeleted': '0'\n     },\n     {\n         'id': '2',\n         'jobTitleName': 'Receptionist',\n         'jobDescription': 'Receptionist Description',\n         'note': 'Receptionist Note',\n         'isDeleted': '0'\n     },\n     {\n         'id': '3',\n         'jobTitleName': 'Office Assistant',\n         'jobDescription': 'Office Assistant Description',\n         'note': 'Office Assistant Note',\n         'isDeleted': '1'\n     },\n ],\n \"meta\": {\n     \"total\": 3\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmAdminPlugin/modules/api/actions/jobTitlesAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "get",
    "url": "/api/nationality",
    "title": "Nationality - Get",
    "description": "<p>Get Nationality</p>",
    "version": "1.0.0",
    "name": "getNationality",
    "group": "ADMIN",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object contains 'data' and 'meta' fields. 'data' is an array of objects which contains Nationality data ( id, name ). 'meta' is an object containing total number of records (total)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t  \"data\": [\n\t    {\n\t      \"id\": \"1\",\n\t      \"name\": \"Afghan\"\n\t    },\n\t    {\n\t      \"id\": \"2\",\n\t      \"name\": \"Albanian\"\n\t    },\n\t    {\n\t      \"id\": \"3\",\n\t      \"name\": \"Algerian\"\n\t    }\n\t  ],\n\t  \"meta\": {\n\t    \"total\": 3\n\t  }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmAdminPlugin/modules/api/actions/nationalityAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "patch",
    "url": "/api/jobTitles/:id",
    "title": "JobTitle - Update",
    "description": "<p>Update Job Titles</p>",
    "version": "1.0.0",
    "name": "updateJobTitles",
    "group": "ADMIN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the job title</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing job title data which need to be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n \"id\": \"1\",\n \"jobTitleName\": \"Accompanist\",\n \"jobDescription\": \"Accompanist Description\",\n \"note\": \"Accompanist Note\",\n \"currentJobSpecification\":\"keepCurrent\",\n \"jobSpecification\":\n     {\n         \"base64\":\"ClVQREFURSBgb2hybV9tZW51X2l0ZW1gIFNFVCBg\",\n         \"filename\": \"AccompanistAttachment.pdf\",\n         \"filesize\": \"1728\",\n         \"filetype\": \"application/pdf\"\n     }\n}",
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
            "description": "<p>Object containing success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"messages\": {\n   \"success\": \"Successfully Saved\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Permission Required</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>JobTitle Not Found</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmAdminPlugin/modules/api/actions/jobTitlesAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "patch",
    "url": "/api/nationality/:id",
    "title": "Nationality - Update",
    "description": "<p>Update Nationality</p>",
    "version": "1.0.0",
    "name": "updateNationality",
    "group": "ADMIN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Nationality's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object that contains nationality data (name) to be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n\t\tname:\"American\"\n}",
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
            "description": "<p>Object containing success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"messages\": {\n   \"success\": \"Successfully Saved\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request / Invalid data</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmAdminPlugin/modules/api/actions/nationalityAction.class.php",
    "groupTitle": "ADMIN"
  },
  {
    "type": "post",
    "url": "/api/employees",
    "title": "Employees - Add",
    "description": "<p>Add Employees and ESS user creation</p>",
    "version": "1.0.0",
    "name": "addEmployee",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing employee data to be added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Employee Object-Example:",
          "content": "    {\n\t        \"firstName\"  :  \"Jona\",\n\t        \"middleName\"  :  \"Emmanuel\",\n\t        \"lastName\"  :  \"Trotsky\",\n\t        \"chkLogin\"  :  true,\n\t        \"userName\"  :  \"jonathon\",\n\t        \"userPassword\"  :  \"admin\",\n\t        \"rePassword\"  :  \"admin\",\n\t        \"status\"  :  \"Enabled\",\n\t        \"employeeId\"  :  \"0010\",\n\t        \"locationId\"  :  \"2\",\n         \"essRoleId\" : \"2\",\n         \"supervisorRoleId\" : \"3\",\n         \"adminRoleId\" : \"20\"\n    }",
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
            "description": "<p>Object that contains inserted employee data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n   \"empNumber\": \"7\",\n   \"employeeId\": \"0010\",\n   \"firstName\": \"Jona\",\n   \"middleName\": \"Emmanuel\",\n   \"lastName\": \"Trotsky\",\n   \"nickName\": \"\",\n   \"smoker\": \"0\",\n   \"emp_gender\": null,\n   \"ssn\": \"\",\n   \"sin\": \"\",\n   \"otherId\": \"\",\n   \"licenseNo\": \"\",\n   \"emp_dri_lice_exp_date\": null,\n   \"militaryService\": \"\",\n   \"street1\": \"\",\n   \"street2\": \"\",\n   \"city\": \"\",\n   \"emp_zipcode\": null,\n   \"province\": \"\",\n   \"country\": \"\",\n   \"emp_hm_telephone\": null,\n   \"emp_mobile\": null,\n   \"emp_work_telephone\": null,\n   \"emp_work_email\": null,\n   \"emp_oth_email\": null,\n   \"ethnic_race_code\": null,\n   \"emp_birthday\": null,\n   \"nation_code\": null,\n   \"emp_marital_status\": null,\n   \"emp_status\": null,\n   \"job_title_code\": null,\n   \"eeo_cat_code\": null,\n   \"joined_date\": null,\n   \"work_station\": null,\n   \"sal_grd_code\": null,\n   \"added_date\": \"2017-08-31\",\n   \"has_work_week\": null,\n   \"termination_id\": null,\n   \"custom1\": null,\n   \"custom2\": null,\n   \"custom3\": null,\n   \"custom4\": null,\n   \"custom5\": null,\n   \"custom6\": null,\n   \"custom7\": null,\n   \"custom8\": null,\n   \"custom9\": null,\n   \"custom10\": null,\n   \"eeo_job_category\": null,\n   \"eeo_paygrade\": null,\n   \"eeo_race_ent\": null,\n   \"flsa_exempt\": null,\n   \"deleted_at\": null,\n   \"location\":\n     {\n       \"id\": \"2\",\n       \"name\": \"R&D Center\",\n       \"countryCode\": \"GB\",\n       \"time_zone\": \"Europe/London\",\n       \"province\": \"London\",\n       \"city\": \"London\",\n       \"address\": \"Stoke Street, #63-65, London.\",\n       \"zipCode\": \"23232\",\n       \"phone\": \"+91-85-655 66\",\n       \"fax\": \"+91-85-655 67\",\n       \"notes\": \"Located in London\",\n       \"eeo_applicable\": \"0\",\n     }\n   \"hasAccessiblePimTabs\": true\n },\n \"messages\": {\n   \"success\": \"Successfully Saved\"\n }\n}",
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
            "field": "Invalid",
            "description": "<p>Data</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Not allowed to add employees</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeesAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "post",
    "url": "/api/employees",
    "title": "Employee - Add",
    "description": "<p>Add Employee and ESS user creation</p>",
    "version": "1.0.0",
    "name": "addEmployee",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing employee data to be added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Employee Object-Example:",
          "content": "{\n     \"firstName\"  :  \"Jona\",\n     \"middleName\"  :  \"Emmanuel\",\n     \"lastName\"  :  \"Trotsky\",\n     \"chkLogin\"  :  true,\n     \"userName\"  :  \"jonathon\",\n     \"userPassword\"  :  \"admin\",\n     \"rePassword\"  :  \"admin\",\n     \"status\"  :  \"Enabled\",\n     \"employeeId\"  :  \"0010\",\n     \"locationId\"  :  \"2\",\n     \"essRoleId\" : \"2\",\n     \"supervisorRoleId\" : \"3\",\n     \"adminRoleId\" : \"20\"\n}",
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
            "description": "<p>Object that contains inserted employee data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n   \"empNumber\": \"7\",\n   \"employeeId\": \"0010\",\n   \"firstName\": \"Jona\",\n   \"middleName\": \"Emmanuel\",\n   \"lastName\": \"Trotsky\",\n   \"nickName\": \"\",\n   \"smoker\": \"0\",\n   \"emp_gender\": null,\n   \"ssn\": \"\",\n   \"sin\": \"\",\n   \"otherId\": \"\",\n   \"licenseNo\": \"\",\n   \"emp_dri_lice_exp_date\": null,\n   \"militaryService\": \"\",\n   \"street1\": \"\",\n   \"street2\": \"\",\n   \"city\": \"\",\n   \"emp_zipcode\": null,\n   \"province\": \"\",\n   \"country\": \"\",\n   \"emp_hm_telephone\": null,\n   \"emp_mobile\": null,\n   \"emp_work_telephone\": null,\n   \"emp_work_email\": null,\n   \"emp_oth_email\": null,\n   \"ethnic_race_code\": null,\n   \"emp_birthday\": null,\n   \"nation_code\": null,\n   \"emp_marital_status\": null,\n   \"emp_status\": null,\n   \"job_title_code\": null,\n   \"eeo_cat_code\": null,\n   \"joined_date\": null,\n   \"work_station\": null,\n   \"sal_grd_code\": null,\n   \"added_date\": \"2017-08-31\",\n   \"has_work_week\": null,\n   \"termination_id\": null,\n   \"custom1\": null,\n   \"custom2\": null,\n   \"custom3\": null,\n   \"custom4\": null,\n   \"custom5\": null,\n   \"custom6\": null,\n   \"custom7\": null,\n   \"custom8\": null,\n   \"custom9\": null,\n   \"custom10\": null,\n   \"eeo_job_category\": null,\n   \"eeo_paygrade\": null,\n   \"eeo_race_ent\": null,\n   \"flsa_exempt\": null,\n   \"deleted_at\": null,\n   \"location\":\n     {\n       \"id\": \"2\",\n       \"name\": \"R&D Center\",\n       \"countryCode\": \"GB\",\n       \"time_zone\": \"Europe/London\",\n       \"province\": \"London\",\n       \"city\": \"London\",\n       \"address\": \"Stoke Street, #63-65, London.\",\n       \"zipCode\": \"23232\",\n       \"phone\": \"+91-85-655 66\",\n       \"fax\": \"+91-85-655 67\",\n       \"notes\": \"Located in London\",\n       \"eeo_applicable\": \"0\",\n     }\n   \"hasAccessiblePimTabs\": true\n },\n \"messages\": {\n   \"success\": \"Successfully Saved\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request / Invalid Data</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Not allowed to add employees</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmPimPlugin/api/EmployeesEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "post",
    "url": "/api/employees/:empNumber/employeeAttachments",
    "title": "EmployeeAttachment - Add",
    "description": "<p>Add Employee Attachment</p>",
    "version": "1.0.0",
    "name": "addEmployeeAttachment",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing employee attachment data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n\t\"screen\":\"qualifications\",\n\t\"description\":\"Added via postman\",\n\t\"filename\":{\n\t\t\"filename\":\"tesddt.txt\",\n\t\t\"filetype\":\"text/plain\",\n\t\t\"filesize\":300,\n\t\t\"base64\":\"c2QKeASjafewo324324tyr......\"\n\t},\n\t\"empNumber\":\"1\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing newly added employee attachment data and success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"messages\": {\n   \"success\": \"Successfully Saved\"\n },\n \"data\": {\n   \"emp_number\": \"1\",\n   \"attach_id\": \"4\",\n   \"size\": \"3\",\n   \"description\": \"Added via postman\",\n   \"filename\": \"tesddt.txt\",\n   \"file_type\": \"text/plain\",\n   \"screen\": \"qualifications\",\n   \"attached_by\": null,\n   \"attached_by_name\": \"Admin\",\n   \"attached_time\": \"2017-08-31 14:19:37\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request / Attachment size exceeds</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No create permission for qualifications_attachment data group</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeeAttachmentsAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "delete",
    "url": "/api/employees/:emp_number",
    "title": "Employee - Delete",
    "description": "<p>Delete Employee by empNumber</p>",
    "version": "1.0.0",
    "name": "deleteEmployee",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emp_number",
            "description": "<p>Employee's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>Returns Nothing</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>You are not allowed to delete the specified employee</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmPimPlugin/api/EmployeeEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "delete",
    "url": "/api/employees/:empNumber/employeeAttachments",
    "title": "EmployeeAttachment - Delete",
    "description": "<p>Delete Employee Attachment</p>",
    "version": "1.0.0",
    "name": "deleteEmployeeAttachment",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emp_number",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>object which contains EmployeeAttachment Ids to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\"data\":[\"6\",\"5\"]}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>Returns Nothing</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No delete permission for qualifications_attachment data group</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeeAttachmentsAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "delete",
    "url": "/api/employees",
    "title": "Employees - Delete",
    "description": "<p>Delete Employees by empNumber Array</p>",
    "version": "1.0.0",
    "name": "deleteEmployees",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object contains empNumbers of the Employees to delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "    {\n\t\t\t 'data' : [\"1\",\"2\"]\n    };",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Not allowed to delete the specified employees</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeesAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "delete",
    "url": "/api/employees",
    "title": "Employees - Delete",
    "description": "<p>Delete Employees by empNumber Array</p>",
    "version": "1.0.0",
    "name": "deleteEmployees",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object contains empNumbers of the Employees to delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\"data\":[\"1\",\"2\"]}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>Returns Nothing</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Not allowed to delete the specified employees</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmPimPlugin/api/EmployeesEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "delete",
    "url": "/api/employees/:emp_number/job/history",
    "title": "JobRecordHistory - Delete",
    "description": "<p>Delete Employee Job History</p>",
    "version": "1.0.0",
    "name": "deleteJobRecordHistory",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object contains job record history version numbers to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\"data\":[\"7\",\"6\",\"5\"]}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>Returns Nothing</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmPimPlugin/api/EmployeeJobHistoryEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees/:emp_number/job?include=:includeParams",
    "title": "JobRecord - Get",
    "description": "<p>Get Employee JobRecord</p>",
    "version": "1.0.0",
    "name": "employeeJobAction",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "includeParams",
            "description": "<p>Additional Parameters of Employee as a comma separated string. <br/><br/>(i.e WorkShift)</p>"
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
            "field": "data",
            "description": "<p>Current JobRecord of the Employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Without-Include:",
          "content": "{\n      \"data\": {\n          \"employee_number\": \"1\",\n          \"joined_date\": \"2017-08-01\",\n         \"probation_end_date\": \"2017-08-21\",\n          \"date_of_permanency\": \"2017-08-30\",\n          \"job_title_id\": null,\n          \"employment_status_id\": null,\n          \"job_category_id\": \"7\",\n         \"subunit_id\": null,\n          \"location_id\": \"1\",\n          \"effective_date\": \"2017-08-30\",\n          \"event_name\": \"error_correction\",\n          \"comment\": null,\n         \"has_contract_details\": \"1\",\n         \"contract_start_date\": \"2017-08-21\",\n         \"contract_end_date\": \"2017-08-30\",\n         \"contract_details\": null,\n         \"work_shift_id\": null,\n         \"cost_centre_id\": null,\n        \"eeo_job_category\": null,\n         \"flsa_exempt\": null,\n        \"version\": \"4\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Success-Response-WorkShift-Included:",
          "content": "{\n      \"data\": {\n          \"employee_number\": \"1\",\n          \"joined_date\": \"2017-08-01\",\n         \"probation_end_date\": \"2017-08-21\",\n          \"date_of_permanency\": \"2017-08-30\",\n          \"job_title_id\": null,\n          \"employment_status_id\": null,\n          \"job_category_id\": \"7\",\n         \"subunit_id\": null,\n          \"location_id\": \"1\",\n          \"effective_date\": \"2017-08-30\",\n          \"event_name\": \"error_correction\",\n          \"comment\": null,\n         \"has_contract_details\": \"1\",\n         \"contract_start_date\": \"2017-08-21\",\n         \"contract_end_date\": \"2017-08-30\",\n         \"contract_details\": null,\n         \"work_shift_id\": null,\n         \"cost_centre_id\": null,\n         \"eeo_job_category\": null,\n         \"flsa_exempt\": null,\n         \"version\": \"4\",\n         \"WorkShift\": {\n             \"id\": \"1\",\n             \"name\": \"Day\",\n             \"hoursPerDay\": \"8.00\",\n             \"start_time\": \"09:00:00\",\n             \"end_time\": \"17:00:00\"\n         }\n      }\n  }",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Permission Required</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Job Record not found for Employee empNumber</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmPimPlugin/api/EmployeeJobEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees/:emp_number?include=:includeParams&filter",
    "title": "Employee - Get",
    "description": "<p>Get Employee</p>",
    "version": "1.0.0",
    "name": "getEmployee",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emp_number",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "includeParams",
            "description": "<p>Additional Parameters of Employee as a comma separated string. <br/><br/>(i.e /api/employees/:empNumber?include=supervisors,subordinates)<br/><br>(Supported Include Parameters are supervisors, subordinates, dependents, emergencyContacts, EmployeeImmigrationRecord, workExperience, education, skills, languages, EmployeeLicense, JobRecord, EmployeeTerminationRecord, SalaryRecord, SalaryHistoryRecord, EmployeeSalaryComponent, EmployeeMembership, DirectDepositRecord)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>Only supported filter is includePurged = 1 which will return available employee data for purged employees</p>"
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
            "description": "<p>Object containing employee data for the requested employee number (empNumber)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n   \"empNumber\": \"2\",\n   \"employeeId\": \"0002\",\n   \"firstName\": \"Flynn\",\n   \"middleName\": \"Richie\",\n   \"lastName\": \"Johnson\",\n   \"nickName\": \"\",\n   \"smoker\": \"0\",\n   \"emp_gender\": \"1\",\n   \"ssn\": \"US2353232\",\n   \"sin\": \"\",\n   \"otherId\": \"DX55342\",\n   \"licenseNo\": \"QAS1212545\",\n   \"emp_dri_lice_exp_date\": \"2017-08-31\",\n   \"militaryService\": \"\",\n   \"street1\": \"Brook Place\",\n   \"street2\": \"123\",\n   \"city\": \"Vienna\",\n   \"emp_zipcode\": \"324321\",\n   \"province\": \"Tyrol\",\n   \"country\": \"AT\",\n   \"emp_hm_telephone\": \"+98-5858-6965\",\n   \"emp_mobile\": \"+98-4745-6965\",\n   \"emp_work_telephone\": \"+98-1278-6965\",\n   \"emp_work_email\": \"flynn@xenterprise.aud\",\n   \"emp_oth_email\": \"flynn@gmail.com\",\n   \"ethnic_race_code\": null,\n   \"emp_birthday\": \"1991-08-22\",\n   \"nation_code\": \"11\",\n   \"emp_marital_status\": \"Single\",\n   \"emp_status\": null,\n   \"job_title_code\": null,\n   \"eeo_cat_code\": null,\n   \"joined_date\": null,\n   \"work_station\": null,\n   \"sal_grd_code\": null,\n   \"added_date\": \"2017-08-31\",\n   \"has_work_week\": \"0\",\n   \"termination_id\": null,\n   \"custom1\": null,\n   \"custom2\": null,\n   \"custom3\": null,\n   \"custom4\": null,\n   \"custom5\": null,\n   \"custom6\": null,\n   \"custom7\": null,\n   \"custom8\": null,\n   \"custom9\": null,\n   \"custom10\": null,\n   \"eeo_job_category\": null,\n   \"eeo_paygrade\": null,\n   \"eeo_race_ent\": null,\n   \"flsa_exempt\": null,\n   \"deleted_at\": null,\n   \"locations\": [\n     {\n       \"id\": \"2\",\n       \"name\": \"R&D Center\",\n       \"countryCode\": \"GB\",\n       \"time_zone\": \"Europe/London\",\n       \"province\": \"London\",\n       \"city\": \"London\",\n       \"address\": \"Stoke Street, #63-65, London.\",\n       \"zipCode\": \"23232\",\n       \"phone\": \"+91-85-655 66\",\n       \"fax\": \"+91-85-655 67\",\n       \"notes\": \"Located in London\",\n       \"eeo_applicable\": \"0\",\n       \"EmpLocations\": [\n         {\n           \"empNumber\": \"2\",\n           \"locationId\": \"2\"\n         }\n       ]\n     }\n   ]\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTPS/1.1 400 BadRequest\n{\"errors\":[{\n     \"title\":\"Invalid parameters\",\n     \"details\":\"Invalid includes [<requested_invalid_param_name>]\"\n     }]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./orangehrmPimPlugin/api/EmployeeEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees/:empNumber/employeeAttachments/:screen",
    "title": "EmployeeAttachment - Get",
    "description": "<p>Get Employee Attachments</p>",
    "version": "1.0.0",
    "name": "getEmployeeAttachments",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen",
            "description": "<p>PIM Screen Name (i.e qualifications)</p>"
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
            "description": "<p>Object containing two fields (data, meta). Data is an array of objects filled with employee attachment data. Meta is an object which contains max file size for attachments (maximumFileSize)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": [\n   {\n     \"emp_number\": \"1\",\n     \"attach_id\": \"4\",\n     \"size\": \"0\",\n     \"description\": \"Advanced Level Results Sheet\",\n     \"filename\": \"AdvancedLevelResults.pdf\",\n     \"file_type\": \"application/pdf\",\n     \"screen\": \"qualifications\",\n     \"attached_by\": \"1\",\n     \"attached_by_name\": \"George Clooney\",\n     \"attached_time\": \"2017-08-31 14:27:33\"\n   },\n   {\n     \"emp_number\": \"1\",\n     \"attach_id\": \"5\",\n     \"size\": \"0\",\n     \"description\": \"Referees of College affiliations\",\n     \"filename\": \"Affiliations.docx\",\n     \"file_type\": \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\",\n     \"screen\": \"qualifications\",\n     \"attached_by\": \"1\",\n     \"attached_by_name\": \"George Clooney\",\n     \"attached_time\": \"2017-08-31 14:28:12\"\n   },\n   {\n     \"emp_number\": \"1\",\n     \"attach_id\": \"6\",\n     \"size\": \"0\",\n     \"description\": \"Degree Certificate issued by the university\",\n     \"filename\": \"DegreeCertificate.pdf\",\n     \"file_type\": \"application/pdf\",\n     \"screen\": \"qualifications\",\n     \"attached_by\": \"1\",\n     \"attached_by_name\": \"George Clooney\",\n     \"attached_time\": \"2017-08-31 14:28:43\"\n   }\n ],\n \"meta\": {\n   \"maximumFileSize\": 1048576\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No read permission for 'screen_attachment' data group</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeeAttachmentsAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees/:empNumber/CustomFieldValues?filter[screen]=:screenName&groupedBySection=:groupedBySection",
    "title": "CustomFieldValue - Get",
    "description": "<p>Get Employee CustomFieldValue</p>",
    "version": "1.0.0",
    "name": "getEmployeeCustomFieldValue",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screenName",
            "description": "<p>Screen Name<br/><br/>(i.e contactDetails)<br/><br/> Supported Screen Names are personal, contact, emergency, dependents , immigration, job , salary, report-to , qualifications, membership, tax</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "groupedBySection",
            "description": "<p>As true for values to group by section</p>"
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
            "description": "<p>Object containing custom field values</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n   \"title\": \"Social Media\",\n   \"values\": [\n     {\n       \"id\": \"1\",\n       \"lable\": \"Facebook URL\",\n       \"customFieldId\": \"1\",\n       \"valueType\": \"1\",\n       \"sequenceNumber\": \"13\",\n       \"fieldType\": \"text\",\n       \"type\": \"0\",\n       \"mandatory\": false,\n       \"customFieldDisplayCondition\": {\n         \"id\": {},\n         \"customFieldId\": \"1\",\n         \"parentCustomFieldId\": {},\n         \"parentCustomFieldValue\": {},\n         \"required\": {}\n       },\n       \"unmodifiedExtraData\": \"\",\n       \"extraData\": [],\n       \"value\": \"www.fb.com/kaylaAbbey\"\n     },\n     {\n       \"id\": \"2\",\n       \"lable\": \"Twitter URL\",\n       \"customFieldId\": \"2\",\n       \"valueType\": \"1\",\n       \"sequenceNumber\": \"14\",\n       \"fieldType\": \"text\",\n       \"type\": \"0\",\n       \"mandatory\": false,\n       \"customFieldDisplayCondition\": {\n         \"id\": {},\n         \"customFieldId\": \"2\",\n         \"parentCustomFieldId\": {},\n         \"parentCustomFieldValue\": {},\n         \"required\": {}\n       },\n       \"unmodifiedExtraData\": \"\",\n       \"extraData\": [],\n       \"value\": \"www.t.co/kaylaAbbey\"\n     }\n   ],\n   \"id\": \"1\"\n },\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmPimPlugin/api/EmployeeCustomFieldValuesEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees/:empNumber/CustomFieldValue?filter[screen][action]=:screenName&filter[screen][module]=:moduleName",
    "title": "CustomFieldValue - Get",
    "description": "<p>Get Employee CustomFieldValue</p>",
    "version": "1.0.0",
    "name": "getEmployeeCustomFieldValue",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screenName",
            "description": "<p>Screen Name<br/><br/>(i.e contactDetails)<br/><br/> Supported Screen Names are personal, contact, emergency, dependents , immigration, job , salary, report-to , qualifications, membership, tax</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "moduleName",
            "description": "<p>Module Name (i.e pim)</p>"
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
            "description": "<p>Object containing custom field values</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": {\n   \"title\": \"Social Media\",\n   \"values\": [\n     {\n       \"id\": \"1\",\n       \"lable\": \"Facebook URL\",\n       \"customFieldId\": \"1\",\n       \"valueType\": \"1\",\n       \"sequenceNumber\": \"13\",\n       \"fieldType\": \"text\",\n       \"type\": \"0\",\n       \"mandatory\": false,\n       \"customFieldDisplayCondition\": {\n         \"id\": {},\n         \"customFieldId\": \"1\",\n         \"parentCustomFieldId\": {},\n         \"parentCustomFieldValue\": {},\n         \"required\": {}\n       },\n       \"unmodifiedExtraData\": \"\",\n       \"extraData\": [],\n       \"value\": \"www.fb.com/kaylaAbbey\"\n     },\n     {\n       \"id\": \"2\",\n       \"lable\": \"Twitter URL\",\n       \"customFieldId\": \"2\",\n       \"valueType\": \"1\",\n       \"sequenceNumber\": \"14\",\n       \"fieldType\": \"text\",\n       \"type\": \"0\",\n       \"mandatory\": false,\n       \"customFieldDisplayCondition\": {\n         \"id\": {},\n         \"customFieldId\": \"2\",\n         \"parentCustomFieldId\": {},\n         \"parentCustomFieldValue\": {},\n         \"required\": {}\n       },\n       \"unmodifiedExtraData\": \"\",\n       \"extraData\": [],\n       \"value\": \"www.t.co/kaylaAbbey\"\n     }\n   ],\n   \"id\": \"1\"\n },\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeeCustomFieldsAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees?include=:includeParams",
    "title": "Employees - Get",
    "description": "<p>Get Accessible Employees of the logged in user</p>",
    "version": "1.0.0",
    "name": "getEmployees",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "includeParams",
            "description": "<p>Additional Parameters of Employee as a comma separated string. <br/><br/>(i.e /api/employees/:empNumber?include=supervisors,jobTitle)<br/><br/> (Supported include Parameters are supervisors, jobTitle, subDivision, locations, employeeStatus, workShift, fullSubUnitHierarchy, costCentre, workweek, jobCategory, JobRecord, CustomFieldValues)</p>"
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
            "description": "<p>Object containing two attributes, data and meta. 'data' contains array of objects filled with employee details. 'meta' contains two fields (total - total number of employees filtered, nextEmployeeId - auto suggested employee id for next employee)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"data\": [\n   {\n     \"empNumber\": \"1\",\n     \"firstName\": \"Kayla\",\n     \"lastName\": \"Abbey\",\n     \"middleName\": \"Richie\",\n     \"termination_id\": null,\n     \"employeeId\": \"0001\",\n     \"joinedDate\": null,\n     \"deletedEmployee\": false,\n     \"jobCategory\": 1,\n     \"CustomFieldValues\": [{\n         CustomField: {\n             \"id\": 1,\n             \"name\": \"Custom Dropdown\",\n             \"unique_name\": \"job.standard_other.job.details.dropdown\",\n             \"global\": 1,\n             \"extra_data\": \"1,2,3\",\n             \"deleted\": 0,\n             \"deletable\": 1\n             \"custom_field_section_id\": 1,\n             \"advance_type_map\": \"\",\n             \"display_order\": 1,\n             \"mandatory\": 1\n         },\n          \"id\": \"16\",\n          \"value_type\": \"1\",\n          \"string_value\": \"1\",\n          \"text_value\": \"\",\n          \"number_value\": \"\",\n          \"date_value\": \"\",\n          \"version\": \"5\",\n          \"sequence_number\": \"536\",\n          \"value_type_field\": \"string_value\"\n     }]\n   },\n   {\n     \"empNumber\": \"2\",\n     \"firstName\": \"George\",\n     \"lastName\": \"Clooney\",\n     \"middleName\": \"\",\n     \"termination_id\": null,\n     \"employeeId\": \"0002\",\n     \"joinedDate\": null,\n     \"deletedEmployee\": false,\n     \"jobCategory\": 1,\n     \"CustomFieldValues\": [{\n         CustomField: {\n             \"id\": 2,\n             \"name\": \"Custom Checkbox\",\n             \"unique_name\": \"job.standard_other.job.details.checkbox\",\n             \"global\": 1,\n             \"extra_data\": \"A,B,C\",\n             \"deleted\": 0,\n             \"deletable\": 1\n             \"custom_field_section_id\": 1,\n             \"advance_type_map\": \"\",\n             \"display_order\": 1,\n             \"mandatory\": 1\n         },\n          \"id\": \"17\",\n          \"value_type\": \"1\",\n          \"string_value\": \"A\",\n          \"text_value\": \"\",\n          \"number_value\": \"\",\n          \"date_value\": \"\",\n          \"version\": \"5\",\n          \"sequence_number\": \"2\",\n          \"value_type_field\": \"string_value\"\n     }]\n   },\n   {\n     \"empNumber\": \"3\",\n     \"firstName\": \"Jonathan\",\n     \"lastName\": \"Trotsky\",\n     \"middleName\": \"Emmanuel\",\n     \"termination_id\": null,\n     \"employeeId\": \"0003\",\n     \"joinedDate\": null,\n     \"deletedEmployee\": false,\n     \"jobCategory\": 1,\n     \"CustomFieldValues\": {}\n   }\n ],\n \"meta\": {\n   \"total\": \"3\",\n   \"nextEmployeeId\": \"0004\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTPS/1.1 400 BadRequest\n{\"errors\":[{\n     \"title\":\"Invalid parameters\",\n     \"details\":\"Invalid includes [<requested_invalid_param_name>]\"\n     }]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeesAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees?include=:includeParams&filter[:filterType]=:filterValue",
    "title": "Employees - Get",
    "description": "<p>Get Accessible Employees of the logged in user</p>",
    "version": "1.0.0",
    "name": "getEmployees",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "includeParams",
            "description": "<p>Additional Parameters of Employee as a comma separated string. <br/><br/> i.e. <br/>/api/employees?include=supervisors,jobTitle<br/><br/> (Supported include Parameters are 'supervisors', 'jobTitle', 'subDivision', 'locations', 'employeeStatus', 'workShift', 'fullSubUnitHierarchy', 'costCentre','workweek', 'jobCategory', 'JobRecord', 'CustomFieldValues')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filterType",
            "description": "<p>Filter types are used to filter employee list. <br/><br/> i.e. <br/>/api/employees?filter[termination]=1<br/>/api/employees?filter[includeDeleted]=1<br/>/api/employees?filter[employee_id_list][0]=4&amp;filter[employee_id_list][1]=6<br/>/api/employees?filter[employee_name_or_id]=6<br/>/api/employees?filter[permissionType]=goals<br/><br/> (Supported filter types are 'termination', 'includeDeleted', 'employee_id_list', 'employee_name_or_id', 'permissionType')</p>"
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
            "description": "<p>Object containing two attributes, 'data' and 'meta'. 'data' contains array of objects filled with employee details. 'meta' contains two fields (total - total number of employees filtered, nextEmployeeId - auto suggested employee id for next employee)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"data\": [\n   {\n     \"empNumber\": \"1\",\n     \"firstName\": \"Kayla\",\n     \"lastName\": \"Abbey\",\n     \"middleName\": \"Richie\",\n     \"termination_id\": null,\n     \"employeeId\": \"0001\",\n     \"joinedDate\": null,\n     \"deletedEmployee\": false,\n     \"jobCategory\": 1\n   },\n   {\n     \"empNumber\": \"2\",\n     \"firstName\": \"George\",\n     \"lastName\": \"Clooney\",\n     \"middleName\": \"\",\n     \"termination_id\": null,\n     \"employeeId\": \"0002\",\n     \"joinedDate\": null,\n     \"deletedEmployee\": false,\n     \"jobCategory\": 1\n   },\n   {\n     \"empNumber\": \"3\",\n     \"firstName\": \"Jonathan\",\n     \"lastName\": \"Trotsky\",\n     \"middleName\": \"Emmanuel\",\n     \"termination_id\": null,\n     \"employeeId\": \"0003\",\n     \"joinedDate\": null,\n     \"deletedEmployee\": false,\n     \"jobCategory\": 1\n   }\n ],\n \"meta\": {\n   \"total\": \"3\",\n   \"nextEmployeeId\": \"0004\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTPS/1.1 400 BadRequest\n{\"errors\":[{\n     \"title\":\"Invalid parameters\",\n     \"details\":\"Invalid includes [<requested_invalid_param_name>]\"\n     }]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./orangehrmPimPlugin/api/EmployeesEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "get",
    "url": "/api/employees/:emp_number/job/history",
    "title": "JobRecordHistory - Get",
    "description": "<p>Get Employee Job History</p>",
    "version": "1.0.0",
    "name": "getJobRecordHistory",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emp_number",
            "description": "<p>Employee's unique ID</p>"
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
            "description": "<p>Object containing all job record history data for a employee under data, and any custom fields defined in the &quot;Job Other Details&quot; section under meta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"data\": [\n   {\n     \"employee_number\": \"1\",\n     \"job_title_id\": null,\n     \"employment_status_id\": null,\n     \"job_category_id\": \"7\",\n     \"joined_date\": \"2017-08-01\",\n     \"probation_end_date\": \"2017-08-21\",\n     \"date_of_permanency\": \"2017-08-30\",\n     \"effective_date\": \"2017-08-30\",\n     \"event_name\": \"error_correction\",\n     \"subunit_id\": null,\n     \"location_id\": \"1\",\n     \"comment\": null,\n     \"has_contract_details\": \"1\",\n     \"contract_start_date\": \"2017-08-21\",\n     \"contract_end_date\": \"2017-08-30\",\n     \"work_shift_id\": null,\n     \"version\": \"2\",\n     \"modified_time\": null,\n     \"modified_by_id\": null,\n     \"modified_by_name\": null,\n     \"job_title\": null,\n     \"cost_centre_id\": null,\n     \"cost_centre\": null,\n     \"eeo_job_category\": null,\n     \"flsa_exempt\": null,\n     \"employment_status\": null,\n     \"job_category\": \"Craft Workers\",\n     \"subunit\": null,\n     \"location\": \"HQ\",\n     \"workshift\": null,\n     \"job-standard.other_job_details.text_field\": \"Testing\",\n     \"job-standard.other_job_details.drop_down_field\": \"Green\",\n   },\n   {\n     \"employee_number\": \"1\",\n     \"job_title_id\": null,\n     \"employment_status_id\": null,\n     \"job_category_id\": \"7\",\n     \"joined_date\": \"2017-08-01\",\n     \"probation_end_date\": \"2017-08-20\",\n     \"date_of_permanency\": \"2017-08-30\",\n     \"effective_date\": \"2017-08-30\",\n     \"event_name\": \"contract_renewal\",\n     \"subunit_id\": null,\n     \"location_id\": \"1\",\n     \"comment\": null,\n     \"has_contract_details\": \"1\",\n     \"contract_start_date\": \"2017-08-21\",\n     \"contract_end_date\": \"2017-08-30\",\n     \"work_shift_id\": null,\n     \"version\": \"1\",\n     \"modified_time\": null,\n     \"modified_by_id\": null,\n     \"modified_by_name\": null,\n     \"job_title\": null,\n     \"cost_centre_id\": null,\n     \"cost_centre\": null,\n     \"eeo_job_category\": null,\n     \"flsa_exempt\": null,\n     \"employment_status\": null,\n     \"job_category\": \"Craft Workers\",\n     \"subunit\": null,\n     \"location\": \"HQ\",\n     \"workshift\": null,\n     \"job-standard.other_job_details.text_field\": null,\n     \"job-standard.other_job_details.drop_down_field\": null,\n   }\n ],\n \"meta\" : {\n   \"customFields\": [\n     {\n       \"id\": \"1\",\n       \"custom_field_section_id\": \"1\",\n       \"name\": \"Text Field\",\n       \"unique_name\": \"job-standard.other_job_details.text_field\",\n       \"type\": \"0\",\n       \"extra_data\": \"\",\n       \"display_order\": \"1\",\n       \"mandatory\": true,\n       \"global\": true,\n       \"deletable\": true,\n       \"deleted\": false,\n       \"advance_type_map\": null\n     },\n     {\n       \"id\": \"2\",\n       \"custom_field_section_id\": \"1\",\n       \"name\": \"Drop Down Field\",\n       \"unique_name\": \"job-standard.other_job_details.drop_down_field\",\n       \"type\": \"1\",\n       \"extra_data\": \"Red,Yellow,Blue,Green,Purple,Orange\",\n       \"display_order\": \"2\",\n       \"mandatory\": false,\n       \"global\": true,\n       \"deletable\": true,\n       \"deleted\": false,\n       \"advance_type_map\": null\n     },\n   ]\n }\n}",
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
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmPimPlugin/api/EmployeeJobHistoryEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "put",
    "url": "/api/employees/:empNumber/CustomFieldValues",
    "title": "CustomFieldValue - Replace",
    "description": "<p>Replace Employee CustomFieldValue</p>",
    "version": "1.0.0",
    "name": "replaceEmployeeCustomFieldValue",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing custom field value data which needs to be replaced</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{ \"section\":\"1\",\n  \"values\":\n     [{\n         \"custom_field_id\":\"1\",\n         \"type\":\"0\",\"value\":\"asdasda\",\n         \"extra_data\":\"\"\n     }]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": "<p>Success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Unsupported Resource Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmPimPlugin/api/EmployeeCustomFieldValuesEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "patch",
    "url": "/api/employees/:emp_number",
    "title": "Employee - Update",
    "description": "<p>Update Employee</p>",
    "version": "1.0.0",
    "name": "updateEmployee",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emp_number",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing properties of the Employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n\t\"firstName\":\"Flynn\",\n\t\"middleName\":\"Richie\",\n\t\"lastName\":\"Johnsons\",\n\t\"otherId\":\"DX55342\",\n\t\"emp_gender\":\"1\",\n\t\"emp_marital_status\":\"Single\",\n\t\"nation_code\":\"11\",\n\t\"licenseNo\":\"QAS1212545\",\n\t\"employeeId\":\"0002\",\n\t\"ssn\":\"US2353232\",\n\t\"emp_birthday\":\"1991-08-22\",\n\t\"emp_dri_lice_exp_date\":\"2017-08-31\"\n}",
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
            "description": "<p>Object containing success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"messages\": {\n   \"success\": \"Successfully Saved\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request / Invalid Data</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
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
    "filename": "./orangehrmPimPlugin/api/EmployeeEndpoint.php",
    "groupTitle": "PIM"
  },
  {
    "type": "patch",
    "url": "/api/employees/:empNumber/employeeAttachments",
    "title": "EmployeeAttachment - Update",
    "description": "<p>Update Employee Attachment</p>",
    "version": "1.0.0",
    "name": "updateEmployeeAttachment",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing employee attachment data to be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n\t\"screen\":\"qualifications\",\n\t\"description\":\"Referees of College affiliations\",\n\t\"filename\":{\n\t\t\"filename\":\"Affiliations Updated.docx\",\n\t\t\"filetype\":\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\",\n\t\t\"filesize\":300,\n\t\t\"base64\":\"c2QKeASjafewo324324tyr......\"},\n\t\"attach_id\":\"5\"\n}",
          "type": "Json"
        },
        {
          "title": "EmployeeAttachment Object-Example-Save-Comment-Only:",
          "content": "{\n\t\"screen\":\"qualifications\",\n\t\"description\":\"Referees of College affiliations Latest Document\",\n\t\"attach_id\":\"5\"\n}",
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
            "description": "<p>Object containing updated employee attachment data and success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"messages\":{\"success\":\"Successfully Saved\"},\n\t\"data\":{\n\t\t\"emp_number\":\"1\",\n\t\t\"attach_id\":\"5\",\n\t\t\"size\":\"0\",\n\t\t\"description\":\"Referees of College affiliations\",\n\t\t\"filename\":\"AffiliationsUpdated.docx\",\n\t\t\"file_type\":\"application\\/vnd.openxmlformats-officedocument.wordprocessingml.document\",\n\t\t\"screen\":\"qualifications\",\n\t\t\"attached_by\":\"1\",\n\t\t\"attached_by_name\":\"George\",\n\t\t\"attached_time\":\"2017-08-31 14:28:12\"\n\t}\n}",
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
            "description": "<p>Unsupported Resource Request / Attachment size exceeds</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>No update permission for qualifications_attachment data group</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeeAttachmentsAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "put",
    "url": "/api/employees/:empNumber/CustomFieldValue",
    "title": "CustomFieldValue - Update",
    "description": "<p>Update Employee CustomFieldValue</p>",
    "version": "1.0.0",
    "name": "updateEmployeeCustomFieldValue",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empNumber",
            "description": "<p>Employee's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "section",
            "description": "<p>Custom Field Section ID. (i.e If a section called 'Social Media URLs' is defined under 'Contact Details' screen, 'section' is the id of that section)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionName",
            "description": "<p>Custom Field Section Name. (i.e If a section called 'Social Media URLs' is defined under 'Contact Details' screen, 'sectionName' is 'Social Media URLs')</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing employee custom field values to be updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example-With-Section-Id:",
          "content": "[{\n\t\"section\":\"1\",\n\t\"values\":[\n\t\t{\n\t\t\t\"custom_field_id\":\"1\",\n\t\t\t\"type\":\"0\",\n\t\t\t\"value\":\"www.fb.com/kaylaAbbey\",\n\t\t\t\"extra_data\":\"\"\n\n\t\t},\n\t\t{\n\t\t\t\"custom_field_id\":\"2\",\n\t\t\t\"type\":\"0\",\n\t\t\t\"value\":\"www.t.co/kaylaAbbey\",\n\t\t\t\"extra_data\":\"\"\n\n\t\t}]\n}]",
          "type": "json"
        },
        {
          "title": "Param-Example-With-Section-Name:",
          "content": "[{\n\t\"sectionName\":\"example section\",\n\t\"values\":[\n\t\t{\n\t\t\t\"custom_field_id\":\"1\",\n\t\t\t\"type\":\"0\",\n\t\t\t\"value\":\"www.fb.com/kaylaAbbey\",\n\t\t\t\"extra_data\":\"\"\n\n\t\t},\n\t\t{\n\t\t\t\"custom_field_id\":\"2\",\n\t\t\t\"type\":\"0\",\n\t\t\t\"value\":\"www.t.co/kaylaAbbey\",\n\t\t\t\"extra_data\":\"\"\n\n\t\t}]\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Forbidden</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmCoreWebServicePlugin/modules/api/actions/employeeCustomFieldsAction.class.php",
    "groupTitle": "PIM"
  },
  {
    "type": "patch",
    "url": "/api/employees/:emp_number/job",
    "title": "JobRecord - Update",
    "description": "<p>Update Job Record</p>",
    "version": "1.0.0",
    "name": "updateJobRecord",
    "group": "PIM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emp_number",
            "description": "<p>Employee's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing JobRecord details to be updated. custom_fields property is optional and contains array of custom field section objects. See <a href=\"#api-PIM-updateEmployeeCustomFieldValue\">PIM - CustomFieldValue - Update</a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n \"joined_date\":\"2017-08-03\",\n \"probation_end_date\":\"2017-08-15\",\n \"date_of_permanency\":\"2017-08-25\",\n \"job_title_id\":\"2\",\n \"employment_status_id\":\"\",\n \"job_category_id\":\"7\",\n \"subunit_id\":\"\",\n \"location_id\":\"1\",\n \"work_shift_id\":\"\",\n \"cost_centre_id\":null,\n \"has_contract_details\":\"0\",\n \"creditable_service\":\"1 Month(s)\",\n \"flsa_exempt\":false,\n \"effective_date\":\"2017-08-30\",\n \"event_name\":\"error_correction\",\n \"custom_fields\": [{\n   \"section\":\"1\",\n   \"values\":[\n   {\n     \"custom_field_id\":\"1\",\n     \"type\":\"0\",\n     \"value\":\"www.fb.com/kaylaAbbey\",\n     \"extra_data\":\"\"\n   },\n   {\n     \"custom_field_id\":\"2\",\n     \"type\":\"0\",\n     \"value\":\"www.t.co/kaylaAbbey\",\n     \"extra_data\":\"\"\n   }]\n  }]\n}",
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
            "description": "<p>Object containing success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"messages\": {\n   \"success\": \"Successfully Saved\"\n }\n}",
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
            "description": "<p>Unsupported Resource Request / Invalid data</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Permission Required</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Job Record Not Found</p>"
          }
        ]
      }
    },
    "filename": "./orangehrmPimPlugin/api/EmployeeJobEndpoint.php",
    "groupTitle": "PIM"
  },
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCommonActivitiesEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCustomersEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectsEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectActivitiesEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCommonActivitiesEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCustomersEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectActivitiesEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectsEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCommonActivitiesEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCommonActivityEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCustomerEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCustomersEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectActivitiesEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectActivityEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectsEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCommonActivityEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeCustomerEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectActivityEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectMembersEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectMembersEndpoint.php",
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
    "filename": "./orangehrmITWPTimePlugin/api/ITWPTimeProjectMembersEndpoint.php",
    "groupTitle": "Time"
  }
] });
