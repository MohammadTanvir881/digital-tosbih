let initialSubhanAllah = 0;
let initialAllahuAkbar = 0;
let initialAlhamdulliah = 0;
const subhan = document.getElementById('subhan-count');
const allahu = document.getElementById('allahu-count');
const alhamdulliah = document.getElementById('alhamdulliah-count');

const buttonIncriment1 = document.getElementById('SubhanAllahIncrimentBtn')
buttonIncriment1.addEventListener('click', function () {
    if (initialSubhanAllah === 33) {
        return alert('Subhan Allah is full . Try in another Tasbih')
    }
    initialSubhanAllah += 1;
    const p1 = document.getElementById('subhan-count');
    p1.innerText = initialSubhanAllah;
})

const buttonDecriment1 = document.getElementById('SubhanAllahDecrimentBtn');
buttonDecriment1.addEventListener('click', function () {
    if (initialSubhanAllah === 0) {
        return alert('you cannot set negative value')
    }
    initialSubhanAllah -= 1;
    const p1 = document.getElementById('subhan-count');
    p1.innerText = initialSubhanAllah;

})

// set value for allahuAkbar

const buttonIncriment2 = document.getElementById('AllahhuAkbarIncrimentBtn')
buttonIncriment2.addEventListener('click', function () {
    if (initialAllahuAkbar === 33) {
        return alert('Subhan Allah is full . Try in another Tasbih')
    }
    initialAllahuAkbar += 1;
    const p2 = document.getElementById('allahu-count');
    p2.innerText = initialAllahuAkbar;
})

const buttonDecriment2 = document.getElementById('AllahhuAkbarDecrimentBtn');
buttonDecriment2.addEventListener('click', function () {
    if (initialAllahuAkbar === 0) {
        return alert('you cannot set negative value')
    }
    initialAllahuAkbar -= 1;
    const p2 = document.getElementById('allahu-count');
    p2.innerText = initialAllahuAkbar;

})

// set value for alhamdulliah

const buttonIncriment3 = document.getElementById('AlhamdulliahIncrimentBtn')
buttonIncriment3.addEventListener('click', function () {
    if (initialAlhamdulliah === 33) {
        return alert('Alhamdulliah is full . Try in another Tasbih')
    }
    initialAlhamdulliah += 1;
    const p3 = document.getElementById('alhamdulliah-count');
    p3.innerText = initialAlhamdulliah;
})

const buttonDecriment3 = document.getElementById('AlhamdulliahDecrimentBtn');
buttonDecriment3.addEventListener('click', function () {
    if (initialAlhamdulliah === 0) {
        return alert('you cannot set negative value')
    }
    initialAlhamdulliah -= 1;
    const p3 = document.getElementById('alhamdulliah-count');
    p3.innerText = initialAlhamdulliah;

})

// reset all tasbih section

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
    subhan.innerText = 0;
    allahu.innerText = 0;
    alhamdulliah.innerText = 0;

    initialSubhanAllah = 0;
    initialAllahuAkbar = 0;
    initialAlhamdulliah = 0;


})
