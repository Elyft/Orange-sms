# Orange-sms
 Node library for sending Sms with Orange Sms Api

## Create an Account and App on Orange developper Portal
1. Go to the [Orange Developper Portal](https://developer.orange.com/) and create your account
2. Click on my App and create your Orange App
3. Click on Add an Api button and after that select SMS for your country(Ex: SMS Cameroon(All operators)(1.1))
4. Click on configure Api button and buy one SMS pack
5. When it's done click on show button and get the value of Authorization header field, we need to use that later

## Install the Orange-sms library
* Get the Orange-sms folder(by clone or download) and put it on the server folder(you have to put all the files inside one folder, ideally the vendors folder)

## How it's works
Somewhere inside your code you have to write this:
```javascript
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
 ```
