///loading animation
document.onreadystatechange = function () {
  // Set a timeout of 5000 milliseconds (5 seconds)
 setTimeout(function() {
  if (document.readyState !== "complete") {
    document.querySelector(".loader").style.display = "block";
    document.querySelector("body").style.display = "none";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.display = "block";
  }

  }, 2000 )
    
  // Adjust the timeout value as needed
};

// cursor script
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// menu script 
let about = document.getElementById("about");
let project = document.getElementById("project");

let aboutSection = document.getElementById("about-section");
let exploreContent = document.getElementById("project-content");
let projectTitle = document.getElementById("project-title");
let contact = document.getElementById("contact");
let contactSection = document.getElementById("contact-section");
let x = window.matchMedia("(max-width:1350px)");

about.addEventListener("click", (e) => {
  
  exploreContent.style.display = "none";
  projectTitle.style.display = "none";
  aboutSection.style.display = "flex";
  contactSection.style.display = "none";

  if (x.matches) {
    menu.style.display = "none";
    closeButton.style.display = "none";
    hamburger.style.display = "block";
  }
  e.preventDefault();
});
project.addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(function () {
    exploreContent.style.display = "flex";
    aboutSection.style.display = "none";
    projectTitle.style.display = "block";
    contactSection.style.display = "none";
    if (x.matches) {
      menu.style.display = "none";
      closeButton.style.display = "none";
      hamburger.style.display = "block";
    }
  }, 500);
});

contact.addEventListener("click", (event) => {
  event.preventDefault();
  contactSection.style.display = "flex";
  aboutSection.style.display = "none";
  exploreContent.style.display = "none";
  projectTitle.style.display = "none";
  if (x.matches) {
    menu.style.display = "none";
    closeButton.style.display = "none";
    hamburger.style.display = "block";
  }
});

// hamburger script 
let hamburger = document.getElementById("hamburger");
let closeButton = document.getElementById("close");
let menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  closeButton.style.display = "block";
  menu.style.display = "block";
});
closeButton.addEventListener("click", () => {
  hamburger.style.display = "block";
  closeButton.style.display = "none";
  menu.style.display = "none";
});

// Comment remover
document.addEventListener("DOMContentLoaded", function () {
  removeComments(document.body);
});

function removeComments(element) {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    let node = element.childNodes[i];
    if (node.nodeType === 8) {
      // Comment node type
      element.removeChild(node);
    } else if (node.nodeType === 1) {
      // Element node type
      removeComments(node); // Recursively remove comments in child elements
    }
  }
}

// project toggle script 
function toggleIframe(iframeId) {
  var iframe = document.getElementById(iframeId);
  if (iframe.style.display === "none") {
    iframe.style.display = "flex";
  } else {
    iframe.style.display = "none";
  }
}
// sendig email 
function sendEmail() {
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let enquiry = document.getElementById("message").value;

  let message =
    "Name: " +
    username +
    "<br> Phone Number: " +
    email +
    "<br> Message: " +
    enquiry;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "raymund.ihap@gmail.com",
    Password: "23D7CBAAEF181856F0DA3F479E7AC71C69DC",
    To: "info@rhymemoon.site",
    From: "abanreset91@gmail.com",
    Subject: "Native Product Enquiry",
    Body: message,
  }).then((message) => {
    if (message == "OK") {
      swal("Success", "We well contact you shortly!", "success");
    } else {
      swal("Error", "You clicked the button!", "error");
    }
  });
}
