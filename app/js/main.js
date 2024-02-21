$(document).ready(function(){
    function send_dataAjax(myForm, result_form, ajax_form) {
    	let sID = myForm.id.split('_')[1];
    	let url = '/ajax.php'; 
    	let FORM_DATA;

    	let bTypeFD = false;
    	if (typeof FormData == 'function') {
    		FORM_DATA = new FormData(myForm);
    		bTypeFD = true;
    	} else {
    		FORM_DATA = $(myForm).serialize();
    	}

    	$.ajax({
    		url: url,
    		type: 'POST',
    		dataType: 'html',
    		data: FORM_DATA,
    		cache: false,
    		processData: (!bTypeFD),
    		contentType: (bTypeFD ? false : 'application/x-www-form-urlencoded;charset=UTF-8'),
    		success: function (response){
    			console.log(response);
    			let result = JSON.parse(response);
    			
    			if(!result.error){

                    if(sID == 63){ //если это СМС форма                
						$('.saleSecond__smsform').remove(); //скрываем лишнее
						$('.saleSecond__smsform__check').css({"display":"flex"}); //выводим проверочную форму
		
						let generatedCode1 = result.PROMOCODE;						
						//console.log(generatedCode1);

						let userWrittenCode = document.getElementById("get_num").value;
											
						$(".saleSecond__smsform__check").on('submit', function(userWrittenCode){
							let generatedCode = result.PROMOCODE;

							//console.log(generatedCode);
							//console.log("код" + userWrittenCode + "написан польз");

							alert("Спасибо, ваше сообщение принято. Сохраняйте этот код!");

							/*if (userWrittenCode === generatedCode) {
    							alert("Спасибо, ваше сообщение принято. Сохраняйте этот код!");
    						}
    						else {
    							alert("Неверный код");
								setTimeout(function(){ document.location.reload() }, 5000);
    						}*/
						});
					}
					else{
						let html = '<h2>Спасибо, ваше сообщение принято.</h2><p>В ближайшее время наш оператор с вами свяжется специалист</p>';
						$('#form_' + sID).html(html);
					}
				}
				else{
					console.log('Ошибка отправки формы.');
				}
				return true;
			}, 
			error: function(data){
				alert("Ошибка");
			}
		});
    }

    $('.form-bars').on('submit', function (e){
    	e.preventDefault();
    	send_dataAjax(this);
    });

    // для смс
    $('.form-sms').on('submit', function (f){
    	f.preventDefault();
    	send_dataAjax(this);
    });
});


