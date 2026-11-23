// ==================================
// WEDDING COUNTDOWN FUNCTIONALITY
// ==================================

// Dates are in Indian Standard Time (UTC+05:30).

const engagementDate = new Date(
    "2026-12-26T11:45:00+05:30"
).getTime();

const weddingDate = new Date(
    "2027-01-02T11:00:00+05:30"
).getTime();


function updateEventCountdown(targetDate, prefix, containerId) {

    const now = Date.now();

    const distance = targetDate - now;

    const container = document.getElementById(containerId);

    if (!container) return;

    if (distance <= 0) {

        container.innerHTML = `
            <p class="event-started">
                The celebration has begun!
            </p>
        `;

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

    document.getElementById(`${prefix}-days`).textContent = days;

    document.getElementById(`${prefix}-hours`).textContent =
        String(hours).padStart(2, "0");

    document.getElementById(`${prefix}-minutes`).textContent =
        String(minutes).padStart(2, "0");

    document.getElementById(`${prefix}-seconds`).textContent =
        String(seconds).padStart(2, "0");

}


// ==================================
// UPDATE BOTH COUNTDOWNS
// ==================================

function updateCountdowns() {

    updateEventCountdown(
        engagementDate,
        "eng",
        "engagementCountdown"
    );

    updateEventCountdown(
        weddingDate,
        "wed",
        "weddingCountdown"
    );

}


// Initial update

updateCountdowns();


// Update every second

setInterval(updateCountdowns, 1000);