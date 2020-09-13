function show_login_form(){
    document.getElementById('login_form').style.display = "block";
    document.getElementById('signup-form').style.display = "none";
  	}

function show_signup_form(){
    document.getElementById('signup-form').style.display = "block";
    document.getElementById('login_form').style.display = "none";
  	}

// interactive db.html
function Blood_Sugar_Level(){
    document.getElementById("calculate_db").style.display = "none";
    document.getElementById("db_display").style.display = "block";

    let db_fasting_value = document.getElementById("db_fasting").value;

    if (db_fasting_value >= 100 && db_fasting_value <= 125){
      document.getElementById("normal_sugar_level").style.display = "none";
      document.getElementById("diabetic").style.display = "none";
    }else if (db_fasting_value >= 70 && db_fasting_value <= 99){
      document.getElementByClass("pre-diabetic").style.display = "none";
      document.getElementById("diabetic").style.display = "none";
    }else if (db_fasting_value >= 126){
      document.getElementByClass("pre-diabetic").style.display = "none";
      document.getElementById("normal_sugar_level").style.display = "none";
    }
}