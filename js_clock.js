function show() {
    document.getElementById('newclocks').style.display = "flex";
    console.log("show me another time");
};

function cls() {
    document.getElementById('newclocks').style.display = "none";
    console.log("i am closed now");
}

let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options); //gets the date
    // console.log(date);
    let a_hrs = a.getHours();
    let a_mins = a.getMinutes();
    let a_secs = a.getSeconds();
    let we = a.getDay();
    console.log(we);
    let day = a.getDate();
    let mnth = a.getMonth() + 1;
    let yr = a.getFullYear();
    curr_date = day + " - " + mnth + " - " + yr
    // console.log(curr_date);
    document.getElementById('date').innerHTML = curr_date;


    a_hrs = (a_hrs < 10 ? "0" : "") + a_hrs;
    a_mins = (a_mins < 10 ? "0" : "") + a_mins;
    a_secs = (a_secs < 10 ? "0" : "") + a_secs;

    document.getElementById('hrs').innerHTML = a_hrs;
    document.getElementById('mins').innerHTML = a_mins;
    document.getElementById('secs').innerHTML = a_secs;

    time = a_hrs + ':' + a_mins + ':' + a_secs;

    // document.getElementById('time').innerHTML = time + "<br> on " + date;
    // week = document.getElementsByClassName('weekdays')
    if (we == 0) {
        document.getElementById('sun').style.color = 'white';
        document.getElementById('sun').style.fontWeight = 'bold';
        document.getElementById('sun').style.textDecoration = 'underline';
        document.getElementById('small_weekday').innerHTML = "Sunday"
    }
    else if (we == 1) {
        document.getElementById('mon').style.color = 'white';
        document.getElementById('mon').style.fontWeight = 'bold';
        document.getElementById('mon').style.textDecoration = 'underline';
        document.getElementById('small_weekday').innerHTML = "Monday"
    }
    else if (we == 2) {
        document.getElementById('tue').style.color = 'white';
        document.getElementById('tue').style.fontWeight = 'bold';
        document.getElementById('tue').style.textDecoration = 'underline';
        document.getElementById('small_weekday').innerHTML = "Tuesday"
    }
    else if (we == 3) {
        document.getElementById('wed').style.color = 'white';
        document.getElementById('wed').style.fontWeight = 'bold';
        document.getElementById('wed').style.textDecoration = 'underline';
        document.getElementById('small_weekday').innerHTML = "Wednesday"
    }
    else if (we == 4) {
        document.getElementById('thu').style.color = 'white';
        document.getElementById('thu').style.fontWeight = 'bold';
        document.getElementById('thu').style.textDecoration = 'underline';
        document.getElementById('small_weekday').innerHTML = "Thursday"
    }
    else if (we == 5) {
        document.getElementById('fri').style.color = 'white';
        document.getElementById('fri').style.fontWeight = 'bold';
        document.getElementById('fri').style.textDecoration = 'underline';
        document.getElementById('small_weekday').innerHTML = "Friday"
    }
    else if (we == 6) {
        document.getElementById('sat').style.color = 'white';
        document.getElementById('sat').style.fontWeight = 'bold';
        document.getElementById('sat').style.textDecoration = 'underline';
        document.getElementById('small_weekday').innerHTML = "Saturday"
    }
}, 1000);

