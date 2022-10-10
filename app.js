require('dotenv').config()


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const twilioNumber = process.env.TWILIO_PHONE_NUMBER
const twilioNumberContact = process.env.TWILIO_PHONE_NUMBER_CONTACT

const client = require('twilio')(accountSid, authToken);



document.getElementById("submit-button").addEventListener("click", () => {

    const message = "Name : " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone Number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    console.log(message)


    client.messages.create({
        to: twilioNumberContact,
        from: twilioNumber,

        body: message

    })
        .then(message => console.log(message.sid))
        .catch(err => console.log(err))
        .done();


})
