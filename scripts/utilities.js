

// assigning buttons to the work 

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("task-btn")) {
        let button = event.target;
        button.disabled = true; 
        button.style.backgroundColor = #9BA8F8;

        let counterElement = document.getElementById('task-counter');
        counterElement.textContent = parseInt(counterElement.textContent) + 1;

        let taskTitle = button.closest('.card-body').querySelector('.card-title').textContent;

        let activityLog = document.getElementById('activity-log');
        let newEntry = document.createElement('p');
        newEntry.textContent = `You have Complete The Task: ${taskTitle}`;
        newEntry.classList.add('bg-[#f47ff]', 'p-2','rounded-md','font-regular','text-sm'); 
        activityLog.appendChild(newEntry);
    
    }
});
    
    
    )