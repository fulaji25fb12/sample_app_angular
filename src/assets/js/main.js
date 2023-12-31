
	
$(document).ready(function () {
	
	//for menu hover dropdown
	$('.dropdown').hover(function (){
		//$('.dropdown-menu').removeClass('show');
		//$(this).children('.dropdown-menu').toggleClass('show');
		$(this).children('.dropdown-toggle, .dropdown-menu').toggleClass('show');
	});
 



// NAV menu
! function(e) {
	var t = {};

	function n(o) {
		if (t[o]) return t[o].exports;
		var r = t[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, o) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: o
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var o = Object.create(null);
		if (n.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(o, r, function(t) {
				return e[t]
			}.bind(null, r));
		return o
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 0)
}([function(e, t, n) {
	"use strict";
	n.r(t);
	var o;
	n(1);
	window.addEventListener("resize", (function() {
		document.body.classList.add("resize-animation-stopper"), clearTimeout(o), o = setTimeout((function() {
			document.body.classList.remove("resize-animation-stopper")
		}), 400)
	}));
	var r = document.querySelector(".nav-toggle"),
		i = document.querySelector(".menu-toggle");
	r.addEventListener("click", (function(e) {
		this.classList.toggle("open"), i.classList.toggle("active"), e.stopPropagation()
	})), document.querySelector(".dropdown a").addEventListener("click", (function(e) {
		this.nextElementSibling.classList.toggle("show"), this.parentNode.classList.toggle("active"), e.stopPropagation()
	})), document.querySelector(".second-level a").addEventListener("click", (function(e) {
		this.nextElementSibling.classList.toggle("show"), this.parentNode.classList.toggle("active"), e.stopPropagation()
	}))
}, function(e, t, n) {}]);


  
	// add MenuActive class to body to get the blur background
	$(".nav-toggle").click(function (){
		//$(this).toggleClass("open");
		//$(".menu-toggle").toggleClass("active");
		
		if($(".menu-toggle").hasClass("active"))
		{
			$("body").addClass("MenuActive");
		} else {
			$("body").removeClass("MenuActive");
		}
	
	});	

	$(".nav_menu > li").click(function (){
		$(".nav_menu > li").not(this).removeClass("NavMenuActive");
		$(".nav_menu > li.dropdown").not(this).removeClass("active");
		$(".nav_menu > li.dropdown > ul").removeClass("show");
		
		//event.stopPropagation();
		$(this).toggleClass("NavMenuActive");
		
		if($(".nav_menu > li").hasClass("NavMenuActive"))
		{
			$(".NavMenuActive > ul").addClass("show");
		} else {
			$(".NavMenuActive > ul").removeClass("show");
		}
	});	
	
    $(document).on('click', function (e) {
        if ($(e.target).closest(".menu-toggle").length === 0) {
            $(".menu-toggle").removeClass("active");
			$("body").removeClass("MenuActive");
			$(".nav-toggle").removeClass("open");
        }
    });	

});

