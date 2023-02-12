module.exports = (orangeAuthorizationHeader)=>{
    return new Promise((resolve)=>{
      const https = require('https');
      let credentials= orangeAuthorizationHeader;
      let postData = "";
      postData += "grant_type=client_credentials";
        let options = {
            host: 'api.orange.com',
            path: '/oauth/v3/token'
        };
        options['method'] = 'POST';
        options['headers'] = {
            'Authorization': credentials,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        };
        let req = https.request (options, (response)=> {
            response.setEncoding('utf8');
            let responseData = '';
            response.on ('data', (data)=> { responseData += data; });
            response.on ('end', ()=> {
              responseData = JSON.parse(responseData);
              resolve(responseData.access_token);
            });
       })
       .on('error', (e)=> { console.log(e); });
       req.write(postData);
       req.end();
    });
};
