// Your code goes here

// document.addEventListener("DOMContentLoaded",function(event){
//     console.log("The Dom has loaded");
// });

// console.log(
//     "This console.log() fires when index.js loads - befofore DOMcontentLoaded is triggered"
// );


 document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
     let p = document.getElementById('text').textContent = "This is really cool!";
  });