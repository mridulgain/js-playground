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


let selectedRating = 0;

document.querySelectorAll(".star").forEach((star) => {
    star.addEventListener("click", () => {
        selectedRating = Number(star.getAttribute("data-value"));
        // document.getElementById("rating").value = selectedRating;
        highlightStars(Number(star.getAttribute("data-value")));
    });
})

function highlightStars(value) {
    document.querySelectorAll(".star").forEach(star => {
        if (star.getAttribute("data-value") <= value) {
            star.innerHTML = '&#9733'
            star.classList.add("active");
        }else{
            star.innerHTML = '&#9734'
            star.classList.remove("active");
        }
    });
    // for (let i = 0; i < value; i++) {
    //     document.querySelectorAll(".star")[i].classList.add("active");
    // }
}

document.getElementById("submit").onclick = function() {
    
    userName = document.getElementById("name").value || "Guest" ;
    console.log("username data type:", typeof userName);
    sessionStorage.setItem("userName", userName);
    document.getElementById("header").innerText = `Hello ${userName}!`;
    // update list
    userList = updateList("userList", userName);
    console.log("userRating list",  userList);
    
    userRating = Number(selectedRating);
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