$(document).ready(function(){
	
	$(document).scroll(function(){
		window.matchMedia("only screen and (min-device-width: 768px) and (max-device-width: 1920px)").matches && ($(this).scrollTop() <= 100 ? $(".head").fadeIn() : $(".head").fadeOut());
	});

	$(".accordion__label").click(function() {
		$(this).next().slideToggle(), 
		$(this).toggleClass("accordion__label--active")
	});

	var d = $("#overlay"),
	c = $(".open_modal"),
	p = $(".modal_close, #overlay"),
	u = $(".modal_div");
	
	c.click(function(e) {
		e.preventDefault();
		var t = $(this).attr("href");
		d.fadeIn(400, function() {
			$(t).css("display", "block").animate({
				opacity: 1,
				top: "50%"
			}, 200)
		})
	}), 

	p.click(function() {
		u.animate({
			opacity: 0,
			top: "45%"
		}, 200, function() {
			$(this).css("display", "none"), d.fadeOut(400)
		})
	});

	function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
		
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
				
				$('.'+className).spincrement({
					from: 1,
					duration: 4000,
					thousandSeparator: ' '
				});
			}
		})	
	}

	$(function() {
		countup("spin", $(".spin").text());
	});

	$(".head__phoneNumber-showText").hover(function() {
		$(".head__phoneNumber-showNum").show();
		$(".head__phoneNumber-showText").hide();
	});

	/* ************** */
	$(".topMain__slider").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
    if (!($('.topMain__slider .slick-slide').length > 1)) {
    	if (window.matchMedia("(max-width: 400px)").matches) {
  			$('.topMain__slider-nav .slick-dots').show();
		} else {
  			$('.topMain__slider-nav .slick-dots').hide();
		}
    }
	});

	$(".topMain__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		arrows: true,
		dots: true,
		appendArrows: $(".topMain__slider-nav"),
		appendDots: $(".topMain__slider-nav"),
		responsive: [
		{
			breakpoint:1200,
			settings: {
				dots: true
			}
		},
		{
			breakpoint:992,
			settings: {
				dots: true
			}
		},
		{
			breakpoint:768,
			settings: {
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint:576,
			settings: {
				dots: false,
				arrows: false
			}
		},
		]
	});

	$(".topMain__direction").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
    // remove dots
    if (!($('.topMain__direction .slick-slide').length > 5)) {
    	if (window.matchMedia("(max-width: 400px)").matches) {
  			$('.topMain__direction-nav .slick-dots').show();
		} else {
  			$('.topMain__direction-nav .slick-dots').hide();
		}
    }
	});

	$(".topMain__direction").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		fade: false,
		focusOnSelect: !0,
		infinite: !1,
		arrows: true,
		dots: true,
		appendArrows: $(".topMain__direction-nav"),
		appendDots: $(".topMain__direction-nav"),
		
		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 2
			}
		},
		]
	});

	$(".sales-mainslider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1; // + 3
		var j = slick.slideCount - 2;
		$('.salesMain__counter').text(i + ' из ' + j);
		if (!($('.sales-mainslider .slick-slide').length > 3)) {
			if (window.matchMedia("(max-width: 400px)").matches) {
				  $('.sales-mainslider-nav .slick-dots').show();
			} else {
				  $('.sales-mainslider-nav .slick-dots').hide();
			}
		}
		});
	
	$(".sales-mainslider").slick({
		focusOnSelect: false,
		fade:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		arrows: true,
		appendArrows: $(".sales-mainslider-nav"),
		appendDots: $(".sales-mainslider-nav"),
	
		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 1,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 1,
				dots: false,
				arrows: true
			}
		},
		]
	});
	
	$(".sales-mainslider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1; // + 3
		var j = slick.slideCount - 2;
		$('.salesMain__counter').text(i + ' из ' + j);
	});
	
	$(".sales-mainslider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1; // + 3
		var j = slick.slideCount - 2;
		$('.salesMain__counter').text(i + ' из ' + j);
	});
	

});

