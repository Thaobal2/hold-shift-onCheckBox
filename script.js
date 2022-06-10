"use strict";

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function onClick(event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", onClick));
