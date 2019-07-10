const tinySlider = global.tns;
const slider = document.getElementById('slider');
if (tinySlider && slider) {
	tinySlider({
		container: slider,
		mode: slider.dataset.mode || 'carousel',
		lazyload: slider.dataset.lazyload || false,
		controls: slider.dataset.controls || false,
		nav: slider.dataset.nav || false,
		autoplay: slider.dataset.autoplay || true,
		touch: slider.dataset.touch || false
	});
}