function salesTimer(){
	let today = new Date();
	let dd_num = String(today.getDate());
	let mm_num = String(today.getMonth() + 1);
	let dd = String(today.getDate()).padStart(2, '0'); // 01 - формат для дня
	let mm = String(today.getMonth() + 1).padStart(2, '0'); // январь = 0, 01 - формат для месяца
	let yyyy = String(today.getFullYear());

	if (!(mm_num % 2) && mm_num != 2) { //если месяц четный
		if (dd_num < 15) {
			dd = 15;
		}
		else {
			dd = 30;
		}
	}
	if (!(mm_num % 2) && mm_num == 2) { //если февраль
		if (dd_num < 14) {
			dd = 14;
		}
		else {
			dd = 28;
		}
	}
	else {
		if (dd_num < 15) {
			dd = 15;
		}
		else {
			dd = 31;
		}
	}

	let countDown = new Date(mm+'/ '+dd+'/ '+yyyy+' 23:00:00').getTime(),

	x = setInterval(function() {
		let now = new Date().getTime(),
		distance = countDown - now;
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
		let sec = Math.floor((distance % (1000 * 60)) / (1000));

		function makeMeTwoDigits(n){
			return (n < 10 ? "0" : "") + n;
		} 

		if (document.getElementById("days") != null ) {
			document.getElementById("days").innerHTML = makeMeTwoDigits(days);
		}

		if (document.getElementById("hours") != null) {
			document.getElementById("hours").innerHTML = makeMeTwoDigits(hours);
		}

		if (document.getElementById("min") != null) {
			document.getElementById("min").innerHTML = makeMeTwoDigits(minutes);
		}

		if (document.getElementById("sec") != null) {
			document.getElementById("sec").innerHTML = makeMeTwoDigits(sec);
		}

		if (document.getElementById("days_two") != null ) {
			document.getElementById("days_two").innerHTML = makeMeTwoDigits(days);
		}

		if (document.getElementById("hours_two") != null) {
			document.getElementById("hours_two").innerHTML = makeMeTwoDigits(hours);
		}

		if (document.getElementById("min_two") != null) {
			document.getElementById("min_two").innerHTML = makeMeTwoDigits(minutes);
		}

		if (document.getElementById("sec_two") != null) {
			document.getElementById("sec_two").innerHTML = makeMeTwoDigits(sec);
		}

		if (document.getElementById("days_three") != null ) {
			document.getElementById("days_three").innerHTML = makeMeTwoDigits(days);
		}

		if (document.getElementById("hours_three") != null) {
			document.getElementById("hours_three").innerHTML = makeMeTwoDigits(hours);
		}

		if (document.getElementById("min_three") != null) {
			document.getElementById("min_three").innerHTML = makeMeTwoDigits(minutes);
		}

		if (document.getElementById("sec_three") != null) {
			document.getElementById("sec_three").innerHTML = makeMeTwoDigits(sec);
		}

	})
};
salesTimer();

function changeToUpperCase(el){
	el.value = el.value.trim().toUpperCase();
}

function dropdownMenu(){
	document.getElementById("category__dropdownList").classList.toggle("show");
	document.getElementById("category__btnSelect").classList.toggle("rotate");
}

