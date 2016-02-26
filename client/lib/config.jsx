// import {} from 'webrtc-adapter';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Browser from 'bowser';
Browser.mac = /(MacPPC|MacIntel|Mac_PowerPC|Macintosh|Mac OS X)/
  .test(navigator.userAgent) && !Browser.ios;
Browser.electron = Electron.isDesktop();

Push.addListener('token', function(token) {
  alert(JSON.stringify(token));
});

Push.addListener('notification', function(notification) {
  console.log('notification: ' + JSON.stringify(notification));
});

Push.addListener('startup', function(notification) {
  console.log('Routing Push: ' + JSON.stringify(notification));
});
