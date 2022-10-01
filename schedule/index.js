const mondayEl = document.getElementById('monday-el')
const tuesdayEl = document.getElementById('tuesday-el')
const wednesdayEl = document.getElementById('wednesday-el')
const thursdayEl = document.getElementById('thursday-el')
const fridayEl = document.getElementById('friday-el')

let forMonday = document.getElementById('for-monday')
let forTuesday = document.getElementById('for-tuesday')
let forWednesday = document.getElementById('for-wednesday')
let forThursday = document.getElementById('for-thursday')
let forFriday = document.getElementById('for-friday')

mondayEl.addEventListener('click', function(){
    forTuesday.style.display = "none";
    forWednesday.style.display = "none";
    forThursday.style.display = "none";
    forFriday.style.display = "none";

    forMonday.style.display = "block";
})

tuesdayEl.addEventListener('click', function(){
    forMonday.style.display = "none";
    forWednesday.style.display = "none";
    forThursday.style.display = "none";
    forFriday.style.display = "none";

    forTuesday.style.display = "block";
})

wednesdayEl.addEventListener('click', function(){
    forMonday.style.display = "none";
    forTuesday.style.display = "none";
    forThursday.style.display = "none";
    forFriday.style.display = "none";

    forWednesday.style.display = "block";
})

thursdayEl.addEventListener('click', function(){
    forMonday.style.display = "none";
    forTuesday.style.display = "none";
    forWednesday.style.display = "none";
    forFriday.style.display = "none";

    forThursday.style.display = "block";
})

fridayEl.addEventListener('click', function(){
    forMonday.style.display = "none";
    forTuesday.style.display = "none";
    forWednesday.style.display = "none";
    forThursday.style.display = "none";

    forFriday.style.display = "block";
})

