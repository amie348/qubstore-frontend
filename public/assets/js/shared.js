let authorizationToken = localStorage.getItem(`token`);
if(authorizationToken){
  window.location.replace(`http://localhost:5000/profilesetting.html`)
}