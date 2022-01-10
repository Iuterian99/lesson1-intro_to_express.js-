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
const port = 3000;

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(port, () => {
  console.log(
    `your lesson1 on express.js is running on https://localhost:${port}`
  );
});
