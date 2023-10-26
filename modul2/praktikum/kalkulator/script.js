const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharacters = ["%", "*", "/", "-", "+", "=", "^"];
let result = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && result !== "") {
    // Ganti operasi modulus (%) dengan /100

    // Ganti operasi pangkat (^) dengan ** dalam ekspresi matematika
    result = result.replace(/\^/g, "**");

    // Evaluasi ekspresi matematika
    try {
      result = eval(result);

      // Batasi hasil tampilan menjadi 4 angka di belakang titik desimal
      result = parseInt(result);
    } catch (error) {
      result = "Error";
    }
  } else if (btnValue === "AC") {
    result = "";
  } else if (btnValue === "DEL") {
    result = result.toString().slice(0, -1);
  } else {
    if (result === " " && specialCharacters.includes(btnValue)) return;
    result += btnValue;
  }
  display.value = result;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
