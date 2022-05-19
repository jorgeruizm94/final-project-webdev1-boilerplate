import {getCountries} from './countries.js'

const countries = getCountries();

console.log(countries);

$(".theme-switch").on("click", () => {
    $("body").toggleClass("light-theme");
  });