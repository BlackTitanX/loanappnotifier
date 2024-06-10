var express = require('express');
var fulcrumMiddleware = require('connect-fulcrum-webhook');
const email = require('./email_service/email')

require('dotenv').config();


var PORT = process.env.PORT || 3000;

var app = express();

function payloadProcessor (payload, done) {
  // Do stuff with payload like update records in a database,
  // send text messages to field staff, email supervisors when
  // task marked complete, etc.

  // After you've processed the payload call done() with no arguments to signal
  // that the webhook has been processed. Call done(), passing an error to return
  // a 500 response to the webhook request, signaling that the request should be
  // tried again later.
  console.log('Payload:');
  console.log(payload);
 
  done()
}

var fulcrumMiddlewareConfig = {
  actions: ['record.create', 'record.update'],
  processor: payloadProcessor
};

app.use('/', fulcrumMiddleware(fulcrumMiddlewareConfig));

app.get('/', function (req, res) {

  if (require.main === module) {
    email().catch(console.error);
  }
  res.json('Notification has been sent');
})




app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);



  
  
});
