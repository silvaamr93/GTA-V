$(document).ready(function(){"use strict";
$(window).load(function(){
  $("body").addClass("flow");
  /* function isTouchDevice() {
        return typeof window.ontouchstart !== 'undefined';
    }
*/
  
  
});


var b=($("#intro"),$("#intro img"));$(".col span").click(function(){var a=$(".one");$("#contentshow").slideToggle(1200,function(){a.fadeIn()})}),$("#contentshow button").click(function(){$("#contentshow").slideUp(500),one.fadeOut()}),b.fadeIn(3e3,function(){$("#intro p").fadeIn(2e3)}),$(".col").hover(function(){$(".col span").toggleClass("hover")}),$(".col span").hover(function(){$(this).toggleClass("hover")})});
