if (document.getElementsByClassName('page-crew')[0]) {
	const crew = document.querySelectorAll('.item-crew a');
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
					photos[0].classList.remove('active');
					photos[1].classList.add('active');

					let index = 1;
					let nextIndex = photos[2] ? 2 : 0;
					interval = global.setInterval(() => {
						photos[index].classList.remove('active');
						photos[nextIndex].classList.add('active');
						index = index === photos.length - 1 ? 0 : index + 1;
						nextIndex = nextIndex === photos.length - 1 ? 0 : nextIndex + 1;
					}, 750);
				}
			});

			element.addEventListener('mouseleave', () => {
				element.getElementsByClassName('active')[0].classList.remove('active');
				photos[0].classList.add('active');
				clearInterval(interval);
			});
		}
	});
}