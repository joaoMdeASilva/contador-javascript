const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn')

let count = 0;
const counter = document.getElementById('counter');
counter.innerText = 0;
plusBtn.addEventListener('click', () => {
    count++;
    counter.innerText = count;
})

minusBtn.addEventListener('click', () => {
    count--;
    counter.innerText = count;
})