(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var menuToggle = document.getElementById('menu-toggle');
var nav = document.getElementById('site-nav');
menuToggle.addEventListener('click', function (e) {
	e.preventDefault();
	menuToggle.classList.toggle('collapsed');
	nav.classList.toggle('collapsed');
});

var postThumbnail = document.getElementsByClassName('post-thumbnail')[0];
if (postThumbnail) {
	global.addEventListener('scroll', function () {
		var y = global.scrollY;
		postThumbnail.style.transform = 'translateY(-' + parseInt(y / 2, 10) + 'px)';
	});
}

var tinySlider = global.tns;
var slider = document.getElementById('slider');
if (tinySlider && slider) {
	tinySlider({
		container: slider,
		controls: false,
		nav: false,
		autoplay: true,
		touch: false
	});
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWJzaXRlL3dwLWNvbnRlbnQvdGhlbWVzL3N0YWdiYXJiZXJzaG9wL2pzL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLElBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQSxJQUFNLE1BQU0sU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQVo7QUFDQSxXQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLGFBQUs7QUFDekMsR0FBRSxjQUFGO0FBQ0EsWUFBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLFdBQTVCO0FBQ0EsS0FBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixXQUFyQjtBQUNBLENBSkQ7O0FBTUEsSUFBTSxnQkFBZ0IsU0FBUyxzQkFBVCxDQUFnQyxnQkFBaEMsRUFBa0QsQ0FBbEQsQ0FBdEI7QUFDQSxJQUFJLGFBQUosRUFBbUI7QUFDbEIsUUFBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3ZDLE1BQU0sSUFBSSxPQUFPLE9BQWpCO0FBQ0EsZ0JBQWMsS0FBZCxDQUFvQixTQUFwQixvQkFBK0MsU0FBUyxJQUFJLENBQWIsRUFBZ0IsRUFBaEIsQ0FBL0M7QUFDQSxFQUhEO0FBSUE7O0FBRUQsSUFBTSxhQUFhLE9BQU8sR0FBMUI7QUFDQSxJQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFJLGNBQWMsTUFBbEIsRUFBMEI7QUFDekIsWUFBVztBQUNWLGFBQVcsTUFERDtBQUVWLFlBQVUsS0FGQTtBQUdWLE9BQUssS0FISztBQUlWLFlBQVUsSUFKQTtBQUtWLFNBQU87QUFMRyxFQUFYO0FBT0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdG9nZ2xlJyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1uYXYnKTtcbm1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRtZW51VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlZCcpO1xuXHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJyk7XG59KTtcblxuY29uc3QgcG9zdFRodW1ibmFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Bvc3QtdGh1bWJuYWlsJylbMF07XG5pZiAocG9zdFRodW1ibmFpbCkge1xuXHRnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdGNvbnN0IHkgPSBnbG9iYWwuc2Nyb2xsWTtcblx0XHRwb3N0VGh1bWJuYWlsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke3BhcnNlSW50KHkgLyAyLCAxMCl9cHgpYDtcblx0fSk7XG59XG5cbmNvbnN0IHRpbnlTbGlkZXIgPSBnbG9iYWwudG5zO1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuaWYgKHRpbnlTbGlkZXIgJiYgc2xpZGVyKSB7XG5cdHRpbnlTbGlkZXIoe1xuXHRcdGNvbnRhaW5lcjogc2xpZGVyLFxuXHRcdGNvbnRyb2xzOiBmYWxzZSxcblx0XHRuYXY6IGZhbHNlLFxuXHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdHRvdWNoOiBmYWxzZVxuXHR9KTtcbn0iXX0=
