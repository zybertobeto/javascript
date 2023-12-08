"use strict";

/* HTML Form converting degree Celsius to degree Fahrenheit */

document.getElementById("calc").onclick = function (tempConversion) {};

/* End of HTML Form temperature conversion */

/* Converting degree Celsius to degree Fahrenheit */

document.getElementById("btnCelFah").onclick = function (CelsiusFah) {
  const celfah = prompt("Please enter Degree Celsius value");

  const celfahresult = (celfah * 9) / 5 + 32;
  console.log(
    `${celfah}`,
    "degrees celsius is equivalent to",
    `${celfahresult}`,
    "degrees fahrenheit"
  );
};

/* Converting degree Fahrenheit to degree Celsius */

document.getElementById("btnFahCel").onclick = function (FahrenheitCel) {
  const fahcel = prompt("Please enter Degree Fahrenheit value");

  const fahcelresult = ((fahcel - 32) * 5) / 9;
  console.log(
    `${fahcel}`,
    "degrees Fahrenheit is equivalent to",
    `${fahcelresult}`,
    "degrees celsius"
  );
};

/* Converting degree Kelvin to degree Fahrenheit */

document.getElementById("btnKelFah").onclick = function (btnKelvinFah) {
  const kelfah = prompt("Please enter Degree Kelvin value");

  const kelfahresult = ((kelfah - 273.15) * 9) / 5 + 32;
  console.log(
    `${kelfah}`,
    "degrees Kelvin is equivalent to",
    `${kelfahresult}`,
    "degrees fahrenheit"
  );
};

/* Converting degree Celsius to degree Kelvin */

document.getElementById("btnCelKel").onclick = function (btnCelsiusKel) {
  const celkel = prompt("Please enter Degree Celsius value");

  const celkelresult = +celkel + +273.15;
  console.log(
    `${celkel}`,
    "degrees celsius is equivalent to",
    `${celkelresult}`,
    "degrees kelvin"
  );
};

/* Converting degree Fahrenheit to degree Kelvin */

document.getElementById("btnFahKel").onclick = function (btnFahrenheitkel) {
  const fahkel = prompt("Please enter Degree Fahrenheit value");

  const fahkelresult = ((fahkel - 32) * 5) / 9 + 273.15;
  console.log(
    `${fahkel}`,
    "degrees Fahrenheit is equivalent to",
    `${fahkelresult}`,
    "degrees kelvin"
  );
};

/* Converting degree Kelvin to degree Celsius */

document.getElementById("btnKelCel").onclick = function (btnKelvinCel) {
  const kelcel = prompt("Please enter Degree Kelvin value");

  const kelcelresult = kelcel - 273.15;
  console.log(
    `${kelcel}`,
    "degrees Kelvin is equivalent to",
    `${kelcelresult}`,
    "degrees celsius"
  );
};
