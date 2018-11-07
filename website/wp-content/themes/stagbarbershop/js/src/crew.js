if (document.getElementsByClassName('page-crew').length) {
	const crew = document.getElementsByClassName('item-crew');
	Array.from(crew).forEach(element => {
		const photos = element.querySelectorAll('.crewmember-photos div');

		if (photos.length) {
			let interval;
			
			element.addEventListener('mouseenter', () => {		
				Array.from(photos).forEach(photo => {
					const img = photo.getElementsByTagName('img')[0];
					const src = img.dataset.src;
					if (src && img.src !== src) {
						img.src = src;
					}
				});

				if (photos[1]) {
					photos[0].classList.remove('d-block');
					photos[1].classList.add('d-block');

					let index = 1;
					let nextIndex = photos[2] ? 2 : 0;
					interval = global.setInterval(() => {
						photos[index].classList.remove('d-block');
						photos[nextIndex].classList.add('d-block');
						index = index === photos.length - 1 ? 0 : index + 1;
						nextIndex = nextIndex === photos.length - 1 ? 0 : nextIndex + 1;
					}, 750);
				}
			});

			element.addEventListener('mouseleave', () => {
				element.getElementsByClassName('d-block')[0].classList.remove('d-block');
				photos[0].classList.add('d-block');
				clearInterval(interval);
			});
		}
	});
}