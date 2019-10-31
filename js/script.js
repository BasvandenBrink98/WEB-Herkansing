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
     btn.innerHTML = "sluit";
     filtersZichtbaar = false;
   } else {
     form.classList.add('FilterOff');
     form.classList.remove('FilterOn');
     verhalen.classList.add('StoriesHigh');
     verhalen.classList.remove('StoriesLow');
     btn.innerHTML = "filteren";
     filtersZichtbaar = true;
   }
}

btn.addEventListener('click', btnSwitch);
