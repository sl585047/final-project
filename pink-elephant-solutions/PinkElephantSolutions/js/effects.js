$(document).ready(function(){	$("div, p, ul, li, h1, h2").hide();	$("#contact").slideDown(450);	$("#content").slideDown(450);	$("h1").animate({opacity: 0.0}, 500).slideDown(450);	$("p, li, h1, h2").animate({opacity: 1.0}, 1000).fadeIn(450);});