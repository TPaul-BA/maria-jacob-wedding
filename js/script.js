const weddingDate = new Date(
    "January 2, 2027 11:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "The celebration has begun!";
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);