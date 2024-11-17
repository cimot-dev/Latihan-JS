let data = "Tipe data string";
console.log(data);

//1. Escaping String
let ucup1 = 'ucup berkata: "halo, apa kabar?"';
console.log(ucup1);

let otong = 'otong menjawab: "baik cup"';
console.log(otong);

let ucup2 = 'ucup berkata: "ayo bermain ke lapangan yg \nbagus disana"'; // menggunakan \n -> untuk new line (ganti baris)
console.log(ucup2);

let ucup3 = 'ucup berkata: "saya makan \ttempe, \tmakan daging"';
console.log(ucup3); //jika menggunakan \t maka akan menambah spasi dengan tab

//2. Literal string (template string)
let namaDepan = "dhimas";
let namaBelakang = "adhitiya";
let umur = 22;
let biodata = `Halo, nama saya ${namaDepan} ${namaBelakang}. umur saya ${umur}`;
console.log(biodata);