$(document).ready(function() {

	function myLazyFunc(s) {
		function i(e, t) {
			var s = new Image,
			i = e.getAttribute("data-src");
			s.onload = function() {
				e.parent ? e.parent.replaceChild(s, e) : e.src = i, t && t()
			}, s.src = i
		}
	
		function e() {
			for (var e = 0; e < n.length; e++) 0 <= (t = n[e].getBoundingClientRect()).top && 0 <= t.left && t.top <= (s.innerHeight || document.documentElement.clientHeight) && i(n[e], function() {
				n.splice(e, e)
			});
				var t
			}
			for (var n = new Array, t = function(e, t) {
				if (document.querySelectorAll) t = document.querySelectorAll(e);
				else {
					var s = document,
					i = s.styleSheets[0] || s.createStyleSheet();
					i.addRule(e, "f:b");
					for (var n = s.all, a = 0, o = [], r = n.length; a < r; a++) n[a].currentStyle.f && o.push(n[a]);
						i.removeRule(0), t = o
				}
				return t
			}("img.lazy"), a = 0; a < t.length; a++) n.push(t[a]);
				e(),
				function(e, t) {
					s.addEventListener ? this.addEventListener(e, t, !1) : s.attachEvent ? this.attachEvent("on" + e, t) : this.onscroll = t
				}("scroll", e)
			}(this);
			var lazyLoadInstance = new LazyLoad({
				elements_selector: ".lazy",
				load_delay: 100
			});

	var btnScrollTop = document.getElementById("btnScrollTop");
	window.onscroll = function() {scrollFunction()};

	function scrollFunction(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		btnScrollTop.style.display = "flex";
	} else {
		btnScrollTop.style.display = "none";
	}
	}

	btnScrollTop.onclick = function topFunction(){
  		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	const toggler = document.querySelector(".menu-button"),
		topNav = document.querySelector(".menu__list"),
		hideLogoPhone = document.querySelector(".head__container");

	toggler.addEventListener("click", function() {
		topNav.classList.toggle("active");
		hideLogoPhone.classList.toggle("hide");
	}, false);

	window.onclick = function(event){
		if (!event.target.matches('.article__btnSelect')){
			var dropdowns = document.getElementsByClassName("article__dropdownList");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}

	$("#searchClick").click(function(){
		document.querySelector('.navigation__search__field').style.backgroundColor = "#fffbd5";
    	document.querySelector('.navigation__search__field').placeholder = "Введите запрос в это поле!";
    	return false;
	});

	$(".help-item").click(function(){
		$('.help-item--body_inner', this).toggleClass("show");
		$('.help-item--body', this).toggleClass("bottom");
	
		if($(".help-item--body_inner").hasClass("show")){
			$('html, body').css('overflow', 'hidden');
		}
		else{
			$('html, body').css('overflow', 'auto');
		}
	});


});

var fired = false;
window.addEventListener('scroll', () => {
	if (fired === false) {
		fired = true;

		setTimeout(() => {

			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-103806620-1');

			(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
				ym(24486641, "init", {
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
				});

				$(".b-doctor-rates__filter-radio_all").click(function(){
					$(".b-review-card_negative").css("display", "flex");
					$(".b-review-card_neutral").css("display", "flex");
					$(".b-review-card_positive").css("display", "flex");
				});
				$(".b-doctor-rates__filter-radio_positive").click(function(){
					$(".b-review-card_negative").css("display", "none");
					$(".b-review-card_neutral").css("display", "none");
					$(".b-review-card_positive").css("display", "flex");
				});
				$(".b-doctor-rates__filter-radio_negative").click(function(){
					$(".b-review-card_positive").css("display", "none");
					$(".b-review-card_neutral").css("display", "none");
					$(".b-review-card_negative").css("display", "flex");
				});
				$(".b-doctor-rates__filter-radio_neutral").click(function(){
					$(".b-review-card_positive").css("display", "none");
					$(".b-review-card_negative").css("display", "none");
					$(".b-review-card_neutral").css("display", "flex");
				});
				$(".btn_reviews_prodoc").click(function(){
					$(".b-doctor-details__main").css("overflow","inherit");
					$(".b-doctor-details__main").css("height","auto");
					$(".btn_reviews_prodoc").css("display","none");
				});

	/* load later sliders */
	$('.slider__filials-second').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		appendArrows: $(".slider__filials-nav"),
		appendDots: $(".slider__filials-nav"),
	});


$(".faqPage__slider").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1; // + 3
	$('.faqPage__topic__counter').text(i + ' из ' + slick.slideCount);
});

$(".faqPage__slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	focusOnSelect: true,
	arrows: false,
	dots: false,
	draggable: false
});

$('.faqPage__question-item').click(function(e) { //onlick
	e.preventDefault();
	$('.faqPage__question-item').removeClass('active');
	$(this).addClass('active')
	var slideno = $(this).data('slide');
	$('.faqPage__slider').slick('slickGoTo', slideno - 1);
});

$(".faqPage__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.faqPage__topic__counter').text(i + ' из ' + slick.slideCount);
});

$(".faqPage__slider").on('afterChange', function (event, slick, currentSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.faqPage__topic__counter').text(i + ' из ' + slick.slideCount);
});

$(".doctor__slider-main").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1; // + 3
	var j = slick.slideCount - 1;
	$('.doctorsMain__counter').text(i + ' из ' + j);
});

$(".doctor__slider-main").slick({
	focusOnSelect: false,
	fade: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	infinite: false,
	arrows: true,
	dots: true,
	appendArrows: $(".doctor__slider-nav"),
	appendDots: $(".doctor__slider-nav"),

	responsive: [
	{
		breakpoint:1200,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint:992,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint:768,
		settings: {
			slidesToShow: 1,
			dots: false,
			arrows:true
		}
	},
	{
		breakpoint:576,
		settings: {
			slidesToShow: 1,
			dots: false,
			arrows:true
		}
	},
	]
});

