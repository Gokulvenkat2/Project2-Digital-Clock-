const clock = document.querySelector(".clock");

function runClock() {
    const time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    const ampm = hrs >= 12 ? "PM" : "AM";
    
    hrs = hrs % 12 || 12; // Convert 0 to 12 for 12 AM
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    clock.innerHTML = `${hrs} : ${min} : ${sec} ${ampm}`;
}

runClock(); // Initial call to display the clock immediately
setInterval(runClock, 1000); // Update the clock every second