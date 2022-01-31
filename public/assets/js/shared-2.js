let authorizationToken = localStorage.getItem(`token`);
if(!authorizationToken){

  window.location.replace(`http://localhost:5000/login.html`);

}
const Name = localStorage.getItem(`name`);
document.getElementById(`username_heading`).innerHTML = Name;

document.getElementById(`log-out`).addEventListener(`click`, ()=> {

  localStorage.clear();
  window.location.replace(`http://localhost:5000`)

})