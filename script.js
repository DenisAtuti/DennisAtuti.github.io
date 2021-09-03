// STYLING ACTIVE NAV LINKS
const navLinks = document.querySelectorAll(".nav-link")
for (i = 0; i < navLinks.length; i++){
    navLinks[i].classList.remove("active")
}
navLinks.forEach((link) =>{
    link.addEventListener("click",() =>{
        for (i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove("active")
        }
        link.classList.add("active")
    })
})

const openMenu = document.getElementById("open")
const closeMenu = document.getElementById("close")
const humburgerMenu = document.querySelector(".hamburger-nav")
const humburgerLinks = document.querySelectorAll(".hamburger-link")

openMenu.addEventListener("click",()=>{
    humburgerMenu.classList.add("show")
    closeMenu.style.display = "block"
    openMenu.style.display ="none"
})

closeMenu.addEventListener("click",()=>{
    humburgerMenu.classList.remove("show")
    closeMenu.style.display = "none"
    openMenu.style.display ="block"
})

humburgerLinks.forEach((link) =>{
    link.addEventListener("click",()=>{
        humburgerMenu.classList.remove("show")
        closeMenu.style.display = "none"
        openMenu.style.display ="block"
    })
})

