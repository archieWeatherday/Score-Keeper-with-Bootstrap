//the first thing i want to do is add option elements to the select numbers 5-10.
let mySelect = document.querySelector("#scoreNumber");
let maxNum = 5;
let p1Score = 0;
let p2Score = 0;
let button1 = document.querySelector("#player1");
let button2 = document.querySelector("#player2");
let resetButton = document.querySelector("#reset");
let player1score = document.querySelector("#player1score");
let player2score = document.querySelector("#player2score");
for(let i=5;i<=10;i++){
	let myOption = document.createElement("option");
	myOption.value = `${i}`;
	myOption.innerText = `${i}`;
	mySelect.append(myOption);
}
function clickButton(){
	//This is fine, but we want to disasble the button when a certain number (maxNum) is reached.
         p1Score++;
	 if(p1Score === maxNum) {
                   this.removeEventListener("click",clickButton);
                   //at this point player 1 has won. So disable both buttons.
                   let butt2 = document.querySelector("#player2")
                   butt2.removeEventListener("click",clickSecondButton);
                   this.disabled = true;
                   butt2.disabled = true;
                   //finally, update the styles
                   player1score.classList.toggle("win");
                   player2score.classList.toggle("lose");
           }

	player1score.textContent = `${p1Score}`;
}
function clickSecondButton(){
         p2Score++;
	 if(p2Score === maxNum){
                  this.removeEventListener("click",clickButton);
                  //do the same thing here, except player 2 wins.
                  let butt1 = document.querySelector("#player1");
                  butt1.removeEventListener("click",clickButton);
                  butt1.disabled = true;
                  this.disabled = true;
                  player2score.classList.toggle("win");
                  player1score.classList.toggle("lose");
          }

                  player2score.innerText =`${p2Score}`;

}
function reset(){
	 p1Score = 0;
          p2Score = 0;
          button1.disabled = false;
          button2.disabled = false;
          button1.addEventListener("click",clickButton);
          button2.addEventListener("click",clickSecondButton);
          //now i need to remove the classes and set the numbers back to 0.
          player1score.innerText = 0;
          player2score.innerText = 0;
          player1score.classList.remove("win","lose");
          player2score.classList.remove("lose","win");
}
//Perfect, that works. Lets add an event listener for inpput for the select.
mySelect.addEventListener("input",function(){
		maxNum = parseInt(this.value);
		reset();
		
})
button1.addEventListener("click",clickButton);
button2.addEventListener("click",clickSecondButton);
//now all i need to do is implement the reset function!
//when i click the reset function, p1score and p2score are reset and the event listeners are added back
resetButton.addEventListener("click",reset);
