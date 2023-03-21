function togglelive() {
	var live = document.getElementById("live_click");
	live.classList.toggle("turnlive");

	var livebtn = document.getElementById("live_ellipse");
	livebtn.classList.toggle("livebtn1");
	livebtn.classList.toggle("livebtn2");
}

function languages() {
	var lan_container = document.getElementById("lan_container");
	var geo = document.getElementById("geo");
	var eng = document.getElementById("eng");
	var lan_svg = document.getElementById("lan_svg");
	eng.style.display = "block";
	geo.style.display = "block";
	lan_svg.style.display = "none";

	document.getElementById("eng").onclick = function() {
		geo.style.display = "none";
		lan_svg.style.display = "block";
		lan_svg.style.transform = "rotate(90deg)";
	};

	document.getElementById("geo").onclick = function() {
		eng.style.display = "none";
		lan_svg.style.display = "block";
		lan_svg.style.transform = "rotate(90deg)";
	};
}
var imgs = ["./imgs/1.png", "./imgs/2.png", "./imgs/3.png", "./imgs/4.png"];
var imgsinfo = [
	"2300 M Public Space1",
	"5100 M2 Public Space",
	"3300 M2 Public Space",
	"5160 M2 Public Space"
];

window.onload = function() {
	var n = 0;
	var container = document.getElementById("imgs");
	var buttons = document.getElementById("buttons");
	for (var i = 0; i <= imgs.length - 1; i++) {
		if (i < 1) {
			var img = document.createElement("img");
			img.src = imgs[1];
			img.classList.add("slider_img");
			container.appendChild(img);
		}

		document.getElementById("buttons").innerHTML +=
			"<div id='active" +
			i +
			"'>" +
			'<div class="slider_info none" id="' +
			"info" +
			i +
			'">' +
			imgsinfo[i] +
			"</div>" +
			'<button class="img_btn"  onclick="showimg(this.id)" id=' +
			i +
			">0 " +
			(i + 1) +
			"</button>" +
			"<div>";
	}
};

function showimg(button_id) {
	var container = document.getElementById("imgs");
	console.log(button_id);
	var buttons = document.getElementById("buttons");
	var div_container = document.getElementById("div_container");

	var n = 0;
	for (var i = 0; i < imgs.length; i++) {
		document.getElementById("active" + [i]).classList.remove("active_btn");
		document.getElementById("info" + [i]).style.display = "none";
		if (button_id == i) {
			var img = document.createElement("img");
			img.src = imgs[i];
			document.getElementById("imgs").innerHTML = "";
			container.appendChild(img);

			document.getElementById("active" + [i]).classList.add("active_btn");
			document.getElementById("info" + [i]).style.display = "block";
		}
	}
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
