// menggunakan If statement
const score = 75;
if (score >= 80) {
  console.log("Anda Lulus");
} else if (score >= 60) {
  console.log("Anda harus mengulang");
} else {
  console.log("Anda tidak lulus");
}

// menggunakan ternary operator
const panas = true;
const hujan = false;
const newCuaca = hujan ? "OnAC" : "bakar";
console.log(newCuaca);
