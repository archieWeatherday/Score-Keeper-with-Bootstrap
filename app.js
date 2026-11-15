//the first thing i want to do is add option elements to the select numbers 5-10.
let mySelect = document.querySelector("#scoreNumber");
for(let i=5;i<=10;i++){
	let myOption = document.createElement("option");
	myOption.value = `${i}`;
	myOption.innerText = `${i}`;
	mySelect.append(myOption);
}
let maxNum = 5;
let p1Score = 0;
let p2Score = 0;
function clickButton(){
	//This is fine, but we want to disasble the button when a certain number (maxNum) is reached.
	 if(p1Score === maxNum) {
		 this.removeEventListener("click",clickButton);
		 //at this point player 1 has won. So disable both buttons.
		 let butt2 = document.querySelector("#player2")
		 butt2.removeEventListener("click",clickSecondButton);
		 this.disabled = "true";
		 butt2.disabled = "true";
		 //finally, update the styles
		 document.querySelector("#player1score").classList.toggle("win");
		 document.querySelector("#player2score").classList.toggle("lose");
	 }
	 else{
         	p1Score++;
		document.querySelector("#player1score").textContent = `${p1Score}`;
	 }
}
function clickSecondButton(){
	if(p2Score === maxNum){
		this.removeEventListener("click",clickButton);
		//do the same thing here, except player 2 wins.
		let butt1 = document.querySelector("#player1");
		butt1.removeEventListener("click",clickButton);
		butt1.disabled = "true";
		this.disabled = "true";
		document.querySelector("#player2score").classList.toggle("win");
		document.querySelector("#player1score").classList.toggle("lose");
	}
           else{
                  p2Score++;
                  document.querySelector("#player2score").innerText =`${p2Score}`;
           }
}
//Perfect, that works. Lets add an event listener for inpput for the select.
mySelect.addEventListener("input",function(){
		maxNum = parseInt(this.value);
		
})
//now i need to select the buttons and add an event listener to update the h1 each time the button is pressed until a specific number is reached.
let button1 = document.querySelector("#player1");
button1.addEventListener("click",clickButton);
let button2 = document.querySelector("#player2");
button2.addEventListener("click",clickSecondButton);
//now all i need to do is implement the reset function!


