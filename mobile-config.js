// Set a new access rule based on origin domain for your app
App.icons({
  // iOS
  'iphone': 'public/apple-icon-60x60.png',
  'iphone_2x': 'public/apple-icon-120x120.png',
  'iphone_3x': 'public/apple-icon-180x180.png',
  'ipad': 'public/apple-icon-76x76.png',
  'ipad_2x': 'public/apple-icon-152x152.png',

  // Android
  'android_ldpi': 'public/android-icon-36x36.png',
  'android_mdpi': 'public/android-icon-48x48.png',
  'android_hdpi': 'public/android-icon-72x72.png',
  'android_xhdpi': 'public/android-icon-96x96.png'
});

App.accessRule('http://api.segment.io/*');
App.accessRule('https://enginex.kadira.io/*');
App.accessRule('https://fonts.googleapis.com/*');
App.accessRule('https://fonts.gstatic.com/*');
App.accessRule('https://lh3.googleusercontent.com/*');
App.accessRule('https://quasar.meteor.com/*');
App.accessRule('blob:*');

// Make the app fullscreen
App.setPreference('fullscreen', 'true');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
