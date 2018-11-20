if (document.getElementsByClassName('page-crew').length) {
	const crewmembers = document.getElementsByClassName('crewmember');
	Array.from(crewmembers).forEach(crewmember => {
		const photos = crewmember.querySelectorAll('.crewmember-photos div');

		if (photos.length) {
			let interval;
			
			crewmember.addEventListener('mouseenter', () => {		
				Array.from(photos).forEach(photo => {
					const img = photo.getElementsByTagName('img')[0];
					const src = img.dataset.src;
					if (src && img.src !== src) {
						img.src = src;
					}
				});

				if (photos[1]) {
					const nextImg = photos[1].getElementsByTagName('img')[0];
					const rotatePhotos = () => {
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
					};

					if (nextImg.complete) {
						rotatePhotos();
					} else {
						nextImg.addEventListener('load', () => {
							rotatePhotos();
						});
					}
				}
			});

			crewmember.addEventListener('mouseleave', () => {
				crewmember.getElementsByClassName('d-block')[0].classList.remove('d-block');
				photos[0].classList.add('d-block');
				clearInterval(interval);
			});
		}
	});
}