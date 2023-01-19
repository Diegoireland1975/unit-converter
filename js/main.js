/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281;
const meterToMile = 0.00062;
const literToGallon = 0.264;
const kiloToPound = 2.204;
const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const heigthEl = document.getElementById("heigth-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", () => {
  let baseValue = input.value;
  heigthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet`;
  lengthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToMile
  ).toFixed(3)} mile`;

  volumeEl.textContent = `${baseValue} liter = ${(
    baseValue * literToGallon
  ).toFixed(3)} feet`;
  massEl.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(
    3
  )} feet`;
});
