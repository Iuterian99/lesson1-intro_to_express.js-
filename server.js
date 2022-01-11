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
    info: `O'tgan kunlar — 1969-yilda o'zbek yozuvchisi Abdulla Qodiriyning shu nomli romani asosida rejissor Yo'ldosh A'zamov tomonidan tasvirga olingan film. Filmda (78 ta so'z) - 19:26, 14-Dekabr 2021.
    O'tkan kunlar birinchi roman. 1969-yil „O'zbekfilm“ kinostudiyasida ushbu roman asosida „O'tgan kunlar“ nomli film suratga olingan.`,
    cost: "$50",
  },
  {
    id: 2,
    name: "5 bolalik yigitcha",
    info: `Bolalik - beboshlik, deymiz. Ammo bu davr zahmatlarga mashaqqatlarga limmo-lim bo'lsa-chi? Beboshlikka, sho'xliklarga o'rin qolarmikin? Bunday bolaning qalbi, dunyosi kattalar hayotiga yaqin bo'ladi. O'zi bilib-bilmay tafakkuri o'sib, irodasi metin insonga aylanadi 
    Muallif: Xudoyberdi To'xtaboyev`,
    cost: "$40",
  },
  {
    id: 3,
    name: "Mehrobdan Chayon",
    info: `o'zbek romanchiligining asoschisi Abdulla Qodiriyning ikkinchi yirik asari 1928-yil fevralda yozib tugatilgan. Roman birinchi marta 1929-yil Samarqandda bosilib chiqdi. Roman mavzui 19-asr hodisalari — „xon zamonlari“ davridagi o'zboshimchaliklarni ko'rsatishga qaratilgan bo'lsada, unda roman yozilgan davr ruhi kuchli singdirilgan.`,
    cost: "$70",
  },
  {
    id: 4,
    name: "Baxtiyor oila",
    info: `Bu kitobda islom dinining oila munosabatlariga oid ahkomlari keng va batafsil bayon etilgan bo'lib, musulmon kishi oila hayotiga oid bilishi kerak bo'lgan barcha masalalarni qamrab olgan. Kitobda insonga ikki dunyo saodati yo'lini ko'rsatuvchi islom dinida baxtli oila qurish, er va xotinning huquq, burch va mas'uliyati, ota-ona va qaynona-kelin munosabatlari, kelin-kuyov tanlash haqida so'z boradi. , aqiqa, farzand tarbiyasi, rahm-shafqat va bir qancha masalalar bugungi kunda oyatlar, hadislar, salaf taqvodorlarining hayoti kabi ko'plab dolzarb mavzular ta'limotlari orqali muhokama qilinadi.`,
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
