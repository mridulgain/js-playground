var userRating = 1;
var userName = "Guest";

// string to array
userList = sessionStorage.getItem("userList");
userList = userList.split(",");
console.log("userList data type:", typeof userList);

console.log("userRating datatype:", typeof userRating);
document.getElementById("submit").onclick = function() {
    userName = document.getElementById("name").value;
    console.log("username data type:", typeof userName);
    sessionStorage.setItem("userName", userName);
    userList.push(userName);
    sessionStorage.setItem("userList", userList);
    document.getElementById("header").innerText = `Hello ${userName}!`;
    
    userRating = document.getElementById("rating").value;
    console.log(typeof userRating);
    sessionStorage.setItem("userRating", userRating);
    document.getElementById("rating").innerText = `Your rating is ${userRating}!`;
}

// show avg rating
// fix user rating undefined error
// fix user list empty element @ 0