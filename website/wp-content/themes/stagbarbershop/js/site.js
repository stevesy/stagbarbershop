(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

if (document.getElementsByClassName('page-crew')[0]) {
	var crew = document.getElementsByClassName('item-crew');
	Array.from(crew).forEach(function (element) {
		var photos = element.querySelectorAll('.crewmember-photos div');

		if (photos.length) {
			var interval = void 0;

			element.addEventListener('mouseenter', function () {
				Array.from(photos).forEach(function (photo) {
					var img = photo.getElementsByTagName('img')[0];
					var src = img.dataset.src;
					if (src && img.src !== src) {
						img.src = src;
					}
				});

				if (photos[1]) {
					photos[0].classList.remove('active');
					photos[1].classList.add('active');

					var index = 1;
					var nextIndex = photos[2] ? 2 : 0;
					interval = global.setInterval(function () {
						photos[index].classList.remove('active');
						photos[nextIndex].classList.add('active');
						index = index === photos.length - 1 ? 0 : index + 1;
						nextIndex = nextIndex === photos.length - 1 ? 0 : nextIndex + 1;
					}, 750);
				}
			});

			element.addEventListener('mouseleave', function () {
				element.getElementsByClassName('active')[0].classList.remove('active');
				photos[0].classList.add('active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2pzL3NyYy9jcmV3LmpzIiwid2Vic2l0ZS93cC1jb250ZW50L3RoZW1lcy9zdGFnYmFyYmVyc2hvcC9qcy9zcmMvaW5kZXguanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2pzL3NyYy9uYXZiYXIuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2pzL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnNpdGUvd3AtY29udGVudC90aGVtZXMvc3RhZ2JhcmJlcnNob3AvanMvc3JjL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLElBQUksU0FBUyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxDQUFKLEVBQXFEO0FBQ3BELEtBQU0sT0FBTyxTQUFTLHNCQUFULENBQWdDLFdBQWhDLENBQWI7QUFDQSxPQUFNLElBQU4sQ0FBVyxJQUFYLEVBQWlCLE9BQWpCLENBQXlCLG1CQUFXO0FBQ25DLE1BQU0sU0FBUyxRQUFRLGdCQUFSLENBQXlCLHdCQUF6QixDQUFmOztBQUVBLE1BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2xCLE9BQUksaUJBQUo7O0FBRUEsV0FBUSxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxZQUFNO0FBQzVDLFVBQU0sSUFBTixDQUFXLE1BQVgsRUFBbUIsT0FBbkIsQ0FBMkIsaUJBQVM7QUFDbkMsU0FBTSxNQUFNLE1BQU0sb0JBQU4sQ0FBMkIsS0FBM0IsRUFBa0MsQ0FBbEMsQ0FBWjtBQUNBLFNBQU0sTUFBTSxJQUFJLE9BQUosQ0FBWSxHQUF4QjtBQUNBLFNBQUksT0FBTyxJQUFJLEdBQUosS0FBWSxHQUF2QixFQUE0QjtBQUMzQixVQUFJLEdBQUosR0FBVSxHQUFWO0FBQ0E7QUFDRCxLQU5EOztBQVFBLFFBQUksT0FBTyxDQUFQLENBQUosRUFBZTtBQUNkLFlBQU8sQ0FBUCxFQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsUUFBM0I7QUFDQSxZQUFPLENBQVAsRUFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFFBQXhCOztBQUVBLFNBQUksUUFBUSxDQUFaO0FBQ0EsU0FBSSxZQUFZLE9BQU8sQ0FBUCxJQUFZLENBQVosR0FBZ0IsQ0FBaEM7QUFDQSxnQkFBVyxPQUFPLFdBQVAsQ0FBbUIsWUFBTTtBQUNuQyxhQUFPLEtBQVAsRUFBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLFFBQS9CO0FBQ0EsYUFBTyxTQUFQLEVBQWtCLFNBQWxCLENBQTRCLEdBQTVCLENBQWdDLFFBQWhDO0FBQ0EsY0FBUSxVQUFVLE9BQU8sTUFBUCxHQUFnQixDQUExQixHQUE4QixDQUE5QixHQUFrQyxRQUFRLENBQWxEO0FBQ0Esa0JBQVksY0FBYyxPQUFPLE1BQVAsR0FBZ0IsQ0FBOUIsR0FBa0MsQ0FBbEMsR0FBc0MsWUFBWSxDQUE5RDtBQUNBLE1BTFUsRUFLUixHQUxRLENBQVg7QUFNQTtBQUNELElBdEJEOztBQXdCQSxXQUFRLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFlBQU07QUFDNUMsWUFBUSxzQkFBUixDQUErQixRQUEvQixFQUF5QyxDQUF6QyxFQUE0QyxTQUE1QyxDQUFzRCxNQUF0RCxDQUE2RCxRQUE3RDtBQUNBLFdBQU8sQ0FBUCxFQUFVLFNBQVYsQ0FBb0IsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDQSxrQkFBYyxRQUFkO0FBQ0EsSUFKRDtBQUtBO0FBQ0QsRUFwQ0Q7QUFxQ0E7Ozs7Ozs7QUN2Q0Q7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7O0FDSEEsSUFBTSxNQUFNLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFaOztBQUVBLElBQUksR0FBSixFQUFTO0FBQ1IsS0FBTSxhQUFhLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFuQjs7QUFFQSxLQUFJLFVBQUosRUFBZ0I7QUFDZixhQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLGFBQUs7QUFDekMsS0FBRSxjQUFGO0FBQ0EsY0FBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLFdBQTVCO0FBQ0EsT0FBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixXQUFyQjtBQUNBLEdBSkQ7QUFLQTtBQUNEOzs7Ozs7QUNaRCxJQUFNLGdCQUFnQixTQUFTLHNCQUFULENBQWdDLGdCQUFoQyxFQUFrRCxDQUFsRCxDQUF0QjtBQUNBLElBQUksYUFBSixFQUFtQjtBQUNsQixRQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdkMsTUFBTSxJQUFJLE9BQU8sT0FBakI7QUFDQSxnQkFBYyxLQUFkLENBQW9CLFNBQXBCLG9CQUErQyxTQUFTLElBQUksQ0FBYixFQUFnQixFQUFoQixDQUEvQztBQUNBLEVBSEQ7QUFJQTs7Ozs7Ozs7QUNORCxJQUFNLGFBQWEsT0FBTyxHQUExQjtBQUNBLElBQU0sU0FBUyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQUksY0FBYyxNQUFsQixFQUEwQjtBQUN6QixZQUFXO0FBQ1YsYUFBVyxNQUREO0FBRVYsUUFBTSxPQUFPLE9BQVAsQ0FBZSxJQUFmLElBQXVCLFVBRm5CO0FBR1YsWUFBVSxPQUFPLE9BQVAsQ0FBZSxRQUFmLElBQTJCLEtBSDNCO0FBSVYsWUFBVSxPQUFPLE9BQVAsQ0FBZSxRQUFmLElBQTJCLEtBSjNCO0FBS1YsT0FBSyxPQUFPLE9BQVAsQ0FBZSxHQUFmLElBQXNCLEtBTGpCO0FBTVYsWUFBVSxPQUFPLE9BQVAsQ0FBZSxRQUFmLElBQTJCLElBTjNCO0FBT1YsU0FBTyxPQUFPLE9BQVAsQ0FBZSxLQUFmLElBQXdCO0FBUHJCLEVBQVg7QUFTQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlLWNyZXcnKVswXSkge1xuXHRjb25zdCBjcmV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbS1jcmV3Jyk7XG5cdEFycmF5LmZyb20oY3JldykuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRjb25zdCBwaG90b3MgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmV3bWVtYmVyLXBob3RvcyBkaXYnKTtcblxuXHRcdGlmIChwaG90b3MubGVuZ3RoKSB7XG5cdFx0XHRsZXQgaW50ZXJ2YWw7XG5cdFx0XHRcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcdFx0XG5cdFx0XHRcdEFycmF5LmZyb20ocGhvdG9zKS5mb3JFYWNoKHBob3RvID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbWcgPSBwaG90by5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF07XG5cdFx0XHRcdFx0Y29uc3Qgc3JjID0gaW1nLmRhdGFzZXQuc3JjO1xuXHRcdFx0XHRcdGlmIChzcmMgJiYgaW1nLnNyYyAhPT0gc3JjKSB7XG5cdFx0XHRcdFx0XHRpbWcuc3JjID0gc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHBob3Rvc1sxXSkge1xuXHRcdFx0XHRcdHBob3Rvc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRwaG90b3NbMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cblx0XHRcdFx0XHRsZXQgaW5kZXggPSAxO1xuXHRcdFx0XHRcdGxldCBuZXh0SW5kZXggPSBwaG90b3NbMl0gPyAyIDogMDtcblx0XHRcdFx0XHRpbnRlcnZhbCA9IGdsb2JhbC5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRwaG90b3NbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0cGhvdG9zW25leHRJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4ID09PSBwaG90b3MubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDE7XG5cdFx0XHRcdFx0XHRuZXh0SW5kZXggPSBuZXh0SW5kZXggPT09IHBob3Rvcy5sZW5ndGggLSAxID8gMCA6IG5leHRJbmRleCArIDE7XG5cdFx0XHRcdFx0fSwgNzUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0cGhvdG9zWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59IiwiaW1wb3J0ICcuL25hdmJhcic7XG5pbXBvcnQgJy4vc2xpZGVyJztcbmltcG9ydCAnLi9wYWdlLWhlYWRlcic7XG5pbXBvcnQgJy4vY3Jldyc7IiwiY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2Jyk7XG5cbmlmIChuYXYpIHtcblx0Y29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpO1xuXG5cdGlmIChtZW51VG9nZ2xlKSB7XG5cdFx0bWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bWVudVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcblx0XHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcblx0XHR9KTtcblx0fVxufSIsImNvbnN0IHBvc3RUaHVtYm5haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3N0LXRodW1ibmFpbCcpWzBdO1xuaWYgKHBvc3RUaHVtYm5haWwpIHtcblx0Z2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0XHRjb25zdCB5ID0gZ2xvYmFsLnNjcm9sbFk7XG5cdFx0cG9zdFRodW1ibmFpbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtwYXJzZUludCh5IC8gMiwgMTApfXB4KWA7XG5cdH0pO1xufSIsImNvbnN0IHRpbnlTbGlkZXIgPSBnbG9iYWwudG5zO1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuaWYgKHRpbnlTbGlkZXIgJiYgc2xpZGVyKSB7XG5cdHRpbnlTbGlkZXIoe1xuXHRcdGNvbnRhaW5lcjogc2xpZGVyLFxuXHRcdG1vZGU6IHNsaWRlci5kYXRhc2V0Lm1vZGUgfHwgJ2Nhcm91c2VsJyxcblx0XHRsYXp5bG9hZDogc2xpZGVyLmRhdGFzZXQubGF6eWxvYWQgfHwgZmFsc2UsXG5cdFx0Y29udHJvbHM6IHNsaWRlci5kYXRhc2V0LmNvbnRyb2xzIHx8IGZhbHNlLFxuXHRcdG5hdjogc2xpZGVyLmRhdGFzZXQubmF2IHx8IGZhbHNlLFxuXHRcdGF1dG9wbGF5OiBzbGlkZXIuZGF0YXNldC5hdXRvcGxheSB8fCB0cnVlLFxuXHRcdHRvdWNoOiBzbGlkZXIuZGF0YXNldC50b3VjaCB8fCBmYWxzZVxuXHR9KTtcbn0iXX0=
