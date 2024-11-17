// menggunakan array from dan digunakan untuk menyalin array
const user = new Array("dhimas, rahmat, indra");
const customer = Array.from(user);
console.log(customer);

// menggunakan array literals
const user2 = ["dhimas", "rahmat", "indra"];
console.log(user2);

// mengakses elemen array
const myArray = [42, 55, 30];
console.log(myArray[1]);

// manipulasi nilai array (indek)
const myArray2 = [42, 55, 30];
myArray2[1] = 100;
console.log(myArray2);

// manipulasi array push
const myArray3 = [42, 55, 30];
myArray3.push(100);
console.log(myArray3);
