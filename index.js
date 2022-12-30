document.addEventListener('DOMContentLoaded', () =>{


let signinBtn = document.getElementById('signinBtn');
let signupBtn = document.getElementById('signupBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

 
signupBtn.addEventListener('click', () => {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
})

signinBtn.addEventListener('click', () => {
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
})
// signinBtn.addEventListener('click', () => {
//     nameField.style.maxHeight = "65px";
//     title.innerHTML = "Sign Up";
// })

})

