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
document.getElementById("submit").onclick = function() {
    userName = document.getElementById("name").value || "Guest" ;
    console.log("username data type:", typeof userName);
    sessionStorage.setItem("userName", userName);
    document.getElementById("header").innerText = `Hello ${userName}!`;
    // update list
    userList = updateList("userList", userName);
    console.log("userRating list",  userList);
    
    userRating = document.getElementById("rating").value || 1;
    console.log(typeof userRating);
    sessionStorage.setItem("userRating", userRating);
    document.getElementById("ratingDisplay").innerText = `Your rating is ${userRating}!`;
    // update rating list
    ratingList = updateList("ratingList", userRating);
    console.log("userRating list",  ratingList);
}

// show avg rating
// {
//     username: "qwerty",
//     rating: 5,
// }