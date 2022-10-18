



// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// console.log(accountSid)

// const twilioNumber = process.env.TWILIO_PHONE_NUMBER
// const twilioNumberContact = process.env.TWILIO_PHONE_NUMBER_CONTACT
// const client = require('twilio')(accountSid, authToken);


const hiddenMenu = document.getElementById("hidden-menu")

const hamburgerCheckbox = document.getElementById("hamburger-checkbox")

let checked = false

hamburgerCheckbox.addEventListener("click", () => {

    if (checked === false) {
        hiddenMenu.classList.remove("display-none")
        checked = true
    } else if (checked) {
        hiddenMenu.classList.add("display-none")
        checked = false

    }

})

const hiddenElements = document.querySelectorAll(".delay")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})


hiddenElements.forEach((el) => observer.observe(el))

function sendEmail() {
    Email.send({
        SecureToken: "04900a6f-4f14-42bd-8efc-df63a1555af5",
        To: 'jjpesto@outlook.com, jimmy@webtotabledesigns.com',
        From: "chefjimmy09@gmail.com",
        Subject: "Email from Web to table Designs",
        Body: "Name : " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("mail has been sent sucessfully")
    )

}








// const sendMessage = () => {
//     let message = "Name : " + document.getElementById("name").value
//         + "<br> Email: " + document.getElementById("email").value
//         + "<br> Phone Number: " + document.getElementById("phone").value
//         + "<br> Message: " + document.getElementById("message").value
//     console.log(message)
//     fetch("/sendSms", {
//         method: "POST",
//         body: JSON.stringify({ message: message }),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));
// };

// document.getElementById("submit-button").addEventListener("click", sendMessage)










// function sendSms() {



// }




// export function sendSms(event) {

//     const msg = "Name : " + document.getElementById("name").value
//     + "<br> Email: " + document.getElementById("email").value
//     + "<br> Phone Number: " + document.getElementById("phone").value
//     + "<br> Message: " + document.getElementById("message").value

//     const number = '+18632899026'
//     sendSms(msg, number);
// }


// export function sendSms() {
//     const message = "Name : " + document.getElementById("name").value
//         + "<br> Email: " + document.getElementById("email").value
//         + "<br> Phone Number: " + document.getElementById("phone").value
//         + "<br> Message: " + document.getElementById("message").value






// };






// console.log(message)
// const accountSid = 'ACaa42249957cddbf5511b899920864213';
// const authToken = 'fb69416ce491d43df5f1de1d12ec2762';
// const client = require('twilio')(accountSid, authToken);

// client.messages.create("/https://api.twilio.com/2010-04-01/Accounts/ACaa42249957cddbf5511b899920864213/Messages.json?=", {
//     method: "POST",
//     body: JSON.stringify({ message: message }),
//     from: '+18329790729',
//     to: '+18632899026',
//     headers: {
//         'Content-Type': 'application/json'
//     }
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))

// })
