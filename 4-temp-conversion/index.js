let value = 0
document.getElementById('submit').onclick = function() {
    document.getElementsByName('type').forEach(e => {
        if(e.checked){
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
