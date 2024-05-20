const passinput = document.querySelector(".Password-box input"),
  copyicon = document.querySelector(".Password-box .copyicon"),
  range = document.querySelector(".range-box input"),
  rangevalue = document.querySelector(".range-box .value"),
  generatebtn = document.querySelector(".btn");

//all the characters and numbers and symbols//
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=[]{}|;:,.<>?";

let allcharacters = uppercase + lowercase + numbers + symbols; // a variable combination of all the characters and numbers and symbols to use in the function
const CreatePassword = () => {
  let newpass = "";
  for (let i = 0; i < range.value; i++) {
    newpass += allcharacters.charAt(
      Math.floor(Math.random() * allcharacters.length)
    );
  }
  passinput.value = newpass;
  copyicon.classList.replace("uil-file-check-alt", "uil-copy");
};

range.addEventListener("input", () => {
  rangevalue.innerText = range.value;
  // CreatePassword();
});

copyicon.addEventListener("click", () => {
  navigator.clipboard.writeText(passinput.value);
  copyicon.classList.replace("uil-copy", "uil-file-check-alt");
});
// CreatePassword();
generatebtn.addEventListener("click", CreatePassword);
