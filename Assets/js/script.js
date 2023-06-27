
// loading page start
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
//   loading page end

const loginBtnTab = document.getElementById("flex-item-1");
const signupBtnTab = document.getElementById("flex-item-2");
const divLoginTab = document.getElementById ("login_div");
const divSignupTab = document.getElementById ("signup_div");

loginBtnTab.addEventListener("click", ()=>{
    loginBtnTab.classList.add ("active");
    signupBtnTab.classList.remove ("active");
    divSignupTab.style.zIndex = 0;
    divLoginTab.style.zIndex = 1;

})
signupBtnTab.addEventListener("click", ()=>{
    signupBtnTab.classList.add ("active");
    loginBtnTab.classList.remove ("active");
    divLoginTab.style.zIndex = 0;
    divSignupTab.style.zIndex = 1;
})
