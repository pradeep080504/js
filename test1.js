// // let type = "tier2";
// // switch(type){
// //     case "tier1":
// //         console.log("i have a pakage of 10 lpa");
// //         break;

// // case "tier2":
// //     console.log("i have a pakage of 15lpa");
// //     break;

// // case "tier3":
// //     console.log("i have a pakage of 20lap");
// //     break;
// //     default:
// //         console.log("own business");

// // }
// function pake(type) {
//   if (type == "test1") {
//     console.log("5lpa");
//   } else if (type == "test2") {
//     console.log("7lpa");
//   } else if (type == "test3") {
//     console.log("10lpa");
//   } else {
//     console.log("own business");
//   }
// }
// pake("test1");
// pake("test2");
// pake("other");

// console.log(3 + true);
// console.log(3 - true);
// console.log(3 - false);
// console.log(3 + false);
// console.log("3" + true);
// console.log("3" - true);

// console.log(3 == 3);
// console.log((3 == 3) == 2);
// console.log((((3 == 3) == 3) == 3) == 0);

// console.log(x);
// var x;

// let arr = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1];
// let tree = 3;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     let prev = arr[i - 1];
//     let next = arr[i + 1];

//     if (
//       (prev == 0 && next == 0) ||
//       (prev == 0 && next == undefined) ||
//       (prev == undefined && next == 0)
//     ) {
//       arr[i] = 1;
//       count++;
//     }
//   }
// }
// console.log(arr);
// console.log(`${count} tree are found`);
// console.log(count == tree);

//Arror funvation
// const sun = () => {
//   console.log("hello");
// };

// sun();
// setTimeout(() => {
//   console.log("i have a data");
// }, 5000);

// setInterval(() => {
//   console.log("i have a data");
// }, 5000);
// console.log(+true);
// console.log(Math.max(1, 2, 10, 20));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(144));
// console.log(Math.round(4.9));
// console.log(Math.floor(4.9));

// let name = "pradeep";  //global
// function Outer() {
//   console.log(name);
//   let name2 = "kiran";
//   console.log(name2);
// }

// Outer();

// let name = "pradeep";
// function outer() {
//   let name2 = "kiran";
//   function inner() {
//     let name3 = "kushal";
//     console.log(name);
//     console.log(name2);
//     console.log(name3);
//   }
//   inner();
// }
// outer();

// function possition(step) {
//   if (step <= 2) {
//     return step;
//   }
//   let array = [];
//   array[1] = 1;
//   array[2] = 2;

//   for (let i = 3; i <= step; i++) {
//     array[i] = array[i - 1] + array[i - 2];
//   }
//   return array[step];
// }
// let value = possition(5);
// console.log(value);

// function pake(type) {
//   if (type == "job1") {
//     console.log("lpa 10 ");
//   } else if (type == "job2") {
//     console.log("lpa 12");
//   } else if (type == "job3") {
//     console.log("lap 15");
//   } else {
//     console.log("own business");
//   }
// }

// pake("job1");
// pake("job2");
// let a = "*";
// for (i = 0; i <= 5; i++) {
//   console.log(a.repeat(i));
// }
// for (j = 5; j >= 0; j--) {
//   console.log(a.repeat(j));
// }

// let arr = [1, 2, 3, 4, 5];
// let final = 5;
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] === final) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// let a = "*";
// for (i = 1; i <= 5; i++) {
//   console.log(a.repeat(i));
// }
// for (j = 5; j >= 1; j--) {
//   console.log(a.repeat(j));
// }
// let arr = [2, 3, 2, 5, 1, 1, 3, 1, 1, 4];
// let jmp = 0;

// for (let i = 0; i < arr.length; ) {
//   let currentCoins = arr[i];
//   let max = arr[i];
//   let idx = i;
//   for (let j = i; j <= i + currentCoins; j++) {
//     if (arr[j] > max) {
//       max = arr[j];
//       idx = j;
//     }
//   }
//   if (idx == i) {
//     i = idx + arr[idx];
//   } else {
//     i = idx;
//   }
//   // console.log(max);

//   jmp++;
//   if (i >= arr.length - 1) {
//     break;
//   }
// }
// console.log(jmp);

// class bank {
//   #balance;
//   constructor(balance) {
//     this.#balance = balance;
//     // this keyword is need to reference the current object variable
//   }
//   bankbalance() {
//     console.log(`i have a balance ${this.#balance}`);
//   }
// }
// let value = new bank(2000);
// value.bankbalance();

// console.log(value.#balance);

// class bank {
//   bankbalance() {
//     console.log("hy bases balance");
//   }
//   bankbalance() {
//     console.log("1000");
//   }
// }
// let value = new bank();
// value.bankbalance();

// class DL {
//   isEligible(name, age) {
//     if (age == undefined || age < 18) {
//       console.log("not eligible");
//     } else {
//       console.log("Eligible");
//     }
//   }
// }
// let value = new DL();
// value.isEligible("pradeep");
// value.isEligible("pardeep", 19);

// class bank {
//   constructor(name) {
//     this.name = "axis";
//   }
// }
// class AxisBank extends bank {
//   constructor(name, city) {
//     super(name);
//     this.city = city;
//   }
// }
// let value = new AxisBank("bank", "Bangalure");
// console.log(value);

// callback
// function one(callback) {
//   setTimeout(() => {
//     console.log("one");
//     callback();
//   }, 2000);
// }
// function two() {
//   console.log("two");
// }
// one(two);

// function addmoney(value, callback) {
//   setTimeout(() => {
//     console.log("i have added money", value);
//     callback(value);
//   }, 3000);
// }
// function displayBalance(value) {
//   console.log("my current balance", value);
// }

// addmoney(9000, displayBalance);

function fetchdata(callback) {
  setTimeout(() => {
    console.log("i am fetching data");
    callback();
  }, 1000);
}
function arangedata(callback) {
  setTimeout(() => {
    console.log("i am arangedata data");
    callback();
  }, 2000);
}
function display() {
  setTimeout(() => {
    console.log("i am display data");
  }, 5000);
}
fetchdata(() => {
  arangedata(() => {
    display();
  });
});
// fetchdata();
// arangedata();
// display();
