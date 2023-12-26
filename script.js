let input = document.getElementById("inBox");
let Button = document.querySelectorAll("button");
let str = "";
let arr = Array.from(Button);
arr.forEach((Button) => {
  Button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      input.value = str;
    } 
    else if (e.target.innerHTML == "AC") {
      str = "";
      input.value = str;
    } 
    else if (e.target.innerHTML == "DE") {
      str = str.substring(0, str.length - 1);
      input.value = str;
    } 
    else {
      str += e.target.innerHTML;
      input.value = str;
    }
  });
});
