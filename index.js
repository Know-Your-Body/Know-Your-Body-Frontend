// index.html
function show_login_form(){
    document.getElementById('login-form-container').style.display = "flex";
	document.getElementById('signup-form-container').style.display = "none";
	document.getElementsByClassName('login-signup-content')[0].style.display = "none";
  	}

function show_signup_form(){
    document.getElementById('signup-form-container').style.display = "flex";
    document.getElementById('login-form-container').style.display = "none";
	document.getElementsByClassName('login-signup-content')[0].style.display = "none";
  	}

// hb.html
function Hemoglobin(){
	document.getElementById("calculate_Hb").style.display = "none";
	document.getElementById("hb_display").style.display = "flex"

	let hemoglobin = document.getElementById("hemoglobin").value;
	document.getElementById("hemoglobin_level").innerHTML = hemoglobin;

	if (document.getElementById("male").checked == true){
	  document.getElementById("gender").innerHTML="male";

	  if (hemoglobin < 13.5){
	    document.getElementById("normal_hemoglobin_level").style.display = "none";
	    document.getElementById("high_hemoglobin").style.display = "none";

	  }else if (hemoglobin >= 13.5 && hemoglobin <= 17.5){
	    document.getElementById("anemia").style.display = "none";
	    document.getElementById("high_hemoglobin").style.display = "none";

	  }else if (hemoglobin > 17.5){
	    document.getElementById("anemia").style.display = "none";
	    document.getElementById("normal_hemoglobin_level").style.display = "none";
	  }

	}else if (document.getElementById("female").checked == true) {
	  document.getElementById("gender").innerHTML="female";

	  if (hemoglobin < 12){
	    document.getElementById("normal_hemoglobin_level").style.display = "none";
	    document.getElementById("high_hemoglobin").style.display = "none";

	  }else if (hemoglobin >= 12 && hemoglobin <= 15.5){
	    document.getElementById("anemia").style.display = "none";
	    document.getElementById("high_hemoglobin").style.display = "none";

	  }else if (hemoglobin > 15.5){
	    document.getElementById("anemia").style.display = "none";
	    document.getElementById("normal_hemoglobin_level").style.display = "none";
	  }
	}
}

// db.html
function Blood_Sugar_Level(){
	let db_fasting_value = document.getElementById("db_fasting").value;

	if (db_fasting_value < 70) {
		document.getElementById("db_input_message").innerHTML = 'Too low or invalid value.'
		return
	}
    document.getElementById("calculate_db").style.display = "none";
    document.getElementById("db_display").style.display = "flex";


    if (db_fasting_value >= 100 && db_fasting_value <= 125){
      document.getElementById("normal_sugar_level").style.display = "none";
      document.getElementById("diabetic").style.display = "none";
    }else if (db_fasting_value >= 70 && db_fasting_value <= 99){
      document.getElementById("pre_diabetic").style.display = "none";
      document.getElementById("diabetic").style.display = "none";
    }else if (db_fasting_value >= 126){
      document.getElementById("pre_diabetic").style.display = "none";
      document.getElementById("normal_sugar_level").style.display = "none";
	}
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

