const weight = document.getElementById('weight');
const height = document.getElementById('height');


function calculate() {


    let bmi = (weight.value / (height.value * height.value)) * 10000;
    bmi = bmi.toFixed(3);

    if (bmi == 0) {
        document.getElementById('result').innerHTML = "Please enter some values" ;
    }
    else if (bmi == Infinity) {
        document.getElementById('result').innerHTML = "Please enter some values" ;
    }
    else if (bmi < 0) {
        document.getElementById('result').innerHTML = "Negative Values not Allowed";
    }
    else if (bmi <= 18.4) {
		document.getElementById('result').innerHTML = 
        "Your BMI is " + bmi + " which means " + "you are Underweight";
        document.getElementById('result').style.color = "red";
	} 
    else if (bmi >= 18.5 && bmi <= 24.9) {
		document.getElementById('result').innerHTML = 
        "Your BMI is " + bmi + " which means " + "You are Normal";
        document.getElementById('result').style.color = "green";
	} 
    else if (bmi >= 25 && bmi <= 29.9) {
		document.getElementById('result').innerHTML = 
        "Your BMI is " + bmi + " which means " + "You are Overweight";
        document.getElementById('result').style.color = "red";
	} 
    else if (bmi >= 30) {
		document.getElementById('result').innerHTML =
         "Your BMI is " + bmi + " which means " + "You are Obese";
        document.getElementById('result').style.color = "blue";
	}


}