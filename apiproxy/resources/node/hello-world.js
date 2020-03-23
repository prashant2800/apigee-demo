var http = require('http');
var apigee = require('apigee-access');

console.log('node.js application starting...');

var resp_json = "{" +

"\"appconfig\": { " +

"\"appconfig_id\": \"1234\"," +

"\"appconfig_name\": \"TestAppConfi\"," +

"\"auth_token_timeout\": 86400," +

"\"mdn_timeout\": 432000" +

"}" +

"}";

var content_json = "{"+
  "\"hotspot_unlock_msg\":\"You’ve unlocked mobile hotspot!\"," +
   "\"features_txt\":\"Features coming soon.\""+
"}";


var svr = http.createServer(function(req, resp) {
    console.log("----->"+apigee.getVariable(req, 'proxy.pathsuffix'));
    var path = apigee.getVariable(req, 'proxy.pathsuffix');
    if(path == "/content")
        resp.end(content_json);
    else
        resp.end(resp_json);
});

svr.listen(9000, function() {
    console.log('Node HTTP server is listening');
});