var btn = document.querySelector('#filterBtn');
var form = document.querySelector('#filterForm');
var filtersZichtbaar = false;
console.log(filtersZichtbaar);

function btnSwitch() {
  console.log(form)
   if (filtersZichtbaar == true) {
     form.classList.add('FilterOn');
     form.classList.remove('FilterOff');
     filtersZichtbaar = false;
   } else {
     form.classList.add('FilterOff');
     form.classList.remove('FilterOn');
     filtersZichtbaar = true;
   }
}

btn.addEventListener('click', btnSwitch);
