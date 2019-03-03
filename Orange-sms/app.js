const options = {
  authorization_header:"Basic eHYxbkd0OUZqYUZGWFJ1cmZUR3h6bml5ZEhFQTlxR3U6MmIwQXBsM3VQaDhxek9MMg==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
  area_code:"+237", // String; Telephony code of your country Ex: +237
  sender_number: 669341994, // Number; The number to which you are sending a message without area code
  sender_phone: 697644414, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
  sms_body: "Bonjour comment allez vous" // String; Your message text to send
};
const orangeSms = require('./orangeSms.js');
      orangeSms(options)
      .then((responseOrangeSms)=>{
        console.log(responseOrangeSms); 
        /* Should output a Json message like {message:sms sent},{message:401} (401 is an exemple status code of an error if you want the complete list check https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP),
           {message:You have to provide all the keys of the object},{message:the object key must not have a value like null or undefined}
           {message:One or more object keys are incorrectly written}, {message: The parameter must be an object}
           You can interpret the message and continue to write your code 
        */
      }).catch((error)=>{
        console.log(error);
      });