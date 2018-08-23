const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');
menuToggle.addEventListener('click', e => {
	e.preventDefault();
	menuToggle.classList.toggle('collapsed');
	nav.classList.toggle('collapsed');
});

const postThumbnail = document.getElementsByClassName('post-thumbnail')[0];
if (postThumbnail) {
	global.addEventListener('scroll', () => {
		const y = global.scrollY;
		postThumbnail.style.transform = `translateY(-${parseInt(y / 2, 10)}px)`;
	});
}

const tinySlider = global.tns;
const slider = document.getElementById('slider');
if (tinySlider && slider) {
	tinySlider({
		container: slider,
		controls: false,
		nav: false,
		autoplay: true,
		touch: false
	});
}