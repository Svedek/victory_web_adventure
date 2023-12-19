var eye = false;
var soul = false;
var wave = false;
var next = null;

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  document.getElementById("video").src = "resources/video/test_2.mp4";
}

function mainText (form) {
    var inputValue = form.inputbox.value;
	if (inputValue == "eye") {
		document.getElementById("eye").src = "resources/page_components/light_eye_on.png";
		document.getElementById("video").src = "resources/video/test_2.mp4";
		eye = true;
	}
	
	if (inputValue == "soul") {
		document.getElementById("soul").src = "resources/page_components/light_soul_on.png";
		document.getElementById("video").src = "resources/video/test_2.mp4";
		soul = true;
	}
	
	if (inputValue == "wave") {
		document.getElementById("wave").src = "resources/page_components/light_wave_on.png";
		wave = true;
	}
	
	if (eye && soul && wave) {
		next = document.createElement("p");
	}
}

function testResults (form) {
    var inputValue = form.inputbox.value;
    alert ("You typed: " + inputValue);
}