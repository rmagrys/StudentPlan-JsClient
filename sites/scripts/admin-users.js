document.addEventListener('DOMContentLoaded', function () {

    const textArea = document.getElementById("data");
    let valueToDisplay ="";
    let authorizationTokken = localStorage.getItem("token");

    let loginHeader = new Headers();
    loginHeader.append("Content-Type", "application/x-www-form-urlencoded");
    loginHeader.append("Authorization", authorizationTokken);

    let requestOptions = {
        method: 'GET',
        headers: loginHeader,
        redirect: 'follow',
    };

    fetch("http://localhost:8081/api/users", requestOptions)
  .then(response => response.json()
    )
  .then(result => { 
  
    for(let iterator in result){


        if (result[iterator].type === "ADMIN") continue;

        valueToDisplay += `<p class="singleDataBlock">` +
        `<span>`  + result[iterator].mail + `</span>` +
        `<span>` + result[iterator].firstName + `</span>` +
        `<span>` + result[iterator].lastName + `</span>`+
        `</p >` ;

    }
    
    textArea.innerHTML = valueToDisplay;
    
  })
  .catch(error => console.log('dupa nie dziala', error));
  console.log(valueToDisplay);
  

});
