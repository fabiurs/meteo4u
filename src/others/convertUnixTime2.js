function timeConvertDayAndMonthAndHour(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[a.getDay()];
    let hours = a.getHours();
    // Minutes part from the timestamp
    let minutes;
    if(a.getMinutes() < 10){
        minutes = "0" + a.getMinutes();
    }
    else{
        minutes = a.getMinutes();
    }

    let time = day + ', ' +  date + ' ' + month + ', ' + hours + ':' + minutes;
    return time;
}

export default timeConvertDayAndMonthAndHour;
