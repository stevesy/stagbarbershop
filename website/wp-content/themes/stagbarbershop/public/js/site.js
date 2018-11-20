(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

if (document.getElementsByClassName('page-crew').length) {
	var crewmembers = document.getElementsByClassName('crewmember');
	Array.from(crewmembers).forEach(function (crewmember) {
		var photos = crewmember.querySelectorAll('.crewmember-photos div');

		if (photos.length) {
			var interval = void 0;

			crewmember.addEventListener('mouseenter', function () {
				Array.from(photos).forEach(function (photo) {
					var img = photo.getElementsByTagName('img')[0];
					var src = img.dataset.src;
					if (src && img.src !== src) {
						img.src = src;
					}
				});

				if (photos[1]) {
					var nextImg = photos[1].getElementsByTagName('img')[0];
					var rotatePhotos = function rotatePhotos() {
						photos[0].classList.remove('d-block');
						photos[1].classList.add('d-block');

						var index = 1;
						var nextIndex = photos[2] ? 2 : 0;
						interval = global.setInterval(function () {
							photos[index].classList.remove('d-block');
							photos[nextIndex].classList.add('d-block');
							index = index === photos.length - 1 ? 0 : index + 1;
							nextIndex = nextIndex === photos.length - 1 ? 0 : nextIndex + 1;
						}, 750);
					};

					if (nextImg.complete) {
						rotatePhotos();
					} else {
						nextImg.addEventListener('load', function () {
							rotatePhotos();
						});
					}
				}
			});

			crewmember.addEventListener('mouseleave', function () {
				crewmember.getElementsByClassName('d-block')[0].classList.remove('d-block');
				photos[0].classList.add('d-block');
				clearInterval(interval);
			});
		}
	});
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
'use strict';

require('./navbar');

require('./slider');

require('./page-header');

require('./crew');

},{"./crew":1,"./navbar":3,"./page-header":4,"./slider":5}],3:[function(require,module,exports){
'use strict';

var nav = document.getElementById('site-nav');

if (nav) {
	var menuToggle = document.getElementById('menu-toggle');

	if (menuToggle) {
		menuToggle.addEventListener('click', function (e) {
			e.preventDefault();
			menuToggle.classList.toggle('collapsed');
			nav.classList.toggle('collapsed');
		});
	}
}

},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var postThumbnail = document.getElementsByClassName('post-thumbnail')[0];
if (postThumbnail) {
	global.addEventListener('scroll', function () {
		var y = global.scrollY;
		postThumbnail.style.transform = 'translateY(-' + parseInt(y / 2, 10) + 'px)';
	});
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){
'use strict';

var tinySlider = global.tns;
var slider = document.getElementById('slider');
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2Fzc2V0cy9zY3JpcHRzL2NyZXcuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2Fzc2V0cy9zY3JpcHRzL2luZGV4LmpzIiwid2Vic2l0ZS93cC1jb250ZW50L3RoZW1lcy9zdGFnYmFyYmVyc2hvcC9hc3NldHMvc2NyaXB0cy9uYXZiYXIuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2Fzc2V0cy9zY3JpcHRzL3BhZ2UtaGVhZGVyLmpzIiwid2Vic2l0ZS93cC1jb250ZW50L3RoZW1lcy9zdGFnYmFyYmVyc2hvcC9hc3NldHMvc2NyaXB0cy9zbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxJQUFJLFNBQVMsc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkMsTUFBakQsRUFBeUQ7QUFDeEQsS0FBTSxjQUFjLFNBQVMsc0JBQVQsQ0FBZ0MsWUFBaEMsQ0FBcEI7QUFDQSxPQUFNLElBQU4sQ0FBVyxXQUFYLEVBQXdCLE9BQXhCLENBQWdDLHNCQUFjO0FBQzdDLE1BQU0sU0FBUyxXQUFXLGdCQUFYLENBQTRCLHdCQUE1QixDQUFmOztBQUVBLE1BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2xCLE9BQUksaUJBQUo7O0FBRUEsY0FBVyxnQkFBWCxDQUE0QixZQUE1QixFQUEwQyxZQUFNO0FBQy9DLFVBQU0sSUFBTixDQUFXLE1BQVgsRUFBbUIsT0FBbkIsQ0FBMkIsaUJBQVM7QUFDbkMsU0FBTSxNQUFNLE1BQU0sb0JBQU4sQ0FBMkIsS0FBM0IsRUFBa0MsQ0FBbEMsQ0FBWjtBQUNBLFNBQU0sTUFBTSxJQUFJLE9BQUosQ0FBWSxHQUF4QjtBQUNBLFNBQUksT0FBTyxJQUFJLEdBQUosS0FBWSxHQUF2QixFQUE0QjtBQUMz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QWYsSUFBc0IsS0FMakI7QUFNVixZQUFVLE9BQU8sT0FBUCxDQUFlLFFBQWYsSUFBMkIsSUFOM0I7QUFPVixTQUFPLE9BQU8sT0FBUCxDQUFlLEtBQWYsSUFBd0I7QUFQckIsRUFBWDtBQVNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UtY3JldycpLmxlbmd0aCkge1xuXHRjb25zdCBjcmV3bWVtYmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZXdtZW1iZXInKTtcblx0QXJyYXkuZnJvbShjcmV3bWVtYmVycykuZm9yRWFjaChjcmV3bWVtYmVyID0+IHtcblx0XHRjb25zdCBwaG90b3MgPSBjcmV3bWVtYmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmV3bWVtYmVyLXBob3RvcyBkaXYnKTtcblxuXHRcdGlmIChwaG90b3MubGVuZ3RoKSB7XG5cdFx0XHRsZXQgaW50ZXJ2YWw7XG5cdFx0XHRcblx0XHRcdGNyZXdtZW1iZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcdFx0XG5cdFx0XHRcdEFycmF5LmZyb20ocGhvdG9zKS5mb3JFYWNoKHBob3RvID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbWcgPSBwaG90by5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF07XG5cdFx0XHRcdFx0Y29uc3Qgc3JjID0gaW1nLmRhdGFzZXQuc3JjO1xuXHRcdFx0XHRcdGlmIChzcmMgJiYgaW1nLnNyYyAhPT0gc3JjKSB7XG5cdFx0XHRcdFx0XHRpbWcuc3JjID0gc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHBob3Rvc1sxXSkge1xuXHRcdFx0XHRcdGNvbnN0IG5leHRJbWcgPSBwaG90b3NbMV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdO1xuXHRcdFx0XHRcdGNvbnN0IHJvdGF0ZVBob3RvcyA9ICgpID0+IHtcblx0XHRcdFx0XHRcdHBob3Rvc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG5cdFx0XHRcdFx0XHRwaG90b3NbMV0uY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpO1xuXG5cdFx0XHRcdFx0XHRsZXQgaW5kZXggPSAxO1xuXHRcdFx0XHRcdFx0bGV0IG5leHRJbmRleCA9IHBob3Rvc1syXSA/IDIgOiAwO1xuXHRcdFx0XHRcdFx0aW50ZXJ2YWwgPSBnbG9iYWwuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwaG90b3NbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcblx0XHRcdFx0XHRcdFx0cGhvdG9zW25leHRJbmRleF0uY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpO1xuXHRcdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4ID09PSBwaG90b3MubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDE7XG5cdFx0XHRcdFx0XHRcdG5leHRJbmRleCA9IG5leHRJbmRleCA9PT0gcGhvdG9zLmxlbmd0aCAtIDEgPyAwIDogbmV4dEluZGV4ICsgMTtcblx0XHRcdFx0XHRcdH0sIDc1MCk7XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGlmIChuZXh0SW1nLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRyb3RhdGVQaG90b3MoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bmV4dEltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyb3RhdGVQaG90b3MoKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNyZXdtZW1iZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcblx0XHRcdFx0Y3Jld21lbWJlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkLWJsb2NrJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuXHRcdFx0XHRwaG90b3NbMF0uY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpO1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59IiwiaW1wb3J0ICcuL25hdmJhcic7XG5pbXBvcnQgJy4vc2xpZGVyJztcbmltcG9ydCAnLi9wYWdlLWhlYWRlcic7XG5pbXBvcnQgJy4vY3Jldyc7IiwiY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2Jyk7XG5cbmlmIChuYXYpIHtcblx0Y29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpO1xuXG5cdGlmIChtZW51VG9nZ2xlKSB7XG5cdFx0bWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bWVudVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcblx0XHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcblx0XHR9KTtcblx0fVxufSIsImNvbnN0IHBvc3RUaHVtYm5haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3N0LXRodW1ibmFpbCcpWzBdO1xuaWYgKHBvc3RUaHVtYm5haWwpIHtcblx0Z2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0XHRjb25zdCB5ID0gZ2xvYmFsLnNjcm9sbFk7XG5cdFx0cG9zdFRodW1ibmFpbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtwYXJzZUludCh5IC8gMiwgMTApfXB4KWA7XG5cdH0pO1xufSIsImNvbnN0IHRpbnlTbGlkZXIgPSBnbG9iYWwudG5zO1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuaWYgKHRpbnlTbGlkZXIgJiYgc2xpZGVyKSB7XG5cdHRpbnlTbGlkZXIoe1xuXHRcdGNvbnRhaW5lcjogc2xpZGVyLFxuXHRcdG1vZGU6IHNsaWRlci5kYXRhc2V0Lm1vZGUgfHwgJ2Nhcm91c2VsJyxcblx0XHRsYXp5bG9hZDogc2xpZGVyLmRhdGFzZXQubGF6eWxvYWQgfHwgZmFsc2UsXG5cdFx0Y29udHJvbHM6IHNsaWRlci5kYXRhc2V0LmNvbnRyb2xzIHx8IGZhbHNlLFxuXHRcdG5hdjogc2xpZGVyLmRhdGFzZXQubmF2IHx8IGZhbHNlLFxuXHRcdGF1dG9wbGF5OiBzbGlkZXIuZGF0YXNldC5hdXRvcGxheSB8fCB0cnVlLFxuXHRcdHRvdWNoOiBzbGlkZXIuZGF0YXNldC50b3VjaCB8fCBmYWxzZVxuXHR9KTtcbn0iXX0=
