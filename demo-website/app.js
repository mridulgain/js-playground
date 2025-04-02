document.getElementById("signin").addEventListener("click", function(e) {
    
    let userName = prompt("Enter your name:");
    if (userName !== "") {
        document.getElementById("greeting").innerText = "Hi, " + userName + " this is my blog. I hope you'll like it!";
    }
});