function chooseOption(category, option, nextPage) {
    localStorage.setItem(category, option); // Store choice
    window.location.href = nextPage; // Move to the next page
}

function loadFinalScene() {
    const outfit = localStorage.getItem('outfit') || 'default';
    const food = localStorage.getItem('food') || 'default';

    document.getElementById("summary").innerText = 
        `You chose a ${outfit} and brought ${food} for our picnic!`;

    // Example: Display final image based on choices
    document.getElementById("picnicImage").src = `images/picnic_${outfit}_${food}.jpg`;
}