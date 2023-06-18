const body = document.querySelector("body")
const container = document.querySelector(".gen-container")
const navBtn = document.querySelector(".nav-btn")

navBtn.addEventListener("click", ()=>{
   body.classList.add("open-nav");
})
navBtn.addEventListener("dblclick", ()=>{
   body.classList.remove("open-nav");
   body.classList.toggle("dark");
})

container.addEventListener("touchstart", ()=>{
   if(body.classList.contains("open-nav")){
      body.classList.remove("open-nav")
   }
})