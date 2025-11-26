// let name = "pradeep";
// let city = "banglore";
// let message = `my name is ${name}
//    i live in ${city}`;
// console.log(message);

// object = it is a collaction of kry-value pair

//  write a js Prog
// for (i = 0; i <= 5; i++) {
//   let a = "*";
//   console.log(a.repeat(i));
// }
// Array
// let board={
//     name:"white board",
//     isavilabel:true,
//     write:funcation(){
//         console.log("i can write ")
//     }
// }

// let mobile = {
//   brand: "samsumg",
//   color: ["red", "green", "blue"],
//   Storage: ["256gb", "512gb"],
//   price: "1200",
// };
// console.log(mobile);
// mobile.descriphone = "i have a new phone";
// console.log(mobile);

// non primitive data type
// used to store the collection data that has key pair value
// syntax od object
// let obj();
// let obj=new object();

// let arr = [1, 2, 3, 4, 5];
// let final = 5;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] === final) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
// let arr=[1,2,3,4,5];
// let final=5;
// for (let i = 0 ; i<arr.length; i++){
//   for (let j = 0 ; j<arr.length; j++){
//     if (arr[i] +arr[j] === final){
//       console.log(arr[i],arr[j]);
//     }
//   }
// }

// for (i=0;i<5;i++){
//   let a="*";
//   console.log(a.repeat(i))
// }

// let arr = [1, 2, 3, 4, 5];
// let final = 5;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] === final) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let final = 5;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] === final) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
// let a = "*";
// for (i = 0; i < 5; i++) {
//   console.log(a.repeat(i));
// }

class bank {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  bankbalance() {
    console.log(`my bank balance is ${this.#balance}`);
  }
}
let value = new bank("my phone number");
value.bankbalance();
