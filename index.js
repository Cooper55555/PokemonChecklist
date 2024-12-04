document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const pokemon = checkbox.getAttribute('data-pokemon');
        const checked = localStorage.getItem(pokemon) === 'true';
        checkbox.checked = checked;
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkbox.getAttribute('data-pokemon'), checkbox.checked);
        });
    });
});

const checkboxes = document.querySelectorAll('#pokemon-checkbox');
const numberChange = document.getElementById('numberchange');

const savedCount = localStorage.getItem('checkedCount');
if (savedCount) {
    numberChange.textContent = savedCount;
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = savedCount > index;
    });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        numberChange.textContent = checkedCount;
        localStorage.setItem('checkedCount', checkedCount);
    });
});

const checkboxeslucky = document.querySelectorAll('.pokemon-checkbox-lucky');
const numberChangelucky = document.getElementById('numberchangelucky');

const savedCountlucky = localStorage.getItem('checkedCountlucky');
if (savedCountlucky) {
    numberChangelucky.textContent = savedCountlucky;
    checkboxeslucky.forEach((checkbox, index) => {
        checkbox.checked = savedCountlucky > index;
    });
}

checkboxeslucky.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlucky = Array.from(checkboxeslucky).filter(checkbox => checkbox.checked).length;
        numberChangelucky.textContent = checkedCountlucky;
        localStorage.setItem('checkedCountlucky', checkedCountlucky);
    });
});

const checkboxesshadow = document.querySelectorAll('.pokemon-checkbox-shadow');
const numberChangeshadow = document.getElementById('numberchangeshadow');

const savedCountshadow = localStorage.getItem('checkedCountshadow');
if (savedCountshadow) {
    numberChangeshadow.textContent = savedCountshadow;
    checkboxesshadow.forEach((checkbox, index) => {
        checkbox.checked = savedCountshadow > index;
    });
}

checkboxesshadow.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshadow = Array.from(checkboxesshadow).filter(checkbox => checkbox.checked).length;
        numberChangeshadow.textContent = checkedCountshadow;
        localStorage.setItem('checkedCountshadow', checkedCountshadow);
    });
});

const checkboxesdynamax = document.querySelectorAll('.pokemon-checkbox-dynamax');
const numberChangedynamax = document.getElementById('numberchangedynamax');

const savedCountdynamax = localStorage.getItem('checkedCountdynamax');
if (savedCountdynamax) {
    numberChangedynamax.textContent = savedCountdynamax;
    checkboxesdynamax.forEach((checkbox, index) => {
        checkbox.checked = savedCountdynamax > index;
    });
}

checkboxesdynamax.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountdynamax = Array.from(checkboxesdynamax).filter(checkbox => checkbox.checked).length;
        numberChangedynamax.textContent = checkedCountdynamax;
        localStorage.setItem('checkedCountdynamax', checkedCountdynamax);
    });
});

const checkboxesnormal = document.querySelectorAll('.pokemon-checkbox-normal');
const numberChangenormal = document.getElementById('numberchangenormal');

const savedCountnormal = localStorage.getItem('checkedCountnormal');
if (savedCountnormal) {
    numberChangenormal.textContent = savedCountnormal;
    checkboxesnormal.forEach((checkbox, index) => {
        checkbox.checked = savedCountnormal > index;
    });
}

checkboxesnormal.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountnormal = Array.from(checkboxesnormal).filter(checkbox => checkbox.checked).length;
        numberChangenormal.textContent = checkedCountnormal;
        localStorage.setItem('checkedCountnormal', checkedCountnormal);
    });
});

const checkboxesshiny = document.querySelectorAll('.pokemon-checkbox-shiny');
const numberChangeshiny = document.getElementById('numberchangeshiny');

const savedCountshiny = localStorage.getItem('checkedCountshiny');
if (savedCountshiny) {
    numberChangeshiny.textContent = savedCountshiny;
    checkboxesshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountshiny > index;
    });
}

checkboxesshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshiny = Array.from(checkboxesshiny).filter(checkbox => checkbox.checked).length;
        numberChangeshiny.textContent = checkedCountshiny;
        localStorage.setItem('checkedCountshiny', checkedCountshiny);
    });
});

const checkboxesperfect = document.querySelectorAll('.pokemon-checkbox-perfect');
const numberChangeperfect = document.getElementById('numberchangperfect');

const savedCountperfect = localStorage.getItem('checkedCountperfect');
if (savedCountperfect) {
    numberChangeperfect.textContent = savedCountperfect;
    checkboxesperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountperfect > index;
    });
}

checkboxesperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountperfect = Array.from(checkboxesperfect).filter(checkbox => checkbox.checked).length;
        numberChangeperfect.textContent = checkedCountperfect;
        localStorage.setItem('checkedCountperfect', checkedCountperfect);
    });
});

function Normal() {
    document.getElementById("pokemon-list").style.display = "block";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
}

function Perfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "block";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
}

function Shadow() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "block";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
}

function Dynamax() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "block";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
}

function Lucky() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "block";
    document.getElementById("pokemon-list-shiny").style.display = "none";
}

function Shiny() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "block";
}