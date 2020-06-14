document.addEventListener('DOMContentLoaded', function(){

const logedUserInfo = document.getElementById('logedUserInfo')


let ar;

ar = 
     "<a>" + localStorage.getItem('firstName') + "</a>"
    + "<a>" + localStorage.getItem("lastName")+ "</a>"
    + "<a>" + localStorage.getItem('mail') + "</a>";

    logedUserInfo.innerHTML = ar;


});