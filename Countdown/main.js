
function updateTime() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const seconds = document.getElementById("seconds");
    const minutes = document.getElementById("minutes");
    const getDate = new Date();
    const getDays = getDate.getDay() + 21;
    days.innerHTML = getDays;
    const gethours = getDate.getHours();
    hours.innerHTML = gethours;
    const getminutes = getDate.getMinutes();
    minutes.innerHTML = getminutes;
    const getseconds = getDate.getSeconds();
    seconds.innerHTML = getseconds;


}

setInterval(updateTime, 1000);