$(".doctor__slider-main").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1; // + 3
	var j = slick.slideCount - 1;
	$('.doctorsMain__counter').text(i + ' из ' + j);
});

$(".doctor__slider-main").on('afterChange', function (event, slick, currentSlide){
	var i = (currentSlide ? currentSlide : 0) + 1; // + 3
	var j = slick.slideCount - 1;
	$('.doctorsMain__counter').text(i + ' из ' + j);
});

$(".method__slider__photo").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: ".method__slider__nav",
	fade: !0,
	arrows: !0,
	dots: !0,
	appendDots: $(".method__slider__photo-nav"),
	appendArrows: $(".method__slider__photo-nav")
});

$(".method__slider__nav").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: ".method__slider__photo",
	dots: !1,
	infinite: !1,
	arrows: !1,
	focusOnSelect: !0
});

$(".direction__slider__photo").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: ".direction__slider__nav",
	fade: !0,
	arrows: !0,
	dots: !0,
	appendDots: $(".direction__slider__photo-nav"),
	appendArrows: $(".direction__slider__photo-nav")
});

$(".direction__slider__nav").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: ".direction__slider__photo",
	infinite: !1,
	arrows: !1,
	dots: !1,
	focusOnSelect: !0,
	responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint:768, 
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 3
			}
		},
	]
});

$(".sectificates__slider-main__slide").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: !0,
	asNavFor: ".sectificates__slider-nav",
	arrows: !0,
	dots: !0,
	appendDots: $(".sectificates__slider-main-nav"),
	appendArrows: $(".sectificates__slider-main-nav"),

	responsive: [
		{
			breakpoint:2000,
			settings: {
				dots: true,
				arrows: true
			}
		},
		{
			breakpoint:1200,
			settings: {
				dots: true,
				arrows: true
			}
		},
		{
			breakpoint:992,
			settings: {
				dots: true,
				arrows: true
			}
		},
		{
			breakpoint:768, 
			settings: {
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint:576,
			settings: {
				dots: false,
				arrows: true
			}
		},
	]
}),

$(".sectificates__slider-nav").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".sectificates__slider-main__slide",
	dots: !1,
	vertical: !0,
	centerMode: !1,
	infinite: !0,
	arrows: !1,
	focusOnSelect: !0,

	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			vertical: !1
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			vertical: !1
		}
	}, {
		breakpoint: 0,
		settings: {
			slidesToShow: 2,
			vertical: !1
		}
	}]
}),

$(".method__procedure__sliderPhoto").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.method__procedure__counter').text(i + ' из ' + slick.slideCount);
    // remove dots
    if (!($('.method__procedure__sliderPhoto .slick-slide').length > 2)) {
    	if (window.matchMedia("(max-width: 400px)").matches) {
  			$('.method__procedure__sliderPhoto-nav .slick-dots').show();
		} else {
  			$('.method__procedure__sliderPhoto-nav .slick-dots').hide();
		}
    }
});

$(".method__procedure__sliderPhoto").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: !0,
	asNavFor: ".method__procedure__sliderNav",
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: !0,
	dots: !0,
	appendArrows: $(".method__procedure__sliderPhoto-nav"),
	appendDots: $(".method__procedure__sliderPhoto-nav")
});

$(".method__procedure__sliderNav").slick({
	slidesToShow: 3, 
	slidesToScroll: 1,
	asNavFor: ".method__procedure__sliderPhoto",
	dots: !1,
	infinite: !1,
	fade: !1,
	arrows: !1,
	focusOnSelect: !0,

	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 3
		}
	}, {
		breakpoint: 0,
		settings: {
			slidesToShow: 2
		}
	}]
});

$(".method__procedure__sliderPhoto").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.method__procedure__counter').text(i + ' из ' + slick.slideCount);
});

