let wrapper = document.querySelector(".wrapper");
let slider = document.querySelector(".slider");

let items = [...document.querySelectorAll(".item")]; //* spread syntax
let images = [...document.querySelectorAll(".imgDiv")]; //* spread syntax

let clones = [];
let disableScroll = false;

let clonesWidth, sliderWidth, scrollPosition;

//* loadBackgroundImages
images.forEach((image, idx) => {
	image.style.backgroundImage = `url(images/${idx + 1}.jpg)`;
});

//* createClones
items.forEach((item) => {
	let clone = item.cloneNode(true);
	clone.classList.add("clone");
	slider.appendChild(clone);
	clones.push(clone);
});

//* calculateTotalCloneWidth
function getCloneWidth() {
	let width = 0;
	clones.forEach((clone) => {
		width += clone.offsetWidth;
	});
	return width;
}

//* getVerticalScrollPosition
function getScrollPosition() {
	return window.scrollY;
}

//* InfiniteCarouselLoop
function scrollUpdate() {
	if (window.innerWidth > 760) {
		wrapper.style.overflow = "hidden";
		scrollPosition = getScrollPosition();
		if (clonesWidth + scrollPosition >= sliderWidth) {
			window.scrollTo({ top: 1 });
		} else if (scrollPosition <= 0) {
			window.scrollTo({ top: sliderWidth - clonesWidth - 1 });
		}
		slider.style.transform = `translateX(${-window.scrollY}px)`;

		requestAnimationFrame(scrollUpdate);
	} else {
		wrapper.style.overflow = "scroll";
	}
}

window.addEventListener("resize", onLoad);

//* setInitialSliderState
function onLoad() {
	calculateDimensions();
	document.body.style.height = `${sliderWidth}px`;
	window.scrollTo({ top: 1 });
	scrollUpdate();
}

//* updateDimensions
function calculateDimensions() {
	sliderWidth = slider.getBoundingClientRect().width;
	clonesWidth = getCloneWidth();
}

onLoad();
