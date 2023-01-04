// getfunction for print history value
function getHistory() {
	return document.getElementById("history-value").innerText;
}
// alert(getHistory());
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
// get answer

function getOutput(){
	return document.getElementById("output-value").innerText;
}
// alert
function printOutput(num){
	if (num== ""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}
	
}
function getFormattedNumber(num){
	// adds
	if(num ==""){
		return "";
	}
	var n = Number(num);
	var value =n.toLocaleString("en");
	return value;
}
// printOutput("78536997");
// reverse numbers
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));

}
// alert(reverseNumberFormat(getOutput()));
var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click',function(){
		// alert("the clicked button is: "+this.id);
		// first if
		if(this.id == "clear"){
			printHistory("");
			printOutput("");

		}//end of if one

		// else if 
		else if(this.id == "backspace"){
			var output = reverseNumberFormat(getOutput()).toString();
			if(output){
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		//end of else if

		// else
		else{
			var output = getOutput();
			var history = getHistory();
			// adda
			if(output == "" && history !==""){
				if(isNaN(history[history.length-1])){
					history = history.substr(0,history.length-1);

				}

			}
			// end addas
			// if(output !=""){ before change
			// 	output = reverseNumberFormat(output);
			if(output !="" || history !=""){ //after change
				//condition true or false
				output = output =="" ?
				output: reverseNumberFormat(output);
				history = history + output;

				if(this.id =="="){
					var result = eval(history);
					printOutput(result);
					printHistory("");
				}

				else{
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}

			}

		}// end of else

	});
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++){
	number[i].addEventListener('click',function(){
		// alert("the clicked number is: "+this.id );
		var output = reverseNumberFormat(getOutput());

		if(output !=NaN){//iff output is value number
			output = output+this.id;
			printOutput(output);
		}

	});
 }
