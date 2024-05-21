document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");

    function removeActiveClass() {
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            removeActiveClass();
            this.classList.add("active");
        });
    });
});

document.querySelectorAll('ul li a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        document.getElementById('click').checked = false;
    });
});

 const typedTextElement = document.getElementById("typed-text");
    const textArray = ["Full Stack Developer"];
    let arrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            typedTextElement.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            setTimeout(type, 500);
        }
    }

    type();

    const nameElement = document.getElementById('name');
    const nameText = nameElement.textContent;
    nameElement.innerHTML = '';

    for (let i = 0; i < nameText.length; i++) {
        const span = document.createElement('span');
        span.textContent = nameText[i];
        nameElement.appendChild(span);
    }

// Resume
document.querySelectorAll(".Resume_btn").forEach(button => {
    button.addEventListener("click", async () => {
        let resumeURL = "https://raw.githubusercontent.com/pkadam96/MyResume/main/Pranoti_Kadam_Resume.pdf";
        try {
            let response = await fetch(resumeURL);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            let blob = await response.blob();
            let downloadLink = document.createElement("a");
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.download = "Pranoti_Kadam_Resume.pdf";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            window.URL.revokeObjectURL(downloadLink.href); // Clean up the URL object
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    });
});


document.querySelectorAll(".Resume_btn").forEach(button => {
    button.addEventListener("click", async () => {
        let downloadLink = document.createElement("a");
        downloadLink.href = "https://drive.google.com/file/d/19EhnvOZAmEZ0IYT-Tx5wkCPNoVZIQAlQ/view?usp=sharing";
        downloadLink.target = "_blank";
        downloadLink.click();
    });
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

function submitForm(){
    document.getElementById("contactForm").submit();
    document.getElementById("contactForm").reset();
}

