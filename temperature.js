"use strict";

/* First form converting temperatures */

document.getElementById("calc").onclick = function (CalcTemp) {
  const celfahone = document.getElementById("displayarea").value;
  alert(`The temperature value you entered is ${celfahone}`);
};

/* Converting degree Celsius to degree Fahrenheit */

document.getElementById("btnCelFah").onclick = function (CelsiusFah) {
  const celfah = document.getElementById("tempdisplaybox").value;
  const celfahresult = Number((celfah * 9) / 5 + 32).toFixed(0);
  alert(
    `${celfah} degrees Celsius is equivalent to ${celfahresult}
    degrees Fahrenheit`
  );
};

/* Converting degree Fahrenheit to degree Celsius */

document.getElementById("btnFahCel").onclick = function (FahrenheitCel) {
  const fahcel = document.getElementById("tempdisplaybox").value;
  const fahcelresult = Number(((fahcel - 32) * 5) / 9).toFixed(0);
  alert(
    `${fahcel} degrees Fahrenheit is equivalent to ${fahcelresult}
    degrees celsius`
  );
};

/* Converting degree Kelvin to degree Fahrenheit */

document.getElementById("btnKelFah").onclick = function (KelvinFah) {
  const kelfah = document.getElementById("tempdisplaybox").value;
  const kelfahresult = Number((kelfah - 273.15) * (9 / 5) + 32).toFixed(0);
  alert(
    `${kelfah} degrees Kelvin is equivalent to ${kelfahresult}
    degrees Fahrenheit`
  );
};

/* Converting degree Fahrenheit to degree Kelvin */

document.getElementById("btnFahKel").onclick = function (FahrenheitKel) {
  const fahkel = document.getElementById("tempdisplaybox").value;
  const fahkelresult = Number(((fahkel - 32) * 5) / 9 + 273.15).toFixed(2);
  alert(
    `${fahkel} degrees Fahrenheit is equivalent to ${fahkelresult}
    degrees Kelvin`
  );
};

/* Converting degree Kelvin to degree Celsius */

document.getElementById("btnKelCel").onclick = function (KelvinCel) {
  const kelcel = document.getElementById("tempdisplaybox").value;
  const kelcelresult = Number(kelcel - 273.15).toFixed(0);
  alert(
    `${kelcel} degrees Kelvin is equivalent to ${kelcelresult}
    degrees Celsius`
  );
};
