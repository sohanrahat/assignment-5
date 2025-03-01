document.getElementById('theme-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
    
    const elements = document.querySelectorAll('.background-blue');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = getRandomColor();
    }
});


