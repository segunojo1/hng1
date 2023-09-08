const day = document.querySelector(".day");
const utcTime = document.querySelector(".time");
console.log(day);
let dayOfWeek = new Date().getDay();
let time = new Date().getUTCMilliseconds();
console.log(time);


    switch (dayOfWeek) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
    
        default:
            break;
    }
console.log(dayOfWeek);
day.innerText = dayOfWeek;
utcTime.innerText = time;