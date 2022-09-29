const user={
    username:"",
    name:"",
    phone:""
}
const loginModal = document.querySelector(".login");

loginBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    user.username=document.getElementById("userName").value
    user.name=document.getElementById("name").value
    user.phone=document.getElementById("phone").value
    loginModal.style.display="none"
})