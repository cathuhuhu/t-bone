document.addEventListener("DOMContentLoaded", () => {
    const introMessages = [
        "I thought you were kinda cute 💖",
        "If you're down.... ❤️",
        "Do you wanna maybe.. 🍫",
        "Hangout sometime?"
    ];

    let index = 0;
    const introText = document.getElementById("intro-text");
    const startBtn = document.getElementById("start-btn");
    const startFtNt = document.getElementById("start-footnote");

    function changeText() {
        if (index < introMessages.length) {
            introText.style.opacity = "0";
            setTimeout(() => {
                introText.textContent = introMessages[index];
                introText.style.opacity = "1";
                index++;
                setTimeout(changeText, 2000);
            }, 500);
            
        } else {
            setTimeout(() => {
                startBtn.style.display = "inline-block";
                startBtn.style.opacity = "1"; // Make button visible smoothly
                setTimeout(() => {
                    startFtNt.style.display = "block";
                    startFtNt.style.opacity = "1";
                }, 800);                    
            }, 500);
        }
    }

    function startAdventure() {
        window.location.href = "oops.html";
    }

    // Only run intro logic if the elements exist
    if (introText && startBtn) {
        startBtn.addEventListener("click", startAdventure);
        setTimeout(changeText, 2000);
    }

    // Other unrelated code can go below:
    console.log("Other script logic running!");

    function showAngryResponse() {
        document.getElementById('noBtn').style.display = 'none';
        document.getElementById('noText').classList.remove('hidden');
        document.getElementById('angryImage').classList.remove('hidden');
    }

    const noButton = document.getElementById("noBtn");
    
    if (noButton) {
        noButton.addEventListener("click", showAngryResponse);
    }

    const letter = document.getElementById("letter");

    letter.addEventListener("dragstart", () => {
        letter.classList.add("dragging"); // Apply animation to move letter up
    });

    // Prevent default behavior when dragging
    letter.addEventListener("dragend", () => {
        setTimeout(() => letter.classList.remove("dragging"), 1000); // Optional: Reset after a second
    });

});