$(".method__procedure__sliderPhoto").on('afterChange', function (event, slick, currentSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.method__procedure__counter').text(i + ' из ' + slick.slideCount);
});

$(".doctor__slider-treat").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: !1,
	infinite: !1,
	asNavFor: ".doctor__slider__nav",
	dots: true,
	arrows: true,
	appendArrows: $(".doctor__slider-nav"),
	appendDots: $(".doctor__slider-nav"),

	responsive: [
	{
		breakpoint:1200,
		settings: {
			slidesToShow: 2,
			dots: true
		}
	},
	{
		breakpoint:992,
		settings: {
			slidesToShow: 2,
			dots: true
		}
	},
	{
		breakpoint:768,
		settings: {
			slidesToShow: 1,
			dots: false
		}
	},
	{
		breakpoint:576,
		settings: {
			slidesToShow: 1,
			dots: false
		}
	},
	]
});

$(".doctor__slider__nav").slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: ".doctor__slider-treat",
	dots: !1,
	arrows: !1,
	infinite: !1,
	focusOnSelect: !0,
	responsive: [
	{
		breakpoint:1200,
		settings: {
			slidesToShow: 6,
			dots: true
		}
	},
	{
		breakpoint:992,
		settings: {
			slidesToShow: 4,
			dots: true
		}
	},
	{
		breakpoint:768,
		settings: {
			slidesToShow: 2,
			dots: false
		}
	},
	{
		breakpoint:576,
		settings: {
			slidesToShow: 2,
			dots: false
		}
	},
	]
}); 

$(".methods__slider").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.methodsMain__counter').text(i + ' из ' + slick.slideCount);
	$('.methods__counter').text(i + ' из ' + slick.slideCount);
    // remove dots
    if (!($('.methods__slider .slick-slide').length > 3)) {
    	if (window.matchMedia("(max-width: 400px)").matches) {
  			$('.methods__slider-nav .slick-dots').show();
		} else {
  			$('.methods__slider-nav .slick-dots').hide();
		}
    }
});

$(".methods__slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	focusOnSelect: !0,
	fade: false,
	infinite: false,
	dots: true,
	arrows: true,
	appendArrows: $(".methods__slider-nav"),
	appendDots: $(".methods__slider-nav"),

	responsive: [
	{
		breakpoint:1200,
		settings: {
			slidesToShow: 2,
			dots: true
		}
	},
	{
		breakpoint:992,
		settings: {
			slidesToShow: 2,
			dots: true
		}
	},
	{
		breakpoint:768,
		settings: {
			slidesToShow: 2,
			dots: false,
			arrows:true
		}
	},
	{
		breakpoint:576,
		settings: {
			slidesToShow: 1,
			dots: false,
			arrows:true
		}
	},
	]
});

$(".methods__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.methodsMain__counter').text(i + ' из ' + slick.slideCount);
	$('.methods__counter').text(i + ' из ' + slick.slideCount);
});

$(".methods__slider").on('afterChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.methodsMain__counter').text(i + ' из ' + slick.slideCount);
	$('.methods__counter').text(i + ' из ' + slick.slideCount);
});

$(".diagnostics__slider").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.diagnostics__counter').text(i + ' из ' + slick.slideCount);
	// remove dots
    if (!($('.diagnostics__slider .slick-slide').length > 3)) {
    	$('.diagnostics__slider-nav .slick-dots').hide();
    }
});

$(".diagnostics__slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	focusOnSelect: !0,
	infinite: !1,
	arrows: true,
	dots: true,
	appendArrows: $(".diagnostics__slider-nav"),
	appendDots: $(".diagnostics__slider-nav"),
	responsive: [
	{
		breakpoint:1200,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint:992,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint:768,
		settings: {
			slidesToShow: 1
		}
	},
	{
		breakpoint:576,
		settings: {
			slidesToShow: 1
		}
	},
	]
});

