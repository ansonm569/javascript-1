let id = prompt("Who's there");


if (id === "Admin") {
    let password = prompt("Passowrd?");
    
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null) {
        alert("Cancelled");
    } 
    else {
        alert("Wrong password");
    }
}  else if (id === null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
    }