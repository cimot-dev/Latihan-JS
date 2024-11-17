//Operasi String

//Char At
let dataStr = "abcde";
let dataChar = dataStr.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataStr.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataStr.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataStr.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataStr.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);

//menyambung string
let namaDepan = "dhimas";
let namaBelakang = "adhitiya";
let namaLengkap = namaDepan.concat(" ", namaBelakang, " ganteng");
console.log(namaLengkap);
