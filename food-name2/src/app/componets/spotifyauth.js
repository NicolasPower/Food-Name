var client_id = '7dde9f0df864412489a14ec60fccfde4';
var client_secret = '279312d59dbb4c36a6d43d977c8f4dcb';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    console.log(token)
  }
});