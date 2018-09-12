const nav = document.getElementById('site-nav');

if (nav) {
	const menuToggle = document.getElementById('menu-toggle');

	if (menuToggle) {
		menuToggle.addEventListener('click', e => {
			e.preventDefault();
			menuToggle.classList.toggle('collapsed');
			nav.classList.toggle('collapsed');
		});
	}
}