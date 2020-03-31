const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const sunday = document.getElementById("sunday");
const add = document.querySelector(".ok");
const actual = document.querySelector(".desired");
const result = document.querySelector(".result");
const val = document.getElementById("val");
const total = document.querySelector(".ok2");
const clear = document.querySelector('.clear');
// const sleepDebt = document.querySelector(".calculate");

add.addEventListener('click', function() {
    actual.classList.add("fadeIn");
    window.scrollTo(0,500);
})

total.addEventListener('click', function() {
    result.classList.add("fadeIn");
    clear.classList.add("fadeIn");
    calculateSleepDebt();
    window.scrollTo(0,800);
});

clear.addEventListener('click', () => {
    sunday.value = '';
    monday.value = '';
    tuesday.value = '';
    wednesday.value = '';
    thursday.value = '';
    friday.value = '';
    saturday.value = '';
    val.value = '';
    getActualHours().value = 0;
    getDesiredHours().value = 0;
    actual.classList.remove("fadeIn");
    result.classList.remove("fadeIn");
    clear.classList.remove("fadeIn");
    window.scrollTo(0,0)
})

function getActualHours() {
    let sum = Number(monday.value) + Number(tuesday.value) + Number(wednesday.value) + Number(thursday.value) + Number(friday.value) + Number(saturday.value) + Number(sunday.value);
    return sum;
}

function getDesiredHours() {
    let idealHours = Number(val.value) * 7;
    return idealHours;
}

calculateSleepDebt = () => {
    let actualSleepHours = getActualHours();
    let idealSleepHours = getDesiredHours();

    if(actualSleepHours === idealSleepHours){
        result.textContent = `You slept for a total of ${actualSleepHours} hours this week and your ideal amount of sleep is ${idealSleepHours} hours, You got the perfect amount of sleep 😀`;
    }else if(actualSleepHours > idealSleepHours){
        result.textContent = `You slept for a total of ${actualSleepHours} hours this week and your ideal amount of sleep is ${idealSleepHours} hours, You got more sleep than needed 😅`;
    }else if(actualSleepHours < idealSleepHours){
        result.textContent = `You slept for a total of ${actualSleepHours} hours this week and your ideal amount of sleep is ${idealSleepHours} hours, You need to get more sleep ☹️`;
    }
}