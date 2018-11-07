(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

if (document.getElementsByClassName('page-crew').length) {
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
				}
			});

			element.addEventListener('mouseleave', function () {
				element.getElementsByClassName('d-block')[0].classList.remove('d-block');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2pzL3NyYy9jcmV3LmpzIiwid2Vic2l0ZS93cC1jb250ZW50L3RoZW1lcy9zdGFnYmFyYmVyc2hvcC9qcy9zcmMvaW5kZXguanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2pzL3NyYy9uYXZiYXIuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2pzL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnNpdGUvd3AtY29udGVudC90aGVtZXMvc3RhZ2JhcmJlcnNob3AvanMvc3JjL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLElBQUksU0FBUyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxNQUFqRCxFQUF5RDtBQUN4RCxLQUFNLE9BQU8sU0FBUyxzQkFBVCxDQUFnQyxXQUFoQyxDQUFiO0FBQ0EsT0FBTSxJQUFOLENBQVcsSUFBWCxFQUFpQixPQUFqQixDQUF5QixtQkFBVztBQUNuQyxNQUFNLFNBQVMsUUFBUSxnQkFBUixDQUF5Qix3QkFBekIsQ0FBZjs7QUFFQSxNQUFJLE9BQU8sTUFBWCxFQUFtQjtBQUNsQixPQUFJLGlCQUFKOztBQUVBLFdBQVEsZ0JBQVIsQ0FBeUIsWUFBekIsRUFBdUMsWUFBTTtBQUM1QyxVQUFNLElBQU4sQ0FBVyxNQUFYLEVBQW1CLE9BQW5CLENBQTJCLGlCQUFTO0FBQ25DLFNBQU0sTUFBTSxNQUFNLG9CQUFOLENBQTJCLEtBQTNCLEVBQWtDLENBQWxDLENBQVo7QUFDQSxTQUFNLE1BQU0sSUFBSSxPQUFKLENBQVksR0FBeEI7QUFDQSxTQUFJLE9BQU8sSUFBSSxHQUFKLEtBQVksR0FBdkIsRUFBNEI7QUFDM0IsVUFBSSxHQUFKLEdBQVUsR0FBVjtBQUNBO0FBQ0QsS0FORDs7QUFRQSxRQUFJLE9BQU8sQ0FBUCxDQUFKLEVBQWU7QUFDZCxZQUFPLENBQVAsRUFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFNBQTNCO0FBQ0EsWUFBTyxDQUFQLEVBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QixTQUF4Qjs7QUFFQSxTQUFJLFFBQVEsQ0FBWjtBQUNBLFNBQUksWUFBWSxPQUFPLENBQVAsSUFBWSxDQUFaLEdBQWdCLENBQWhDO0FBQ0EsZ0JBQVcsT0FBTyxXQUFQLENBQW1CLFlBQU07QUFDbkMsYUFBTyxLQUFQLEVBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixTQUEvQjtBQUNBLGFBQU8sU0FBUCxFQUFrQixTQUFsQixDQUE0QixHQUE1QixDQUFnQyxTQUFoQztBQUNBLGNBQVEsVUFBVSxPQUFPLE1BQVAsR0FBZ0IsQ0FBMUIsR0FBOEIsQ0FBOUIsR0FBa0MsUUFBUSxDQUFsRDtBQUNBLGtCQUFZLGNBQWMsT0FBTyxNQUFQLEdBQWdCLENBQTlCLEdBQWtDLENBQWxDLEdBQXNDLFlBQVksQ0FBOUQ7QUFDQSxNQUxVLEVBS1IsR0FMUSxDQUFYO0FBTUE7QUFDRCxJQXRCRDs7QUF3QkEsV0FBUSxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxZQUFNO0FBQzVDLFlBQVEsc0JBQVIsQ0FBK0IsU0FBL0IsRUFBMEMsQ0FBMUMsRUFBNkMsU0FBN0MsQ0FBdUQsTUFBdkQsQ0FBOEQsU0FBOUQ7QUFDQSxXQUFPLENBQVAsRUFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFNBQXhCO0FBQ0Esa0JBQWMsUUFBZDtBQUNBLElBSkQ7QUFLQTtBQUNELEVBcENEO0FBcUNBOzs7Ozs7O0FDdkNEOztBQUNBOztBQUNBOztBQUNBOzs7OztBQ0hBLElBQU0sTUFBTSxTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBWjs7QUFFQSxJQUFJLEdBQUosRUFBUztBQUNSLEtBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7O0FBRUEsS0FBSSxVQUFKLEVBQWdCO0FBQ2YsYUFBVyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxhQUFLO0FBQ3pDLEtBQUUsY0FBRjtBQUNBLGNBQVcsU0FBWCxDQUFxQixNQUFyQixDQUE0QixXQUE1QjtBQUNBLE9BQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDQSxHQUpEO0FBS0E7QUFDRDs7Ozs7O0FDWkQsSUFBTSxnQkFBZ0IsU0FBUyxzQkFBVCxDQUFnQyxnQkFBaEMsRUFBa0QsQ0FBbEQsQ0FBdEI7QUFDQSxJQUFJLGFBQUosRUFBbUI7QUFDbEIsUUFBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3ZDLE1BQU0sSUFBSSxPQUFPLE9BQWpCO0FBQ0EsZ0JBQWMsS0FBZCxDQUFvQixTQUFwQixvQkFBK0MsU0FBUyxJQUFJLENBQWIsRUFBZ0IsRUFBaEIsQ0FBL0M7QUFDQSxFQUhEO0FBSUE7Ozs7Ozs7O0FDTkQsSUFBTSxhQUFhLE9BQU8sR0FBMUI7QUFDQSxJQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFJLGNBQWMsTUFBbEIsRUFBMEI7QUFDekIsWUFBVztBQUNWLGFBQVcsTUFERDtBQUVWLFFBQU0sT0FBTyxPQUFQLENBQWUsSUFBZixJQUF1QixVQUZuQjtBQUdWLFlBQVUsT0FBTyxPQUFQLENBQWUsUUFBZixJQUEyQixLQUgzQjtBQUlWLFlBQVUsT0FBTyxPQUFQLENBQWUsUUFBZixJQUEyQixLQUozQjtBQUtWLE9BQUssT0FBTyxPQUFQLENBQWUsR0FBZixJQUFzQixLQUxqQjtBQU1WLFlBQVUsT0FBTyxPQUFQLENBQWUsUUFBZixJQUEyQixJQU4zQjtBQU9WLFNBQU8sT0FBTyxPQUFQLENBQWUsS0FBZixJQUF3QjtBQVByQixFQUFYO0FBU0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnZS1jcmV3JykubGVuZ3RoKSB7XG5cdGNvbnN0IGNyZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtLWNyZXcnKTtcblx0QXJyYXkuZnJvbShjcmV3KS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGNvbnN0IHBob3RvcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZXdtZW1iZXItcGhvdG9zIGRpdicpO1xuXG5cdFx0aWYgKHBob3Rvcy5sZW5ndGgpIHtcblx0XHRcdGxldCBpbnRlcnZhbDtcblx0XHRcdFxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1x0XHRcblx0XHRcdFx0QXJyYXkuZnJvbShwaG90b3MpLmZvckVhY2gocGhvdG8gPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGltZyA9IHBob3RvLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcblx0XHRcdFx0XHRjb25zdCBzcmMgPSBpbWcuZGF0YXNldC5zcmM7XG5cdFx0XHRcdFx0aWYgKHNyYyAmJiBpbWcuc3JjICE9PSBzcmMpIHtcblx0XHRcdFx0XHRcdGltZy5zcmMgPSBzcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocGhvdG9zWzFdKSB7XG5cdFx0XHRcdFx0cGhvdG9zWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcblx0XHRcdFx0XHRwaG90b3NbMV0uY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpO1xuXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gMTtcblx0XHRcdFx0XHRsZXQgbmV4dEluZGV4ID0gcGhvdG9zWzJdID8gMiA6IDA7XG5cdFx0XHRcdFx0aW50ZXJ2YWwgPSBnbG9iYWwuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cGhvdG9zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XG5cdFx0XHRcdFx0XHRwaG90b3NbbmV4dEluZGV4XS5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJyk7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4ID09PSBwaG90b3MubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDE7XG5cdFx0XHRcdFx0XHRuZXh0SW5kZXggPSBuZXh0SW5kZXggPT09IHBob3Rvcy5sZW5ndGggLSAxID8gMCA6IG5leHRJbmRleCArIDE7XG5cdFx0XHRcdFx0fSwgNzUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkLWJsb2NrJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xuXHRcdFx0XHRwaG90b3NbMF0uY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpO1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59IiwiaW1wb3J0ICcuL25hdmJhcic7XG5pbXBvcnQgJy4vc2xpZGVyJztcbmltcG9ydCAnLi9wYWdlLWhlYWRlcic7XG5pbXBvcnQgJy4vY3Jldyc7IiwiY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2Jyk7XG5cbmlmIChuYXYpIHtcblx0Y29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpO1xuXG5cdGlmIChtZW51VG9nZ2xlKSB7XG5cdFx0bWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bWVudVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcblx0XHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcblx0XHR9KTtcblx0fVxufSIsImNvbnN0IHBvc3RUaHVtYm5haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3N0LXRodW1ibmFpbCcpWzBdO1xuaWYgKHBvc3RUaHVtYm5haWwpIHtcblx0Z2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0XHRjb25zdCB5ID0gZ2xvYmFsLnNjcm9sbFk7XG5cdFx0cG9zdFRodW1ibmFpbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtwYXJzZUludCh5IC8gMiwgMTApfXB4KWA7XG5cdH0pO1xufSIsImNvbnN0IHRpbnlTbGlkZXIgPSBnbG9iYWwudG5zO1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuaWYgKHRpbnlTbGlkZXIgJiYgc2xpZGVyKSB7XG5cdHRpbnlTbGlkZXIoe1xuXHRcdGNvbnRhaW5lcjogc2xpZGVyLFxuXHRcdG1vZGU6IHNsaWRlci5kYXRhc2V0Lm1vZGUgfHwgJ2Nhcm91c2VsJyxcblx0XHRsYXp5bG9hZDogc2xpZGVyLmRhdGFzZXQubGF6eWxvYWQgfHwgZmFsc2UsXG5cdFx0Y29udHJvbHM6IHNsaWRlci5kYXRhc2V0LmNvbnRyb2xzIHx8IGZhbHNlLFxuXHRcdG5hdjogc2xpZGVyLmRhdGFzZXQubmF2IHx8IGZhbHNlLFxuXHRcdGF1dG9wbGF5OiBzbGlkZXIuZGF0YXNldC5hdXRvcGxheSB8fCB0cnVlLFxuXHRcdHRvdWNoOiBzbGlkZXIuZGF0YXNldC50b3VjaCB8fCBmYWxzZVxuXHR9KTtcbn0iXX0=
