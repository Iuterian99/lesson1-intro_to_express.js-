//! basic knowledge on HTTP, API, RESTAPI, & EXPRESS.JS, dependency, dev-dependency, Framework,  Library
/*
Clinet va Server orasidagi aloqani "http" yaratadi va API "http" yaratgan aloqada xizmatchi bo`ladi
API ni dasturchila yaratadi 
restourant bu "http", APIlar bu afitsantlar ya`ni oshpazlar(server) va clientlar orasida xizmat qilib yuradi!
!RestApi: Rest---> arxitektura va tushuncha(Umumiy keladigan ma`lumotni xolati va formati)
Asosan "http" yordamida ko`tarilgan "API" lar "RestApi" lar deyiladi yoki http bilan eng yaxshi chiqisha oladigan APIlar "RestApi"lar deyiladi!
!dependency:
bu proekt tuzish uchun kerak bo`ladigan texnalogiyalar(packagelar)!
!dev-dependency:
dasturchiga local development va testing uchun kerak bo`ladigan texnalogiya(packagelar)!(example: nodemon)
!Framework: of Javascript is node.js, express.js
maxusus structuraga ega bo`lgan qurilma qaysiki dasturchi unga moslashishga majbur! bu asosan ishni yengillatish va barcha dasturchilarni bir xil styleda yozish uchun yaratiladi
!Library: of Javascript is bootstrapt or React.js
shunchaki class(funksiya)lar to`plami biz shunchaki ularni chaqirish orqali ishlata olamiz!
!package.json 
bizni yaratgan dasturimiz haqidagi 80% informatsiya(versiya, joylashuvi, ishlatilgan, o`rnatilgan packagelari) beradi.
!package-lock.json 
har bir o`rnatilgan package haqida detalni ma`lumot beradi!
!express.js
bu node.js uchun tezkor, moslashuvchan, minimalistik web framework!
*/

const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
app.use(express.json()); // "json" formatda keladigan ma`lumotlarni aftamatik tarzda parse qib yuboradi!
app.use(cors());

let books = [
  {
    id: 1,
    name: "O`tgan kunlar",
    cost: "$50",
  },
  {
    id: 2,
    name: "5 bolalik yigitcha",
    cost: "$40",
  },
  {
    id: 3,
    name: "Mehrobdan Chayon",
    cost: "$70",
  },
  {
    id: 4,
    name: "Sunbula",
    cost: "$30",
  },
  {
    id: 5,
    name: "Sehrli shamchiroq",
    cost: "$10",
  },
];

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/books", (req, res) => {
  //! ---> "/books" bu joy "routing" deyiladi books ni o`zi "route" deyiladi
  res.send(books); // sent qilsak yuboradigan ma`lumotimiz qanaqa formatda bo`lsa xuddi shunday bo`lib boradi.
});

app.get("/books/:id/", (req, res) => {
  //! "Route"dan keyin keladigan qism "params" deyiladi
  const { id } = req.params;
  const foundBooks = books.find((e) => e.id == id);
  res.send(foundBooks); // "res.json" qilsak yuboradigan ma`lumotimiz qanday bo`lishidan qat`iy nazar json farmatga o`girib yuboradi
});

app.post("/newBook", (req, res) => {
  const { name } = req.body;
  books.push({ id: books.length + 1, name });
  res.send(books);
});

app.put("/updateBook", (req, res) => {
  const { id, name } = req.body;
  books.filter((e) => (e.id == id ? (e.name = name) : e));
  res.send(books);
});

app.delete("/deleteBook", (req, res) => {
  const { id } = req.body;
  books = books.filter((e) => e.id !== id);
  res.send(books);
});

app.listen(port, () => {
  console.log(
    `your lesson1 on express.js is running on https://localhost:${port}`
  );
});
