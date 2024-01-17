const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("signin");
console.log(email.value);

button.addEventListener("click",()=>{
  console.log(email.value);
  fetch(`http://localhost:3000/users`,{
    method: "GET",
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const comp =data.find((el)=>el.email === email.value && el.password === pass.value);
    if(comp!== undefined){
      alert("Logged in!!");
      localStorage.setItem("token",JSON.stringify(Date.now()));
      localStorage.setItem("id",JSON.stringify(comp.id));
      window.location.href="../HomePage/homepage.html";
    }else{
      alert("Invalid Credentials!!");
    }
  })
})
