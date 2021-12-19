// All this is for is to get an inpput from the html, run through js and output it through html or css, idk

let Click_Amount = 0;
function Click() {
  //   alert("Hallo World");
  Click_Amount++;
  Color();
}

function Color() {
  if (Click_Amount % 2 === 0) {
    console.log("Nice by 2"); // Color blue with css
    // document.querySelector("title 2 click");
  } else {
    // document.querySelector("one click my friend :D");
  } // red
}

function Click2() {
    alert("Hallo World");
    console.log("Click_Amount");
}