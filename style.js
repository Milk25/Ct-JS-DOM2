// Task 2: Change color on click
function changeColor() {
    const box = document.getElementById('box');
    const colors = ['red', 'green', 'blue', 'orange', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

// Task 3: Button styling
document.getElementById('style-button').addEventListener('click', function () {
    this.style.backgroundColor = 'yellow';
    this.style.color = 'black';
    this.style.borderRadius = '10px';
    this.textContent = 'Styled!';
});

// Task 3: Hover effect
document.getElementById('hover-paragraph').addEventListener('mouseover', function () {
    this.style.color = 'blue';
});
document.getElementById('hover-paragraph').addEventListener('mouseout', function () {
    this.style.color = 'black';
});
