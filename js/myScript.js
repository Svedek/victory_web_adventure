function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  document.getElementById("video").src = "resources/video/test_2.mp4";
}

function mainText (form) {
    var inputValue = form.inputbox.value;
	if (inputValue == "eye") {
		document.getElementById("eye").src = "resources/page_components/light_eye_on.png";
	}
	
	if (inputValue == "soul") {
		document.getElementById("soul").src = "resources/page_components/light_soul_on.png";
	}
	
	if (inputValue == "wave") {
		document.getElementById("wave").src = "resources/page_components/light_wave_on.png";
	}
}

function testResults (form) {
    var inputValue = form.inputbox.value;
    alert ("You typed: " + inputValue);
}