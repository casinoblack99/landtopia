

jQuery(document).ready(function ($) {
	var owl = $("#owl-demo-2");
	owl.owlCarousel({
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		items: 3,
		loop: true,
		center: false,
		rewind: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 800,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {
			0: {
				items: 1
				// nav: true
			},
			480: {
				items: 2,
				nav: false
			},
			768: {
				items: 3,
				// nav: true,
				loop: false
			},
			992: {
				items: 4,
				// nav: true,
				loop: false
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: "swing",
		info: false,
		nestedItemSelector: false,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab",
		autoHeight: false,
		lazyLoad: false
	});

	$(".next").click(function () {
		owl.trigger("owl.next");
	});
	$(".prev").click(function () {
		owl.trigger("owl.prev");
	});
});
jQuery("#carousel").owlCarousel({
	autoplay: true,
	rewind: true, /* use rewind if you don't want loop */
	margin: 20,
	 /*
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	*/
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 2000,
	smartSpeed: 800,
	nav: true,
	responsive: {
	  0: {
		items: 1
	  },
  
	  600: {
		items: 3
	  },
  
	  1024: {
		items: 4
	  },
  
	  1366: {
		items: 4
	  }
	}
  });
  jQuery("#carousel1").owlCarousel({
	autoplay: true,
	rewind: true, /* use rewind if you don't want loop */
	margin: 20,
	 /*
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	*/
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 2000,
	smartSpeed: 800,
	nav: true,
	responsive: {
	  0: {
		items: 1
	  },
  
	  600: {
		items: 3
	  },
  
	  1024: {
		items: 4
	  },
  
	  1366: {
		items: 4
	  }
	}
  });

  function myshow() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("btnText");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less"; 
	  moreText.style.display = "inline";
	}
  }

function myFunction() {
	var dots = document.getElementById("dotts");
	var moreText = document.getElementById("texts");
	var Text = document.getElementById("mymore");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  Text.innerHTML = "Read less"; 
	  moreText.style.display = "inline";
	} else {
	  dots.style.display = "none";
	  Text.innerHTML = "Read more"; 
	  moreText.style.display = "inline";
	}
  }
  
function myview() {
	var dots = document.getElementById("icon");
	var moreText = document.getElementById("textss");
	var Text = document.getElementById("view");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  Text.innerHTML = "Read less"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  Text.innerHTML = "Read more"; 
	  moreText.style.display = "inline";
	}
  }


  function mystatus() {
	var dots = document.getElementById("icons");
	var moreText = document.getElementById("texttss");
	var Text = document.getElementById("status");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  Text.innerHTML = "Read less"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  Text.innerHTML = "Read more"; 
	  moreText.style.display = "inline";
	}
  }