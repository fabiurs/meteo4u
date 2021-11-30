function timeConvertDayAndMonth(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month;
    return time;
}

export default timeConvertDayAndMonth;
