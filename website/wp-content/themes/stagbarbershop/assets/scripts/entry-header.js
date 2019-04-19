const postThumbnail = document.getElementsByClassName('post-thumbnail')[0];
if (postThumbnail) {
	global.addEventListener('scroll', () => {
		const y = global.scrollY;
		postThumbnail.style.transform = `translateY(-${parseInt(y / 2, 10)}px)`;
	});
}