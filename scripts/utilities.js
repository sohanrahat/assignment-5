// function to get the random color 
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

// assigning buttons to the work 

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("task-btn")) {
        let button = event.target;
        button.disabled = true; 
        button.style.backgroundColor = "#9BA8F8";

        let counterElement = document.getElementById('task-count');
        let initialCount = parseInt(counterElement.textContent);
        let newCount = initialCount + 1;
        counterElement.textContent = newCount;



        let taskTitle = button.closest('.card-body').querySelector('.card-title').textContent;

        let activityLog = document.getElementById('activity-log');
        let newEntry = document.createElement('p');
        const now = new Date(); 
        const time = now.toLocaleTimeString('en-US'); 

        newEntry.textContent = `You have Complete The Task: ${taskTitle} at ${time}`;
        
        newEntry.classList.add('bg-[#f4f7ff]', 'p-2','rounded-md','font-regular','text-sm'); 
        activityLog.appendChild(newEntry);
    
    }
});
    
    
    