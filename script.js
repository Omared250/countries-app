import { getCountries } from "./app";

async function init() {
    const container = document.querySelector('body');
    const countriEl = document.createElement('p');
    countriEl.textContent = getCountries;
    container.appendChild(countriEl);
  }
  
  init();