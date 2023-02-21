document.addEventListener("DOMContentLoaded", function(){
    let password = document.querySelector("#password").value;
    let confirmpassword = document.querySelector("#confirmpassword").value;

    let error = document.querySelector("#error");

    if (password == "" && confirmpassword == ""){
        error.innerHTML = "*Passwords do not match."
    }

    else if (password === confirmpassword) {
        error.innerHTML = ""
    }

    console.log("hi")
})