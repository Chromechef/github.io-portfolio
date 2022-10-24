const hiddenMenu = document.getElementById("hidden-menu")
const hamburgerCheckbox = document.getElementById("hamburger-checkbox")

const hiddenElements = document.querySelectorAll(".delay")

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
        To: 'jimmy@webtotabledesigns.com',
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

let inputBox = document.getElementById("hamburger-checkbox")

inputBox.addEventListener("click", function () {
    inputBox.checked = true
})

let check = document.querySelectorAll(".close")
check.forEach(uncheck => uncheck.addEventListener("click",
    function () {
        inputBox.checked = false
        checked = false
    }))


