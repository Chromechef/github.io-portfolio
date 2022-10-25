const hiddenMenu = document.getElementById("hidden-menu");
const hamburgerCheckbox = document.getElementById("hamburger-checkbox");

const hiddenElements = document.querySelectorAll(".delay");

hamburgerCheckbox.addEventListener("change", e => {
  hiddenMenu.classList.toggle("display-none");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));

function sendEmail() {
  Email.send({
    SecureToken: "04900a6f-4f14-42bd-8efc-df63a1555af5",
    To: "jimmy@webtotabledesigns.com",
    From: "chefjimmy09@gmail.com",
    Subject: "Email from Web to table Designs",
    Body:
      "Name : " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone Number: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then(message => alert("mail has been sent sucessfully"));
}

hiddenMenu.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    hiddenMenu.classList.toggle("display-none");
    hamburgerCheckbox.checked = false;
  }
});


