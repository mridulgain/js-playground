function getList(key, newList=[]){
    storedList = sessionStorage.getItem(key);
    if (storedList) {
        try {
            newList = JSON.parse(storedList);
            // if (!Array.isArray(userList)) userList = [];
        } catch (e) {
            console.warn("Failed to parse :", key, e);
            newList = [];
        }
    }
    return newList;
}

function updateList(key, element, list=[]){
    list = getList(key, list);
    list.push(element);
    sessionStorage.setItem(key, JSON.stringify(list));
    return list;
}

console.log("userList data type:", typeof userList);
console.log("userRating datatype:", typeof userRating);


// let selectedRating = 0




document.getElementById("submit").onclick = function() {
    
    userName = document.getElementById("name").value || "Guest" ;
    console.log("username data type:", typeof userName);
    sessionStorage.setItem("userName", userName);
    document.getElementById("header").innerText = `Hello ${userName}!`;
    // update list
    userList = updateList("userList", userName);
    console.log("userRating list",  userList);
    
    userRating = Number(document.getElementById("rating").value);
    if (!isNaN(userRating) && userRating >= 1 && userRating <= 5) {
         
        console.log(typeof userRating);
        sessionStorage.setItem("userRating", userRating);
        document.getElementById("ratingDisplay").innerText = `Your rating is ${userRating}!`;
        // update rating list
        ratingList = updateList("ratingList", userRating);
        console.log("userRating list",  ratingList);
        showAvgRating();
    } else {
        alert("Please enter a rating between 1 and 5.");
    }
}

ratingValue = document.getElementById(avgRating)
function showAvgRating(){
    let ratingList = getList("ratingList");
    let sum = 0;
    for (let i = 0; i < ratingList.length; i++){
        sum += Number(ratingList[i]);
    }
    console.log(sum)
    let avg = (sum / ratingList.length).toFixed(2);
    console.log("Average rating:", avg);
    document.getElementById("avgRating").innerText = `Average rating is: ${avg}!`;
}

// show avg rating
// {
//     username: "qwerty",
//     rating: 5,
// }