setTimeout(() => {

    document.getElementById('lightmode').addEventListener('click', function () {
        document.getElementById('mode').style.display = "none";
        document.getElementById('mode_').style.display = "block";
        var elements = document.getElementsByClassName('inner_part_2'); // get all elements
	    for(var i = 0; i < elements.length; i++){
		    elements[i].style.background = "linear-gradient(322deg, #585858, white)";
	    }
        var elements22 = document.getElementsByClassName('world_container_innerdiv'); // get all elements
	    for(var i = 0; i < elements22.length; i++){
		    elements22[i].style.background = 'linear-gradient(135deg, purple, green, maroon, yellow)';
	    }
        var elements_inner = document.getElementsByClassName('world_time_small_divs'); // get all elements
	    for(var i = 0; i < elements_inner.length; i++){
            elements_inner[i].style.color = "black";
	    }
        var elements_head = document.getElementsByClassName('heading'); // get all elements
	    for(var i = 0; i < elements_head.length; i++){
            // elements_head[i].style.color = "black";
            elements_head[i].classList.add('heading_ch');
	    }
        document.getElementById('mybody').classList.add('body_change');
        document.getElementById('cct').classList.add('cc_change');
        document.getElementById('hrs').style.color = "black";
        document.getElementById('mins').style.color = "black";
        document.getElementById('weekdays').style.color = "black";
        document.getElementById('date_').style.color = "black";
        ele = document.getElementsByClassName('mynav');
        ele[0].style.color = 'black';
        ele[1].style.color = 'black';
        ele[2].style.color = 'black';
        console.log("i am in light mode now");
    })

}, 1000);
setTimeout(() => {

    document.getElementById('darkmode').addEventListener('click', function () {
        document.getElementById('mode_').style.display = "none";
        document.getElementById('mode').style.display = "block";
        // document.getElementById('inner_wc').style.background='rgba(1, 25, 54, 1)';
        var elements = document.getElementsByClassName('inner_part_2'); // get all elements
	    for(var i = 0; i < elements.length; i++){
		    elements[i].style.background = "rgba(1, 25, 54, 1)";
	    }
        var elements_inner = document.getElementsByClassName('world_time_small_divs'); // get all elements
	    for(var i = 0; i < elements_inner.length; i++){
		    elements_inner[i].style.color = "white";
	    }
        var elements22 = document.getElementsByClassName('world_container_innerdiv'); // get all elements
	    for(var i = 0; i < elements22.length; i++){
		    elements22[i].style.background = 'linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0)';
	    }
        var elements_head = document.getElementsByClassName('heading'); // get all elements
	    for(var i = 0; i < elements_head.length; i++){
		    // elements_head[i].style.background = 'linear-gradient(135deg, pink, yellow, cyan, red)';
		    elements_head[i].classList.remove('heading_ch');
	    }
        document.getElementById('mybody').classList.remove('body_change');
        document.getElementById('cct').classList.remove('cc_change');
        document.getElementById('hrs').style.color = "white";
        document.getElementById('mins').style.color = "white";
        document.getElementById('weekdays').style.color = "#bbbbbb";
        document.getElementById('date_').style.color = "white";
        ele = document.getElementsByClassName('mynav');
        ele[0].style.color = 'white';
        ele[1].style.color = 'white';
        ele[2].style.color = 'white';
        console.log("i am in dark mode now");
    })

}, 1000);

// logic for alarm clock

var audio = new Audio('https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3');
function ring_bell() {
    audio.play();
}

const alarm_data = document.getElementById("alarm_sub");
alarm_sub.addEventListener('click', set_alarm);
// alarm_data.addEventListener('mouseover', function remove() {
//     alarm_data.style.boxShadow="none";
// })

