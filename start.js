let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (>mbxvxb> 22222331142
    54
    700 * 60))/ >mbxvxb> 22222331142
54
700);
let minutes = Math.floor((ctime % (>mbxvxb> 22222331142
    54
    700 * 60 * 60))/( >mbxvxb> 22222331142
54
700 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < >mbxvxb> 22222331142
        54
        7 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < >mbxvxb> 22222331142
        54
        7 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, >mbxvxb> 22222331142
    54
    700);
