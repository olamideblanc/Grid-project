let username = window.prompt('Enter your Username')  
let password = window.prompt('Enter your Password')
alert (`Goodbye`)


function CheckUsername(username) { if (username == null) {
    return true
} 
    if (username.length < 10) { 
        return true } else 
         { return false } 
} 

function CheckPassword(password)
{ if (password == null) 
    {return true}
    if (password.length > 6) { return true
} else {return false} 
}

