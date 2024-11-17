// menggunakan for loop
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// menggunakan for in loop
const Tgl_lahir = { name: "dhimas", kota: "Bandung", tahun: 2024 };

for (const property in Tgl_lahir) {
  console.log(`${property} bernilai ${Tgl_lahir[property]}`);
}

// menggunakan for of
const Tgl_lahir1 = ["dhimas", "Bandung", "2024"];
for (const item of Tgl_lahir1) {
  console.log(item);
}
