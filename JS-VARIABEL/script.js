//1. nama variabel dengan let
let nama = "dhimas";
console.log(nama);
//nama variabel
nama = "adhitiya";
console.log(nama);
//ubah nama variabel
nama = "dharmawan";
console.log(nama);

//2. nama variabel dengan var
var namaDepan = "cimot";
console.log(namaDepan);
namaDepan = "cimottututu";
console.log(namaDepan);

//kelakuan scope
let namaBelakang = "bel";
{
  let namaBelakang = "an";
  console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan var scope
var namaLengkap = "cimot an";
{
  var namaLengkap = "cimotan";
  console.log(namaLengkap);
}
console.log(namaLengkap);

//pakai const
const TTL = "29 okt 2009";
console.log(TTL);
