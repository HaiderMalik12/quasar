Push.debug = true;

Push.allow({
  send: function(userId, notification) {
    return true; // Allow all users to send
  }
});

/* do something with push token*/
Push.addListener('token', function(token) {
  console.log('Token: ' + JSON.stringify(token));
});

Push.addListener('notification', function(notification) {
  console.log('notification: ' + JSON.stringify(notification));
});

Push.addListener('startup', function(notification) {
  console.log('Routing Push: ' + JSON.stringify(notification));
});
