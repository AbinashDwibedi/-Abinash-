let btn = document.getElementById("dark-mode-btn");
let toggleIcon = document.querySelector(".right-nav-inside")
btn.onclick = function(){
    document.body.classList.toggle("darkmode");
    // toggleIcon.classList.toggle("fa-sun");
    toggleIcon.classList.toggle("fa-moon");
}
let loaderBox = document.querySelectorAll(".loader-box");
const randomColor = ()=>{
    let a = Math.ceil(0+ Math.random()*255);
    let b = Math.ceil(0+ Math.random()*255);
    let c = Math.ceil(0+ Math.random()*255);
    return `rgb(${a},${b},${c})`
}
setInterval(() => {
    Array.from(loaderBox).forEach((box1)=>{box1.style.backgroundColor = randomColor();})
}, 500);
let loader = document.querySelector(".loader");
document.addEventListener("DOMContentLoaded",()=>{
    let prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve();
        loader.style.opacity = 0;
    }, 3000);
    }).then((a)=>{
        loader.remove();
        document.body.style.overflow = "auto"
    })
    
})
let navColor = document.querySelector(".navbar");
document.addEventListener("scroll",()=>{
    if(window.scrollY > 0){
        navColor.style.backgroundColor = "var(--background-theme)"
    }
    else{
        navColor.style.backgroundColor ="transparent"
    }
})





