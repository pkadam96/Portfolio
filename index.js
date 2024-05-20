document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");

    function removeActiveClass() {
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });
    }

    // Add click event listener to each link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            removeActiveClass();
            this.classList.add("active");
        });
    });
});

// Resume
document.getElementById("button").addEventListener("click", async () => {
    let resumeURL = "https://raw.githubusercontent.com/pkadam96/MyResume/main/Pranoti_Kadam_Resume.pdf";
    let response = await fetch(resumeURL);
    let data = await response.blob();
    let blob = new Blob([data], { type: response.headers.get("content-type") });
    let downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = "Pranoti_Kadam_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});


let resumeDownload = document.getElementById("resumeDownload");
resumeDownload.addEventListener("click", async () => {  
    let downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/file/d/19EhnvOZAmEZ0IYT-Tx5wkCPNoVZIQAlQ/view?usp=sharing";
    downloadLink.target = "_blank";
    downloadLink.click();
});

// Projects
document.getElementById("syLoan_git").addEventListener("click",()=>{
    window.open("https://github.com/heyyrahul/python-magician-6789")
})
document.getElementById("syLoan_deployed").addEventListener("click",()=>{
    window.open("https://syloan.netlify.app/")
})

document.getElementById("socialbook_git").addEventListener("click",()=>{
    window.open("https://github.com/pkadam96/SocialBook_Project")
})
document.getElementById("socialbook_deployed").addEventListener("click",()=>{
    window.open("https://65b3b8e204290b1364f59ec6--stellar-zuccutto-405802.netlify.app/")
})

document.getElementById("reliance_git").addEventListener("click",()=>{
    window.open("https://github.com/pkadam96/stellar-app-5678/tree/main/Bootstrap-WebPage")
})
document.getElementById("reliance_deployed").addEventListener("click",()=>{
    window.open("https://658044d058f3e6424095b6db--sparkling-lebkuchen-00abc5.netlify.app/")
})

// Contact
document.getElementById("githubprofile").addEventListener("click",()=>{
    window.open("https://github.com/pkadam96")
})
document.getElementById("linkedinprofile").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/pranoti-kadam-2b52a7217/")
})

 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

sr.reveal('.featured-name',{delay: 100})

// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
        return;
    }

    let templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send('service_3gjoyna', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('formMessage').textContent = 'Message sent successfully!';
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.error('FAILED...', error);
            document.getElementById('formMessage').textContent = 'Failed to send message.';
        });
});
