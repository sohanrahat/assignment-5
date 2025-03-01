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

let completedTaskCount = 0;
const totalTaskCount = document.querySelectorAll(".task-btn").length;

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("task-btn")) {
        let button = event.target;
        button.disabled = true; 
        button.style.backgroundColor = "#9BA8F8";
        button.style.color = "white";
        button.style.opacity = "1";



        let counterElement = document.getElementById('task-count');
        let initialCount = parseInt(counterElement.textContent);
        let newCount = initialCount + 1;
        counterElement.textContent = newCount;

        let assignCounter = document.getElementById('assign-counter');
        let primaryCount = parseInt(assignCounter.textContent);
        let updatedCount = primaryCount - 1;
        assignCounter.textContent = updatedCount;
        

        let taskTitle = button.closest('.card-body').querySelector('.card-title').textContent;

        alert(`You have Complete The Task: ${taskTitle}`);


        let activityLog = document.getElementById('activity-log');
        let newEntry = document.createElement('p');
        const now = new Date(); 
        const time = now.toLocaleTimeString('en-US'); 

        newEntry.textContent = `You have Complete The Task: ${taskTitle} at ${time}`;

        completedTaskCount++;
        if(completedTaskCount === totalTaskCount){
            alert("Congratulations! You have completed all the tasks.")
        }

        newEntry.classList.add('bg-[#f4f7ff]', 'p-2','rounded-md','font-regular','text-sm'); 
        activityLog.appendChild(newEntry);
    
    }
});

// clear history button 
document.getElementById('clear-history-btn').addEventListener('click', function () {
    let activityLog = document.getElementById('activity-log');
    activityLog.innerHTML = '';

    // // Re-enable all task buttons
    // const taskButtons = document.querySelectorAll(".task-btn");
    // taskButtons.forEach(button => {
    //     button.disabled = false;
    //     button.style.backgroundColor = "#3752FD"; // Reset to original color
    //     button.style.color = "white"; // Ensure text is white
    //     button.style.opacity = "1";
    // });
    // // Clear completed tasks set
    // completedTaskButtons.clear();

    // // reset the counter to 23
    // let counterElement = document.getElementById('task-count');
    // counterElement.textContent = "23";


});


// moving to the blog page 

document.getElementById("discovery").addEventListener("click", function(){
    window.location.href = "blog.html";
})
    
    