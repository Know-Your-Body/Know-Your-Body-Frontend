function show_login_form(){
    document.getElementById('login_form').style.display = "block";
    document.getElementById('signup-form').style.display = "none";
  	}

function show_signup_form(){
    document.getElementById('signup-form').style.display = "block";
    document.getElementById('login_form').style.display = "none";
  	}
 

// bmi.html
(function() {
    document.getElementById("bmi-result").style.display = "none";

})();

function Body_Mass_Index() {
    let height = document.getElementById("height_input").value;
    let weight = document.getElementById("weight_input").value;
    let BMI = (weight/height**2)*10000;

    if (BMI < 18.5) {
    	document.getElementById("bmi-result").style.display = "block";
      	document.getElementById("underweight").style.display = "block";
      	document.getElementById("normal").style.display = "none";
     	document.getElementById("overweight").style.display = "none";
      	document.getElementById("obese").style.display = "none";
    }else if (BMI >= 18.5 && BMI <= 24.9) {
    	document.getElementById("bmi-result").style.display = "block";
      	document.getElementById("normal").style.display = "block";
      	document.getElementById("underweight").style.display = "none";
      	document.getElementById("overweight").style.display = "none";
      	document.getElementById("obese").style.display = "none";
    }else if (BMI >= 25 && BMI <= 29.9) {
    	document.getElementById("bmi-result").style.display = "block";
		document.getElementById("overweight").style.display = "block";
		document.getElementById("underweight").style.display = "none";
		document.getElementById("normal").style.display = "none";
		document.getElementById("obese").style.display = "none";
    }else if (BMI >= 30) {
    	document.getElementById("bmi-result").style.display = "block";
      	document.getElementById("obese").style.display = "block";
      	document.getElementById("underweight").style.display = "none";
      	document.getElementById("normal").style.display = "none";
      	document.getElementById("overweight").style.display = "none";
    }
}