$(".diagnostics__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.diagnostics__counter').text(i + ' из ' + slick.slideCount);
});

$(".diagnostics__slider").on('afterChange', function (event, slick, currentSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('.diagnostics__counter').text(i + ' из ' + slick.slideCount);
});

	$(".phys__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.phys__counter').text(i + ' из ' + slick.slideCount);
		// remove dots
    	if (!($('.phys__slider .slick-slide').length > 3)) {
    		$('.phys__slider-nav .slick-dots').hide();
    	}
	});

	$(".phys__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: !0,
		infinite: !1,
		arrows: true,
		dots: true,
		appendArrows: $(".phys__slider-nav"),
		appendDots: $(".phys__slider-nav"),
		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		]
	});

	$(".phys__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.phys__counter').text(i + ' из ' + slick.slideCount);
	});
	
	$(".phys__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.phys__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".regenerat__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.regenerat__counter').text(i + ' из ' + slick.slideCount);
    	if (!($('.regenerat__slider .slick-slide').length > 3)) {
    		$('.regenerat__slider-nav .slick-dots').hide();
    	}
	});

	$(".regenerat__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: !0,
		infinite: !1,
		arrows: true,
		dots: true,
		appendArrows: $(".regenerat__slider-nav"),
		appendDots: $(".regenerat__slider-nav"),
		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		]
	});

	$(".regenerat__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.regenerat__counter').text(i + ' из ' + slick.slideCount);
	});
	
	$(".regenerat__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.regenerat__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".hirurg__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.hirurg__counter').text(i + ' из ' + slick.slideCount);
		// remove dots
    	if (!($('.hirurg__slider .slick-slide').length > 3)) {
    		$('.hirurg__slider-nav .slick-dots').hide();
    	}
	});

	$(".hirurg__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: !0,
		infinite: !1,
		arrows: true,
		dots: true,
		appendArrows: $(".hirurg__slider-nav"),
		appendDots: $(".hirurg__slider-nav"),
		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		]
	});

	$(".hirurg__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.hirurg__counter').text(i + ' из ' + slick.slideCount);
	});
	
	$(".hirurg__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.hirurg__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".medic__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.medic__counter').text(i + ' из ' + slick.slideCount);
		// remove dots
    	if (!($('.medic__slider .slick-slide').length > 3)) {
    		$('.medic__slider-nav .slick-dots').hide();
    	}
	});

	$(".medic__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: !0,
		infinite: !1,
		arrows: true,
		dots: true,
		appendArrows: $(".medic__slider-nav"),
		appendDots: $(".medic__slider-nav"),
		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		]
	});

	$(".medic__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.hirurg__counter').text(i + ' из ' + slick.slideCount);
	});
	
	$(".medic__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.medic__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".newsMain__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.newsMain__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".newsMain__slider").slick({
		slidesToScroll: 1,
		slidesToShow: 2,
		focusOnSelect: !0,
		infinite: true,
		arrows: true,
		dots: true,
		appendArrows: $(".newsMain__slider-nav"),
		appendDots: $(".newsMain__slider-nav"),
		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 2,
				dots: false
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		},
		]
	});

	$(".newsMain__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.newsMain__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".newsMain__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.newsMain__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".reviews__navslider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.reviews__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".reviews__mainslider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: ".reviews__navslider",
		arrows: true,
		dots: true,
		appendArrows: $(".reviews__mainslider-nav"),
		appendDots: $(".reviews__mainslider-nav"),

		responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 1
			}
		},
		]
	});

	$(".reviews__navslider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: ".reviews__mainslider",
		dots: !1,
		infinite: !1,
		arrows: false,
		focusOnSelect: !0
	});
	
	$(".reviews__navslider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.reviews__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".reviews__navslider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.reviews__counter').text(i + ' из ' + slick.slideCount);
	});			

		}, 3000)
	}
});