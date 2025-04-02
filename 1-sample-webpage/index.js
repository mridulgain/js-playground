// alert("Alert from index.js");
console.log("Console log from index.js");
// take input in alert box
// do it with try catch
let userInput = ""
userInput = prompt("Please enter your name:");
if (userInput) {
    document.getElementById("header").innerText = `Hello ${userInput}!`;
} else {
    document.getElementById("header").innerText = "Hello Guest!";
}

// document.getElementById("header").innerText = "Hello //username!";
// const now = new Date();
// const formatted = now.toLocaleString(); 
// console.log(formatted);

document.getElementById("content").innerHTML = "date/time:";
document.getElementById("content").appendChild(document.createTextNode(new Date().toLocaleString()));
let appname = navigator.appName;
let appversion = navigator.appVersion;
console.log(appname, appversion);