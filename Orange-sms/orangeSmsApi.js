module.exports = (orangeApiOptions)=>{
  return new Promise((resolve)=>{
  	 const request = require('request');
     const getToken = require('./getToken.js')(orangeApiOptions.authorization_header);
           getToken.then((response)=>{
             const headers = {
               'Authorization': `Bearer ${response}`,
               'Content-Type': 'application/json'};
             const body = {
                outboundSMSMessageRequest: {
                address : `tel:${orangeApiOptions.area_code}${orangeApiOptions.sender_number}`, 
                senderAddress : `tel:${orangeApiOptions.area_code}${orangeApiOptions.sender_phone}`,
                outboundSMSTextMessage: {
                message :  orangeApiOptions.sms_body  
             }}};   
             const options = {
                uri: `https://api.orange.com/smsmessaging/v1/outbound/tel:${orangeApiOptions.area_code}${orangeApiOptions.sender_phone}/requests`,
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)};
             const sendSmsRequest = request(options, (error, response, body)=> {
               if (!error && response.statusCode == 201) {
                 resolve({message:'sms sent'});
               }else {
                 resolve({message:response.statusCode});
               }
             });
           }).catch((error)=>{ 
             console.log(error.body);
           });
  });
}