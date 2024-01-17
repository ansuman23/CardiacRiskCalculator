const token  = localStorage.getItem("token");
const sign = document.getElementsByName("sign");
if(token!==null){
    for(let i=0;i<sign.length;i++){
    sign[i].innerText = "Logout";
    sign[i].classList = "logout";
    }    
} else{
    for(let i=0;i<sign.length;i++){
        sign[i].innerText = "Login";
        sign[i].setAttribute("href","../SignIn/signin.html");
    }
}

const logout = document.querySelectorAll('.logout');
console.log(logout);
if(logout!==null){
    for(let i=0;i<logout.length;i++){
        logout[i].addEventListener("click",function(event){
            event.preventDefault();
            console.log("logout clicked");
            localStorage.removeItem("token");
            window.location.href = "../HomePage/homepage.html";
        })
    }
    console.log(logout); 
}

const toggle_btn = document.getElementById('tgbtn');
const toggleIcon = document.getElementById("tgbtnicon");
const drop = document.getElementById("drop");
toggle_btn.addEventListener("click",()=>{
    drop.classList.toggle("open");
    const isOpen = drop.classList.contains("open");
    toggleIcon.classList = isOpen?'bi bi-x':'bi bi-list';
})
