/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281;
const KilometerToMile = 0.62;
const literToGallon = 0.264;
const kiloToPound = 2.204;
const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const heigthEl = document.getElementById("heigth-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
// METER TO FEET
convertBtn.addEventListener("click", () => {
  let baseValue = input.value;
  heigthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet`;
  // KILOMETER TO MILE
  lengthEl.textContent = `${baseValue} kilometer = ${(
    baseValue * KilometerToMile
  ).toFixed(3)} mile`;
  // LITER TO GALLOM
  volumeEl.textContent = `${baseValue} liter = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallon`;
  // KILO TO POUND
  massEl.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(
    3
  )} pound`;
});
