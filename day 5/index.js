let x = 10;
function sendmessage() {
  console.log("Welcome to js    ");
  console.log(x);
}
sendmessage();
console.log(x);

function check() {
  if (true) {
    let name = "Webdevelopment";
    var iscloudy = true;
    console.log(name);
  }
  console.log(iscloudy);
}
check();

//call back function in js is a function that is passed as an argument to another function,and it is executedafter the completion of that function
function first() {
  console.log("This is my first function");
}
first();
function second(callback) {
  console.log("This is my second function");
  setInterval(callback, 2000);
}
second(first);

let count = 0;
let input = () => {
  count++;
  console.log(count);
  if (count == 5) {
    InputDeviceInfo();
  }
};
input();
