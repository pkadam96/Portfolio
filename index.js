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
    downloadLink.href = "https://drive.google.com/file/d/1B6-A9D6D7noa1ueGYOKBh2aiB8qKIZMJ/view?usp=sharing";
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
