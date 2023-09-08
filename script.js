const day = document.querySelector(".day");
const utcTime = document.querySelector(".time");

let dayOfWeek = new Date().getDay();
let time = new Date().getTime();


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
    const setTime = () => {
        time = new Date().getTime();
        day.innerText = dayOfWeek;
        utcTime.innerText = time;
    }
    setInterval(() => {
        setTime()
    }, 1000);