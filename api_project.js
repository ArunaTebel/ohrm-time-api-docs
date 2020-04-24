define({
  "name": "OrangeHRM REST APIS",
  "version": "1.0.0",
  "description": "Documentation of supported APIs of OrangeHRM product",
  "title": "OrangeHRM apiDoc",
  "header": {
    "title": "User Guide",
    "content": "<h2><b>User Guide</b></h2>\n<ul>\n    <li><b>Step 1- Register the Client:</b> OAuth client can be registered by System Admin users by accessing OAuth Clients\n        tab (Admin -> Configuration -> Authentication -> OAuth Clients). OrangeHRM support two main OAuth Grant Types\n        (Password - mainly for 3rd party user applications, Client Credentials - for data integrations/inter system communications).\n        It is possible to specify Client Id and Grant Type when registering an OAuth Client.  Secure Client Secret is auto generated.\n        Upon saving OAuth client scope will be set to \"Public\" automatically. These details(Client Id/ Client Secrete) need\n        to be stored securely.  These details will help authenticating, and securing the communication with a random\n        token(The Grant Type or regenerated Client Secret can be altered by editing an client). </li><br>\n    <li><b>Step 2 - Request an access token to communicate:</b> Every time the user needs to call the web services, the\n        communication needs to be protected with tokens. The web service client needs to request a token by passing\n        client id, client secret, and grant type(For <b>Password</b> grant type, use $grantType as 'password' and for\n        <b>Client Credentials</b> grant type, use $grantType as 'client_credentials'). See the example below:<br>\n        $params = array('client_id' => $clientId,'client_secret' => $secret,'grant_type' => $grantType,'username' => $username, \"password\" => $password)<br>\n        $response = $curl->request('https://:ohrmInstance/oauth/issueToken', $params, 'POST')<br>\n        $token = $response['access_token'];</li><br>\n    <li><b>Step 3 - Call the WebService:</b> Calling the webservice involves making an http request to a specific URL,\n        passing any post parameters, and adding the access token to the header of the call. See the example below:<br>\n        $response = $curl->request(URL, json_encode($postParameters), 'POST',\n        array('headers' => array('Authorization: Bearer {$token}')));</li><br>\n    <li><b>Step 4 - Getting the response:</b> Once a web service is successfully called it will return a\n        response containing any errors/warnings or success messages. If the call is a success,\n        web service will return Successfully saved or warnings/errors defined in each method in the document.<br>\n        Warning example - 404: Accecpted types are 1 and 2<br>\n        Success example - 201: Successfully saved</li>\n</ul>\n<p>For Bulk updates, parameter array can be an associative array.</p>"
  },
  "url": "https://<system url>",
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-04-24T14:02:00.678Z",
    "url": "http://apidocjs.com",
    "version": "0.20.1"
  }
});
