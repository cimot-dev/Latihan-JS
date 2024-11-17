// const convertCelciusToFahrenheit = function (temperatur) {
//   const result = (9 / 5) * temperatur + 32;
//   return result;
// };

// const temperaturInFahrenheit = convertCelciusToFahrenheit(45);
// console.log("Hasil konversi :", temperaturInFahrenheit);

// function hello(name, origin = "Bandung") {
//   return `Halo! Nama saya ${name} Saya tinggal di ${origin}`;
// }

// const hello = (name, origin = "Bandung") => {
//   return `Halo! Nama saya ${name} Saya tinggal di ${origin}`;
// };

// const rahmat = hello("Rahmat", "Semarang");
// console.log(rahmat);

// const indra = hello("Indra");
// console.log(indra);

const beli = (pembelian) => {
  const buku = 1000;

  if (pembelian > buku) {
    const diskon = 0.2;
    const totalBelanja = pembelian - pembelian * diskon;
    return totalBelanja;
  } else {
    return pembelian;
  }
};

const totalHargaBuku = beli(2000);
console.log(totalHargaBuku);
