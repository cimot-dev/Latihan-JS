// Menggunakan square bracket
const user = {
  name: "Dhimas",
  age: 30,
  email: "johndoe@example.com",
};
console.log(user["email"]);

/* Menggunakan Dot notation */
const admin = {
  name: "Dhimas",
  age: 30,
  email: "johndoe@example.com",
};
console.log(admin.name);

// menggunakan destructuring
const admin1 = {
  id: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};
const { id, email, name, nickname, username, password } = admin1;
console.log(username, email, name, nickname);
