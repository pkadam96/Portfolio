let btn = document.getElementById("button");
btn.addEventListener("click", async () => {  
    let downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/file/d/1J4y7tpDi5F2Wl2JOfy44N17CJCimTvOh/view?usp=sharing";
    downloadLink.target = "_blank";
    downloadLink.click();

    let viewLink = document.createElement("a");
    viewLink.href = "https://drive.google.com/file/d/1J4y7tpDi5F2Wl2JOfy44N17CJCimTvOh/view?usp=sharing";
    viewLink.target = "_blank";
    viewLink.click();
});

let resumeDownload = document.getElementById("resumeDownload");
resumeDownload.addEventListener("click", async () => {  
    let downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/file/d/1J4y7tpDi5F2Wl2JOfy44N17CJCimTvOh/view?usp=sharing";
    downloadLink.target = "_blank";
    downloadLink.click();

    let viewLink = document.createElement("a");
    viewLink.href = "https://drive.google.com/file/d/1J4y7tpDi5F2Wl2JOfy44N17CJCimTvOh/view?usp=sharing";
    viewLink.target = "_blank";
    viewLink.click();
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




const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    const checkbox = document.getElementById('click');
    checkbox.checked = false;
  });
});
