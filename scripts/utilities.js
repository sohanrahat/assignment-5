function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// current date function 

function updateDate() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const now = new Date();

    const day = days[now.getDay()]; // Get current day (e.g., Wed)
    const date = now.toLocaleDateString('en-US', {
        month: 'short', day: '2-digit', year: 'numeric'
    }); // Get formatted date (e.g., Jul 28 2025)

    document.getElementById('day').textContent = day;
    document.getElementById('full-date').textContent = date;
}

updateDate(); // Call function to update the date