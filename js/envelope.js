// ==========================================
// MARIA & JACOB
// ENVELOPE OPENING AND MUSIC FUNCTIONALITY
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openInvitation");

    const envelope = document.getElementById("envelope");

    const introScreen = document.querySelector(".intro-screen");

    const invitationScreen = document.getElementById("invitationScreen");

    const weddingMusic = document.getElementById("weddingMusic");

    const musicToggle = document.getElementById("musicToggle");

    const musicIcon = document.getElementById("musicIcon");

    let invitationOpened = false;


    // ======================================
    // CHECK REQUIRED ELEMENTS
    // ======================================

    if (!openButton || !envelope || !introScreen || !invitationScreen) {

        console.error("Envelope initialization failed. Required elements are missing.");

        return;

    }


    // ======================================
    // MUSIC CONTROL
    // ======================================

    function startWeddingMusic() {

        if (!weddingMusic || !musicToggle) return;

        weddingMusic.volume = 0.35;

        weddingMusic.play()

            .then(function () {

                musicToggle.classList.add("visible");

                musicToggle.classList.remove("paused");

                musicIcon.textContent = "♫";

                musicToggle.setAttribute("aria-label", "Pause wedding music");

                musicToggle.setAttribute("aria-pressed", "true");

            })

            .catch(function (error) {

                console.warn("Music could not be played:", error);

                musicToggle.classList.add("visible");

                musicToggle.classList.add("paused");

                musicIcon.textContent = "♪";

                musicToggle.setAttribute("aria-label", "Play wedding music");

                musicToggle.setAttribute("aria-pressed", "false");

            });

    }


    // ======================================
    // OPEN ENVELOPE
    // ======================================

    openButton.addEventListener("click", function () {

        if (invitationOpened) return;

        invitationOpened = true;

        console.log("Opening wedding invitation...");


        // Start envelope animation immediately.

        envelope.classList.add("opening");


        // Music is optional.
        // Failure to play music must never stop the animation.

        startWeddingMusic();


        // Step 1: Envelope disappears.

        setTimeout(function () {

            envelope.classList.add("opened");

        }, 1600);


        // Step 2: Display invitation.

        setTimeout(function () {

            introScreen.style.opacity = "0";

            invitationScreen.classList.add("active");

            console.log("Wedding invitation opened successfully.");

        }, 2200);


        // Step 3: Remove intro screen.

        setTimeout(function () {

            introScreen.style.display = "none";

        }, 3500);

    });


    // ======================================
    // MUSIC PLAY / PAUSE
    // ======================================

    if (musicToggle && weddingMusic) {

        musicToggle.addEventListener("click", function () {

            if (weddingMusic.paused) {

                weddingMusic.play()

                    .then(function () {

                        musicIcon.textContent = "♫";

                        musicToggle.classList.remove("paused");

                        musicToggle.setAttribute("aria-label", "Pause wedding music");

                        musicToggle.setAttribute("aria-pressed", "true");

                    })

                    .catch(function (error) {

                        console.warn("Unable to resume music:", error);

                    });

            } else {

                weddingMusic.pause();

                musicIcon.textContent = "♪";

                musicToggle.classList.add("paused");

                musicToggle.setAttribute("aria-label", "Play wedding music");

                musicToggle.setAttribute("aria-pressed", "false");

            }

        });

    }

});