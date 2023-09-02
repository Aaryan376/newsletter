function validateEmail(){
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var email = document.getElementById('email').value;
    var span = document.getElementById('error-span');
    var input = document.getElementById('email');
    if (regex_pattern.test(email)) {
        window.location = 'success.html';
    }
    else {
        span.classList.remove('hidden');
        input.classList.add('error-state');
    }

    console.log(email);

    //window.location = 'success.html';
}

function redirect(){
    window.location = 'index.html';
}