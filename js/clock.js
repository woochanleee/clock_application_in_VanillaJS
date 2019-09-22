const minute = document.querySelector("#mDiv"),
      hour = document.querySelector("#hDiv"),
      second = document.querySelector("#sDiv");

let rMinute,
    rHour,
    rSecond;

function getNowTime() {
    var now = new Date();
    rHour = now.getHours();
    rMinute = now.getMinutes();
    rSecond = now.getSeconds();
}

function clockMove() {
    getNowTime();
    second.style.transform = `rotate(${rSecond * 6}deg)`;
    minute.style.transform = `rotate(${rMinute * 6}deg)`;
    hour.style.transform = `rotate(${(rHour > 12 ? rHour - 12 : rHour) * 30 + rMinute / 2}deg)`;
}

function init() {
    setInterval(clockMove, 1000);
}

init();