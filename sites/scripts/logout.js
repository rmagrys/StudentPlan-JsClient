document.addEventListener('DOMContentLoaded', function(){

    const logoutButton = document.getElementById('logoutButton');
    
    
    logoutButton.addEventListener('click', () => {

        localStorage.clear();
        window.location.replace("login.html");
    }
)});