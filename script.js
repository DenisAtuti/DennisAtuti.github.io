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

// ACCORDIAN TOGGLE
const accordianBtn = document.querySelectorAll(".accordian")
accordianBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        btn.classList.toggle("active")
    })
})

//// TOAST CONTROL FUNCTIONS
const toast = document.querySelector("#toast")
const toastHeader = toast.querySelector(".toast-header > h4");
const toastMessage = toast.querySelector(".toast-header > p");

function toastSuccess(){
    const toastIcon = toast.querySelector(".toast-icon > i");
        toast.classList.remove("error")
        toast.classList.add("success")
    
        toastHeader.innerHTML = "Success";
        toastMessage.innerHTML = "We have received your massage, we will contact you soon";
        toastIcon.style.display= "block"

        setTimeout(() => {
            toast.style.transform ="translateX(40rem)"
            // toast.classList.remove("success")
        }, 3000);

}

function toastError(){
    const toastIcon = toast.querySelector(".toast-icon > i + i");
        toast.classList.remove("success")
        toast.classList.add("error")
    
        toastHeader.innerHTML = "Server Error";
        toastMessage.innerHTML = "We can not process your request at this time";
        toastIcon.style.display = "block"

        setTimeout(() => {
            toast.style.transform ="translateX(40rem)"
            // toast.classList.remove("error")
        }, 3000);

}
// toastSuccess()
// toastError()

// SEND MESSAGE TO SERVER
const myForm = document.getElementById("myForm")
const loadingIcon = myForm.querySelector("button > i + i")
const sendIcon = myForm.querySelector("button > i")
myForm.addEventListener("submit",(e) =>{
    e.preventDefault();

    loadingIcon.style.display = "inline-block"
    sendIcon.style.display = "none"

    const formData = new FormData(myForm)
    const formDataSerialised = Object.fromEntries(formData);

    fetch("https://portfolio-mail-sender.herokuapp.com/ap/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(formDataSerialised)

  }).then(async (response) => {
    if (response.ok) {

        loadingIcon.style.display = "none"
        sendIcon.style.display = "inline-block"

        myForm.reset();

        toastSuccess()

        return response.json();

    }else if((response.status >= 400 && response.status < 600) ){
        loadingIcon.style.display = "none"
        sendIcon.style.display = "inline-block"

        toastError()
    }

  }).then( data =>{
    console.log(data);
  }).catch( error =>{

    loadingIcon.style.display = "none"
    sendIcon.style.display = "inline-block"

    toastError()
    
    console.log(error);
  });

})