function set_alarm() {
    // x.perventDefault();
    alarm_sub.classList.toggle('box_rem');
    const alarm_ = document.getElementById('alarm');
    let input = new Date(alarm_.value);
    console.log(`alarm set for ${input}`);

    let curr = new Date();
    let time_to_alarm = input - curr;
    console.log(time_to_alarm);
    setInterval(() => {
        let curr_ = new Date();
        let time_to_alarm_ = input - curr_;

        left_seconds = Math.floor((time_to_alarm_ / 1000) % 60),
            left_minutes = Math.floor((time_to_alarm_ / (1000 * 60)) % 60),
            left_hours = Math.floor((time_to_alarm_ / (1000 * 60 * 60)) % 24);
        total_left = left_hours + " hours  " + left_minutes + " minutes  " + left_seconds + " seconds";
        document.getElementById('time_left').innerHTML = "Time to alarm :-  " + total_left;
        if (total_left <= 0) {
            document.getElementById('time_left').innerHTML = "Ringing Now.....";
        }
        console.log("time to alarm: ", total_left);
    }, 1000);

    if (time_to_alarm >= 0) {
        setTimeout(() => {
            ring_bell();
            document.getElementById('glowing').style.display = "block";
        }, time_to_alarm);
        clr = setInterval(() => {
            ring_bell();
        }, 60000);
    }

    let cancel_alarm = document.getElementById('cancel');
    cancel_alarm.addEventListener('click', cancel);
    function cancel() {
        console.log("canceling alram");
        audio.pause();
        document.getElementById('glowing').style.display = "none";
        clearInterval(clr);
    }

    // let snooze_alarm = document.getElementById('snooze');
    // snooze_alarm.addEventListener('click', snooze);
    // function snooze() {
    //     audio.pause();
    //     setTimeout(() => {

    //         ring_bell();
    //     }, 300000);
    // }

    // logic for world clock

}
setInterval(() => {
    let us = new Date().toLocaleString("en-US", { timeZone: 'America/New_York', timeStyle: 'medium', hourCycle: 'h24' });
    let us_hr = us[0] + us[1];
    let us_min = us[3] + us[4];
    let us_sec = us[6] + us[7];
    console.log(us_hr);
    console.log(us_min);
    console.log(us_sec);
    document.getElementById('us_hrs').innerHTML = us_hr;
    document.getElementById('us_mins').innerHTML = us_min;
    document.getElementById('us_secs').innerHTML = us_sec;
}, 1000);
setInterval(() => {
    let aus = new Date().toLocaleString("en-US", { timeZone: 'Australia/Sydney', timeStyle: 'medium', hourCycle: 'h24' });
    let aus_hr = aus[0] + aus[1];
    let aus_min = aus[3] + aus[4];
    let aus_sec = aus[6] + aus[7];
    console.log(aus_hr);
    console.log(aus_min);
    console.log(aus_sec);
    document.getElementById('aus_hrs').innerHTML = aus_hr;
    document.getElementById('aus_mins').innerHTML = aus_min;
    document.getElementById('aus_secs').innerHTML = aus_sec;
}, 1000);
setInterval(() => {
    let lon = new Date().toLocaleString("en-US", { timeZone: 'Europe/London', timeStyle: 'medium', hourCycle: 'h24' });
    let lon_hr = lon[0] + lon[1];
    let lon_min = lon[3] + lon[4];
    let lon_sec = lon[6] + lon[7];
    console.log(lon_hr);
    console.log(lon_min);
    console.log(lon_sec);
    document.getElementById('lon_hrs').innerHTML = lon_hr;
    document.getElementById('lon_mins').innerHTML = lon_min;
    document.getElementById('lon_secs').innerHTML = lon_sec;
}, 1000);
setInterval(() => {
    let jap = new Date().toLocaleString("en-US", { timeZone: 'Asia/Tokyo', timeStyle: 'medium', hourCycle: 'h24' });
    let jap_hr = jap[0] + jap[1];
    let jap_min = jap[3] + jap[4];
    let jap_sec = jap[6] + jap[7];
    console.log(jap_hr);
    console.log(jap_min);
    console.log(jap_sec);
    document.getElementById('jap_hrs').innerHTML = jap_hr;
    document.getElementById('jap_mins').innerHTML = jap_min;
    document.getElementById('jap_secs').innerHTML = jap_sec;
}, 1000);
setInterval(() => {
    let dub = new Date().toLocaleString("en-US", { timeZone: 'Asia/Dubai', timeStyle: 'medium', hourCycle: 'h24' });
    let dub_hr = dub[0] + dub[1];
    let dub_min = dub[3] + dub[4];
    let dub_sec = dub[6] + dub[7];
    console.log(dub_hr);
    console.log(dub_min);
    console.log(dub_sec);
    document.getElementById('dub_hrs').innerHTML = dub_hr;
    document.getElementById('dub_mins').innerHTML = dub_min;
    document.getElementById('dub_secs').innerHTML = dub_sec;
}, 1000);
setInterval(() => {
    let unk = new Date().toLocaleString("en-US", { timeZone: 'America/Vancouver', timeStyle: 'medium', hourCycle: 'h24' });
    let unk_hr = unk[0] + unk[1];
    let unk_min = unk[3] + unk[4];
    let unk_sec = unk[6] + unk[7];
    console.log(unk_hr);
    console.log(unk_min);
    console.log(unk_sec);
    document.getElementById('unk_hrs').innerHTML = unk_hr;
    document.getElementById('unk_mins').innerHTML = unk_min;
    document.getElementById('unk_secs').innerHTML = unk_sec;
}, 1000);

// document.getElementById('mode').addEventListener(onmouseover, function () {
//     document.getElementById('msg_light').style.visibility="visible";
//     document.getElementById('cct').style.display="none";
// });
