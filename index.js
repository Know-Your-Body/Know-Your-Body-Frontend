// hb.html
function Hemoglobin(){
	document.getElementById("calculate_Hb").style.display = "none";
	document.getElementById("hb_display").style.display = "block"

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