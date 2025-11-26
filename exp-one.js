// function outer() {
//   let name = "pradeep";
//   console.log(name);

//   function inner() {
//     let name2 = "kiran";
//     console.log(name2);
//     console.log("--------");
//   }
//   return inner;
// }
// let value = outer();
// value();
// value();
// value();

// closeer is funcation n that will return outer variable after data fnncation is closed

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log("i have counte", count);
//     console.log("---------------");
//   }
//   return inner;
// }
// let value = outer();
// value();
// value();

// function outer() {
//   let amount = 2000;
//   function addManey(value) {
//     amount = amount + value;
//     console.log("i have amont", amount);
//     console.log("---------------");
//   }
//   return addManey;
// }
// let value = outer();
// value(1000);
// value(1000);
// setTimeout(() => {
//   console.log("value one");
// }, 3000);
// setTimeout(() => {
//   console.log("value two");
// }, 2000);
// setTimeout(() => {
//   console.log("value three");
// }, 1000);
// let a = 6;
// let s = 1;
// for (i = 1; i < a; i++) {
//   s = s * i;
//   console.log(s);
// }
// let arr = [1, 2, 3, 4, 5];
// let final = 4;
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] === final) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
// function outhe() {
//   let name = "pradeep";
//   console.log(name);
//   function inner(){
//     let name1="kushal";
//     console.log(name1)
//     console.log("-------");
//   }
//   return inner;
// }
// let value=outhe();
// value();
// value();

// function speedinding() {
//   let speed = 0;
//   function accelerate() {
//     speed = speed + 10;
//     console.log("my vahicle is at speed" + speed);
//   }
//   return accelerate;
// }
// let car = speedinding();
// car();
// car();

// let oqj = {
//   name: "pradeep",
//   sayhallo: function () {
//     console.log("my name is " + this.name);
//   },
// };
// oqj.sayhallo();
// console.log(oqj.name);

// class house {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }
// let value = new house("pradeep", "red");
// console.log(value);
// let final = new house("lyer", "green");
// console.log(final);

// class house {
//   constructor(name) {
//     this.name = name;
//   }
//   myhouse() {
//     console.log(`my house name is ${this.name}`);
//   }
// }
// let value = new house("house");
// value.myhouse();
// class myhouse extends house {}
// let value = new myhouse("pradeep");
// value.myhouse();

// class mobile {
//   buyproduct() {
//     console.log("i am buing a product");
//   }
// }
// class apple extends mobile {
//   buyproduct() {
//     console.log("i am doing to buy a apple mobile");
//   }
// }
// class samsumg extends mobile {
//   buyproduct() {
//     console.log("buying samsung mobile");
//   }
// }

// let vlaue = new mobile();
// vlaue.buyproduct();
// let value = new apple();
// value.buyproduct();
// function outer() {
//   let name = "pradeep";

//   console.log(name);
//   function inner() {
//     let name2 = "kushal";
//     console.log("------------");
//     setTimeout(() => {
//       console.log(name2);
//       console.log("------------");
//     }, 2000);
//     let name3 = "gagan";
//     setTimeout(() => {
//       console.log(name3);
//       console.log("------------");
//     }, 1000);
//   }
//   return inner;
// }
// let value = outer();
// value();

// class house {
//   constructor(name) {
//     this.name = name;
//   }
//   myhouse() {
//     console.log(`house name ${this.name}`);
//   }
// }
// let value = new house("vash");
// value.myhouse();
let item;
let values = {
  name: "iphone17",
  compani: item || "apple",
  name: "iphone15",
  compani: item || "apple",
  name: "s24fe",
  compani: item || "samsung",
};
console.log(values);
values("apple");
