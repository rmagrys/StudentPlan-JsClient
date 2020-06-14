document.addEventListener('DOMContentLoaded', function(){

const loginBox = document.getElementById('text_field_login');
const passwordBox = document.getElementById('text_field_password');
const loginButton = document.getElementById('login_button');

loginButton.onclick = function() {

    let log = loginBox.value;
    let pass = passwordBox.value;
    localStorage.clear();

        let authorizationTokken = authorizationTokenCreator(log,pass);

    let loginHeader = new Headers();
        loginHeader.append("Content-Type", "application/x-www-form-urlencoded");
        loginHeader.append("Authorization", authorizationTokken);

    let requestOptions = {
        method: 'GET',
        headers: loginHeader,
        redirect: 'follow',
      };


 fetch("http://localhost:8081/api/users/me", requestOptions)
  .then(response => response.json()
    )
  .then(result => { 

    let id = result.id;
    let type = result.type;
    let firstName = result.firstName;
    let lastName = result.lastName;
    let mail = result.mail;

    localStorage.setItem('token', authorizationTokken);
    localStorage.setItem('id', id)
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('mail', mail);
    localStorage.setItem('type', type);
    

    console.log(result);

    if(type === "ADMIN"){
        window.location.replace("admin.html")
    } else if(type === "STUDENT") {
        window.location.replace("student.html")
    } else if(type === "LECTURER")
      window.location.replace("lecturer.html")
    
   })
  .catch(error => {
    document.getElementById('errorInfo').style.display = "block";
    console.log('error', error)
});

}


function authorizationTokenCreator(login,pass){

    let encodedAuthorizationData = window.btoa(login + ":" + pass);

    let authorizationTokken = "Basic " + encodedAuthorizationData;

    return authorizationTokken;
}

});