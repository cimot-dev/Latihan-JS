// handling eerror menggunakan throw new
// const price = 100;
// const paid = 80;

// if (paid < price) {
//   throw new Error("Pembayaran kurang");
// }

// handling error menggunakan try catch
const price1 = 100;
const paid1 = 80;

try {
  if (paid1 < price1) {
    throw new Error("Pembayaran kurang");
  }
} catch (error) {
  console.log("silahkan isi domepet");
}
