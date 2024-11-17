// data constuctur
const productMap = new Map([
  ["1", "Apple"],
  ["2", "Banana"],
  ["3", "Cherry"],
  ["4", "Durian"],
]);

console.log(productMap);

// mennyimpan menggunakan set
const map = new Map();
map.set("buah", "Apple");
console.log(map);
//  mengakses nilai menggunakan get
console.log(map.get("buah"));
//menghapus nilai map
map.delete("buah");
console.log(map);
