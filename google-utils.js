const { google } = require("googleapis");
const keys = require('./config/keys');
const { googleClientId,
        googleClientSecret,
        googleRedirectURI } = keys;

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://mail.google.com/'
];

exports.createConnection = function(){
  return new google.auth.OAuth2(
    googleClientId,
    googleClientSecret,
    googleRedirectURI
  );
}

 exports.getConnectionUrl = function(auth) {
  return auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: defaultScope
  });
}
