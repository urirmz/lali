var end = new Date('10/04/2024 10:1 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';
        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    document.getElementById('countdown').innerHTML = '¡Faltan ';
    document.getElementById('countdown').innerHTML += days + ' días ';
    document.getElementById('countdown').innerHTML += hours + ' hrs ';
    document.getElementById('countdown').innerHTML += minutes + ' mins ';
    document.getElementById('countdown').innerHTML += seconds + ' segs!';
}

timer = setInterval(showRemaining, 1000);