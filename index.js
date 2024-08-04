// String metodlariga oid masalalar

// 1-masala

// let str = "salom bolAlar";
// function wordA(s){
//     let counter = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === 'a' || s[i] === 'A'){
//             counter++
//         }
//     }
//     return counter;
// }

// console.log(wordA(str));

// 2-masala

// let str = "salom";
// function threeLetters(s) {
//     if(s.length <= 3){
//         return s;
//     }
//     return s.slice(-3);
// }
// console.log(threeLetters(str));

// 3-masala

// let str = "salom bolalar yaxshimisizlar";
// let resArr = str.split(' ');
// let res = resArr.map(function(v){
//     return v[0].toUpperCase() + v.slice(1)
// })
// console.log(res.join(' '));

// 4-masala

// let str = "sa lom";
// function boshJoy(s){
//     let newStr = s.replaceAll(" ", "");
//     return newStr
// }
// console.log(boshJoy(str));

// 5-masala

// let str = "salom";
// function teskari(s){
//     let arr = s.split('');
//     let r = arr.reverse();
//     let m = r.join('')
//     return m
// }
// console.log(teskari(str));

// 6-masala

// let str = "salom";
// function belgilar(s){
//     return s
// }
// console.log(belgilar(str.length));

// 7-masala

// let str = 'salom';
// function qaytarish(s){
//     return s.repeat(3);
// }
// console.log(qaytarish(str));

// 8-masala

// let str = "sa1lom";
// function faqatSonlar(s) {
//   let num = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] >= "0" && s[i]<= '9') {
//       num += s[i];
//     }
//   }
//   return num;
// }
// console.log(faqatSonlar(str));

// 9-masala

// function birinchiSoz(str) {
//     let words = str.trim().split(' ');
//     return words[0];
// }
// console.log(birinchiSoz('salom bolalar'));

// 10-masala

// let str = 'salom js ni organuvchilar';
// function jsniTop(s){
//     return s.includes('js')
// }
// console.log(jsniTop(str));

// Massivlarga oid masalalar

// 1-masala

// let arr = [1, 2, 3, 4, 5, 6];
// function maxElement(arg) {
//   let max = arg[0];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > max ){
//         max = arg[i]
//     }
//   }
//   return max;
// }
// console.log(maxElement(arr));

// 2-masala

// let arr = [1,2,3,4,5,6];
// function juftSon(arg){
//     let juftSonlar = []
//     for(let i = 0; i < arg.length; i++){
//         if(arg[i] % 2 == 0){
//             juftSonlar.push(arg[i])
//         }
//     }
//     return juftSonlar
// }
// console.log(juftSon(arr));

// 3-masala

// let arr = [1,2,3,4,5,6,7,8];
// function sumNUm(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum;
// }
// console.log(sumNUm(arr));

// 4-masala

// let arr = [1,2,3,4,5,6,7,8];
// function ikkiBarobar(arg){
// return arg.map(function(v){
//         return v * 2
//     })
// }
// console.log(ikkiBarobar(arr));

// 5-masala

// let arr = [1,-2,3,-4,5,-6];
// function ikkiBarobar(arg){
// return arg.filter(function(v){
//         return v > 0
//     })
// }
// console.log(ikkiBarobar(arr));

// 7-masala

// function twoArr(arr1,arr2) {
//     return arr1.concat(arr2);
// }
// let arg1 = [1,2,3];
// let arg2 = [4,5,6]
// console.log(twoArr(arg1,arg2));

// 8-masala

// let arr = [1,2,3,4,5,6]
// function teskari(arg) {
//     return arg.reverse();
// }
// console.log(teskari(arr));

// 9-masala

// let arr = [1,2,3,4,5,6];
// function toqIndex(arg){
//     let res = []
//     for(let i = 0; i < arg.length; i++){
//         if(i % 2 == 1){
//             res.push(arg[i])
//         }
//     }
//     return res
// }
// console.log(toqIndex(arr));

// 10-masala

// Obyekt va Massivlarga oid masalalar

// 1-masala

// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function  getOldestPersonName(people){
//     let res = people[0];
//     for(let i = 0; i < people.length; i++){
//         if(people[i].age > res.age){
//             res = people[i] 
//         }
//     }
//     return res.name
// }
// console.log( getOldestPersonName(people));

// 4-masala

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// function getTotalAge(people) { 
//     let sum = 0;
//         people.forEach(function(person) {
//          sum += person.age;  
//     }); 
//     return sum; 
// }

// console.log(getTotalAge(people));


// 7-masala

// const people = [
//     { name: "Ali", age: 25, gender: "male" },
//     { name: "Vali", age: 30, gender: "male" },
//     { name: "Hasan", age: 28, gender: "male" },
//     { name: "Salima", age: 22, gender: "female" }
// ];
// function getFemales(people) {
//     return people.filter(function(person){
//         return person.gender === "female"
//     })
// }
// console.log(getFemales(people));

// 8-masala

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// function incrementAges(people) {
//     return people.map(function(person) {
//         return {
//             name: person.name,
//             age: person.age + 1
//         };
//     });
// }

// console.log(incrementAges(people));

