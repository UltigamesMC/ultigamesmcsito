const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});


// LOADING
const loading = document.getElementById("loading");
let loaded = false;
let time = 0;
const loadingTime = 1;
document.body.style.overflow = "hidden";

const int = setInterval(() => {
    if (time >= loadingTime && loaded) {
        loading.style.animation = "loaded 0.5s ease";
        setTimeout(() => {
            loading.style.display = "none";
            document.body.style.overflow = "auto";
        }, 480)
    } else {
        time += 0.5;
    }
}, 500)

window.onload = () => loaded = true;