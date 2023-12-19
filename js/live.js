var visions = false;
var trapped = false;
var time = false;
var proceed = false;

var extra_content = null;


// VISIONS -> click -> click 2 -> click 3 -> start
// TRAPPED -> MOTIONS -> QUESTION, CHOICES -> start
// TIME -> DIFFERENT -> SAFE, LIE -> PLANS, FUTURE -> start

function mainText (form) {
    var inputValue = form.inputbox.value;
	inputValue = inputValue.toLowerCase();
	
	if (inputValue == "visions") {
		clearScene();
		document.getElementById("video").src = "resources/video/VISIONS.mp4";
		
		
		extra_content = document.createElement("div");
		
		var header = document.createElement("h2");
		var txt = document.createTextNode("Find the mark");
		header.appendChild(txt);
		extra_content.appendChild(header);
		
		var img = document.createElement("img");
		img.src = "resources/page_components/mark.jpg";
		img.useMap = "#mark-map";
		img.width = 400;
		extra_content.appendChild(img);
		
		var extra_div = document.getElementById("extra-action");
		extra_div.appendChild(extra_content);
			
	}
	
	if (inputValue == "trapped") {
		clearScene();
		document.getElementById("video").src = "resources/video/TRAPPED.mp4";
	}
	
	if (inputValue == "motions") {
		clearScene();
		document.getElementById("video").src = "resources/video/MOTIONS.mp4";
	}
	
	if (inputValue == "question") { // TODO
		clearScene();
		extra_content = document.createElement("div");
		
		var header = document.createElement("h2");
		var txt = document.createTextNode("When do we meet?");
		header.appendChild(txt);
		extra_content.appendChild(header);
		
		var extra_div = document.getElementById("extra-action");
		extra_div.appendChild(extra_content);
	}
	
	if (inputValue == "choices") {
		clearScene();
		document.getElementById("trapped_light").src = "resources/page_components/trapped_on.png";
		document.getElementById("video").src = "resources/video/START.mp4";
		trapped = true;
	}
	
	if (inputValue == "time") {
		clearScene();
		document.getElementById("video").src = "resources/video/TIME.mp4";
	}
	
	if (inputValue == "different") {
		clearScene();
		document.getElementById("video").src = "resources/video/DIFFERENT.mp4";
	}
	
	if (inputValue == "safe") { // TODO
		clearScene();
		extra_content = document.createElement("div");
		
		var header = document.createElement("h2");
		var txt = document.createTextNode("What is the code?");
		header.appendChild(txt);
		extra_content.appendChild(header);
		
		var extra_div = document.getElementById("extra-action");
		extra_div.appendChild(extra_content);
	}
	
	if (inputValue == "lie") {
		clearScene();
		document.getElementById("video").src = "resources/video/LIE.mp4";
	}
	
	if (inputValue == "plans") { // TODO
		clearScene();
		extra_content = document.createElement("div");
		
		var header = document.createElement("h2");
		var txt = document.createTextNode("O- X- OX X- XX");
		header.appendChild(txt);
		extra_content.appendChild(header);
		
		var extra_div = document.getElementById("extra-action");
		extra_div.appendChild(extra_content);
	}
	
	if (inputValue == "future") {
		clearScene();
		document.getElementById("time_light").src = "resources/page_components/time_on.png";
		document.getElementById("video").src = "resources/video/START.mp4";
		time = true;
	}
	
	if (visions && trapped && time) {
		if (proceed == false) {
			var proceed_light = document.getElementById("proceed_light");
			proceed_light.src = "resources/page_components/proceed_on.png";
			proceed_light.onclick = function() {activate('end')};
			proceed = true;
		}
	}
}

function clearScene (form) {
	if (extra_content != null) {
		extra_content.remove();
	}
}

function activate(thing) {
	if (thing == "details") {
		clearScene();
		
		extra_content = document.createElement("div");
		
		var header = document.createElement("h2");
		var txt = document.createTextNode("Find the skull");
		header.appendChild(txt);
		extra_content.appendChild(header);
		
		var img = document.createElement("img");
		img.src = "resources/page_components/details.jpg";
		img.useMap = "#details-map";
		img.width = 600;
		extra_content.appendChild(img);
		
		var extra_div = document.getElementById("extra-action");
		extra_div.appendChild(extra_content);
	}
	
	if (thing == "complex") {
		document.getElementById("video").src = "resources/video/HAND.mp4";
		clearScene();
		
		extra_content = document.createElement("div");
		
		var header = document.createElement("h2");
		var txt = document.createTextNode("Find the mark");
		header.appendChild(txt);
		extra_content.appendChild(header);
		
		var img = document.createElement("img");
		img.src = "resources/page_components/complex.jpg";
		img.useMap = "#complex-map";
		img.width = 320;
		extra_content.appendChild(img);
		
		var extra_div = document.getElementById("extra-action");
		extra_div.appendChild(extra_content);
	}
	
	if (thing == "vision_complete") {
		document.getElementById("video").src = "resources/video/START.mp4";
		clearScene();
		document.getElementById("vision_light").src = "resources/page_components/vision_on.png";
		document.getElementById("video").src = "resources/video/START.mp4";
		visions = true;
		
		if (visions && trapped && time) {
			if (proceed == false) {
				var proceed_light = document.getElementById("proceed_light");
				proceed_light.src = "resources/page_components/proceed_on.png";
				proceed_light.onclick = function() {activate('end')};
				proceed = true;
			}
		}
	}
	
	if (thing == "end") {
		document.location.href = "end.html";
	}
}