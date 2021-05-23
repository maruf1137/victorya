$(document).ready(function () {
	$(".js--about-section").waypoint(function (n) {
		"down" == n ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
	});
});