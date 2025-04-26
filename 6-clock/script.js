function getTime(){
    let now = new Date()

    let hours = now.getHours()
    let meridiem = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, '0')

    let minutes = now.getMinutes().toString().padStart(2, '0')
    let seconds = now.getSeconds().toString().padStart(2, '0')

    return `${hours} : ${minutes} : ${seconds} ${meridiem}`
}

setInterval(function(){
    document.getElementById('clock').innerHTML = getTime()
}, 1000)