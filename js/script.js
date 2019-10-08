var btn = document.querySelector('#filterBtn');
var form = document.querySelector('#filterForm');
var verhalen = document.querySelector('#verhalen');
var fiterSection = document.querySelector('#filterSection');
var filtersZichtbaar = true;
console.log(filtersZichtbaar);

function btnSwitch() {
  console.log(form)
   if (filtersZichtbaar == true) {
     form.classList.add('FilterOn');
     form.classList.remove('FilterOff');
     verhalen.classList.add('StoriesLow');
     verhalen.classList.remove('StoriesHigh');
     btn.classList.add('btnActive');
     btn.classList.remove('btnInactive');
     console.log("test")
     // filterSection.classList.add('formGrid');
     // var h2 = document.createElement('h2');
     // h2.textContent = 'Vind jouw perfecte match';
     // filterSection.appendChild(h2);
     filtersZichtbaar = false;
   } else {
     form.classList.add('FilterOff');
     form.classList.remove('FilterOn');
     verhalen.classList.add('StoriesHigh');
     verhalen.classList.remove('StoriesLow');
     btn.classList.add('btnInctive');
     btn.classList.remove('btnActive');
     // filterSection.classList.remove('formGrid');
     // filterSection.removeChild(h2);
     filtersZichtbaar = true;
   }
}

btn.addEventListener('click', btnSwitch);
