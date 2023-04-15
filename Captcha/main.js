let submitButton = document.getElementById("submit");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";

//Generate a Text
const textGenerator = () => {
  let generatedText = "";
  
  for (let i = 0; i < 3; i++) {
    //65-90 numbers are capital letters
    generatedText += String.fromCharCode(randomNumber(65, 90));
    //97-122 are small letters
    generatedText += String.fromCharCode(randomNumber(97, 122));
    //48-57 are numbers from 0-9
    generatedText += String.fromCharCode(randomNumber(48, 57));
  }
  return generatedText;
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function drawStringOnCanvas(string) {
  
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //array of text color
  const textColors = ["rgb(0,0,0)", "rgb(130,130,130)"];
  //space between letters
  const letterSpace = 150 / string.length;
  //loop through string
  for (let i = 0; i < string.length; i++) {
    
    const xInitialSpace = 25;
    ctx.font = "20px Roboto Mono";
    ctx.fillStyle = textColors[randomNumber(0, 1)];
    ctx.fillText(
      string[i],
      xInitialSpace + i * letterSpace,
      randomNumber(25, 40),
      100
    );
  }
}

function triggerFunction() {
  userInput.value = "";
  text = textGenerator();
  console.log(text);
  text = [...text].sort(() => Math.random() - 0.5).join("");
  drawStringOnCanvas(text);
}

//call triggerFunction for reload button
reloadButton.addEventListener("click", triggerFunction);

//call triggerFunction after loading
window.onload = () => triggerFunction();

//After submiting
submitButton.addEventListener("click", () => {
  if (userInput.value === text) {
    alert("Success");
  } else {
    alert("Incorrect");
    triggerFunction();
  }
})

function validate(){
    let name=document.getElementById("fname").value + document.getElementById("lname").value;
    let email=document.getElementById("email");
    let phone=document.getElementById("phone");

    if (name.length <3){
        error_message.innerHTML="Enter a valid name!"
        return;
    }

    if (email.value.indexOf("@")==-1 || email.value.length<7){
        error_message.innerHTML="Enter a valid email!"
        return;
    }

    if (phone.value.length!==10){
        error_message.innerHTML="Enter a valid phone number!"
        return;
    }
    console.log("Name: "+name,"Email: "+email.value,"Phone: "+phone.value);
    alert("Form submitted successfully!")
};
