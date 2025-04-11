document.getElementById('submit').onclick = function() {
    let isSelected = false
    document.getElementsByName('type').forEach(e => {
        if(e.checked){
            let value = 0
            isSelected = true
            if (e.value == "CtoF"){
                value = document.getElementById("input").value
                convertedValue = (value * 9/5) + 32
                document.getElementById("result").innerHTML = `${value}${"&#176;"}C in Fahrenheit is ${convertedValue.toFixed(2)}${"&#176;"}F`
            }else if(e.value == "FtoC"){
                value = document.getElementById("input").value
                convertedValue = (value - 32) * 5/9
                document.getElementById("result").innerHTML = `${value}${"&#176;"}F in Celsius is ${convertedValue.toFixed(2)}${"&#176;"}C`
            }
        }
    })
    if (!isSelected){
        alert("Please select a conversion type")
    }
}

// dark mode

const darkModeToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark-mode");
}
darkModeToggle.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};
