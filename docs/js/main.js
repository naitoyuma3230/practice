let btn = document.getElementsByClassName("readMore");
let text = document.getElementsByClassName("readMoreText");

for (let i = 0; i < btn.length; i++) {
	var openReadMore = () => {
		text[i].classList.remove("readMoreText");
		btn[i].classList.add("readMoreText");
	};

	btn[i].onclick = openReadMore;
}
