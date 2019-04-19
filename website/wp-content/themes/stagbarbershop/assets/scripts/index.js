import './navbar';
import './slider';
import './entry-header';
import './crew';

Array.from(document.querySelectorAll('.wp-block-button__link')).forEach(element => {
	if (element.href.includes('vagaro.com')) {
		element.target = '_blank';
		element.rel = 'noopener';
	}
});
