$(document).ready(function(){

	/*$(".saleSecond__smsform__btn").click(function(){
    	sendAjaxForm('result_form', 'form_63', '/include/promocode/send_sms.php');
    	return false;
  	});*/


    function send_dataAjax(myForm) {
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
            data: FORM_DATA,
            cache: false,
            processData: (!bTypeFD),
            contentType: (bTypeFD ? false : 'application/x-www-form-urlencoded;charset=UTF-8'),
            success: function (response){
                result = JSON.parse(response);
				
                if(!result.error){

                    if(sID == 63){ //если это СМС форма                
						$('.saleSecond__smsform').remove(); //скрываем лишнее
						$('.saleSecond__smsform__check').css({"display":"flex"});
						let generated_code = 1234;
                    }
                    else{
                        let html = '<div class="thanks-form"><h1>Спасибо за Ваше обращение!</h1></div>';
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

    $('.form-bars').on('submit', function (e) {
        e.preventDefault();
        send_dataAjax(this);
    });

    $('#sms_check_form').on('submit', function(f){
		let user_code = document.getElementById('get_num').value;

		if (user_code == generated_code) {
      		f.preventDefault();
      		let html = '<div class="thanks-form"><h1>Спасибо за Ваше обращение!</h1></div>';
            $('#form_' + sID).html(html);
            $.ajax({
        		url: '/include/promocode/send_sms.php',  
        		type: 'POST',
        		data: $(this).serialize()
      		});
  		}
  		else{
  			alert("Неверный код");
  		}
	});

});


$(document).ready(function(){

$(document).scroll(function(){
    window.matchMedia("only screen and (min-device-width: 768px) and (max-device-width: 1920px)").matches && ($(this).scrollTop() <= 100 ? $(".head").fadeIn() : $(".head").fadeOut());
});

$('.faqPage__question-item').click(function(){
    $('.faqPage__question-item').removeClass('active');
    $(this).addClass('active');
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


$(".topMain__slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade:true,
	arrows: !1,
	focusOnSelect: !0,
	infinite: !1,
	dots: true,
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
				dots: false
			}
		},
		{
			breakpoint:576,
			settings: {
				dots: false
			}
		},
	]
});

$(".topMain__direction").slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	fade:false,
	arrows: !1,
	focusOnSelect: !0,
	infinite: !1,
	dots: true,
	responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 5,
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
				slidesToShow: 3,
				dots: false
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
	]
});

$('.slider__filials-second').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
    dots: true,
    arrows: !1
});

// акции главная
$(".sales-mainslider").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1; // + 3
    $('.salesMain__counter').text(i + ' из ' + slick.slideCount);
});

$(".sales-mainslider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	fade:false,
	arrows: !1,
	focusOnSelect: !0,
	infinite: !1,
	dots: true,
	responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 3,
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
				dots: true
			}
		},
	]
});

$(".sales-mainslider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
    $('.salesMain__counter').text(i + ' из ' + slick.slideCount);
});

$(".sales-mainslider").on('afterChange', function (event, slick, currentSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
    $('.salesMain__counter').text(i + ' из ' + slick.slideCount);
});

$(".faqPage__slider").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1; // + 3
    $('.faqPage__answer__counter').text(i + ' из ' + slick.slideCount);
});

$(".faqPage__slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade:true,
	arrows: !1,
	dots: !1,
	focusOnSelect: !0,
	infinite: !1
});

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   //var element = document.getElementsByClassName("faqPage__question-item");
   //element.classList.add("active");

   var slideno = $(this).data('slide');
   $('.faqPage__slider').slick('slickGoTo', slideno - 1);
 });

$(".faqPage__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
    $('.faqPage__answer__counter').text(i + ' из ' + slick.slideCount);
});

$(".faqPage__slider").on('afterChange', function (event, slick, currentSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
    $('.faqPage__answer__counter').text(i + ' из ' + slick.slideCount);
});


$(".doctor__slider-main").on('init', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1; // + 3
    $('.doctorsMain__counter').text(i + ' из ' + slick.slideCount);

    if (!($('.doctor__slider-main .slick-slide').length > 2)) {
        $('.slick-dots').hide();
    }
});


$(".doctor__slider-main").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: !1,
	infinite: !1,
	dots: true,
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

$(".doctor__slider-main").on('beforeChange', function (event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
   	$('.doctorsMain__counter').text(i + ' из ' + slick.slideCount);
});

$(".doctor__slider-main").on('afterChange', function (event, slick, currentSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
    $('.doctorsMain__counter').text(i + ' из ' + slick.slideCount);
});


$(".method__slider__photo").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: !0,
	arrows: !1,
	asNavFor: ".method__slider__nav",
	dots: !0,
});

$(".method__slider__nav").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: ".method__slider__photo",
	dots: !1,
	centerMode: !1,
	infinite: !1,
	arrows: !1,
	focusOnSelect: !0
});

$(".direction__slider__photo").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: !0,
	arrows: !1,
	asNavFor: ".direction__slider__nav",
	dots: !0,
});

$(".direction__slider__nav").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: ".direction__slider__photo",
	dots: !1,
	centerMode: !1,
	infinite: !1,
	arrows: !1,
	focusOnSelect: !0
});

$(".sectificates__slider-main__slide").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: !0,
	dots: !0,
	arrows: !1,
	asNavFor: ".sectificates__slider-nav"
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


$(".method__procedure__sliderPhoto").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: !0,
	arrows: !1,
	asNavFor: ".method__procedure__sliderNav",
	dots: !0,
});

$(".method__procedure__sliderNav").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".method__procedure__sliderPhoto",
	dots: !1,
	centerMode: !1,
	infinite: !1,
	arrows: !1,
	focusOnSelect: !0
});

$(".doctor__slider-treat").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: !1,
	infinite: !1,
	asNavFor: ".doctor__slider__nav",
	dots: true
});

$(".doctor__slider__nav").slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: ".doctor__slider-treat",
	dots: !1,
	arrows: !1,
	focusOnSelect: !0
}); 

/* методы на главной */
	$(".methods__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.methodsMain__counter').text(i + ' из ' + slick.slideCount);
    	// remove dots
    	if (!($('.methods__slider .slick-slide').length > 3)) {
        	$('.slick-dots').hide();
    	}
	});

	$(".methods__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: !1,
		focusOnSelect: !0,
		infinite: !1,
		dots: true,
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

	$(".methods__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.methodsMain__counter').text(i + ' из ' + slick.slideCount);
	});
	$(".methods__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.methodsMain__counter').text(i + ' из ' + slick.slideCount);
	});

	/* диагностика */

	$(".diagnostics__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.diagnostics__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".diagnostics__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: !1,
		dots: !0,
		focusOnSelect: !0,
		infinite: !1
	});

	$(".diagnostics__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.diagnostics__counter').text(i + ' из ' + slick.slideCount);
	});
	
	$(".diagnostics__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.diagnostics__counter').text(i + ' из ' + slick.slideCount);
	});

	/////////////////////////

	$(".phys__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.phys__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".phys__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: !1,
		dots: !0,
		focusOnSelect: !0,
		infinite: !1
	});

	$(".phys__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.phys__counter').text(i + ' из ' + slick.slideCount);
	});
	
	$(".phys__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.phys__counter').text(i + ' из ' + slick.slideCount);
	});

	//////////////////////////

	$(".regenerat__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.regenerat__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".regenerat__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: !0,
		dots: !0,
		focusOnSelect: !0,
		infinite: !1
	});

	$(".regenerat__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.regenerat__counter').text(i + ' из ' + slick.slideCount);
	});
	
	$(".regenerat__slider").on('afterChange', function (event, slick, currentSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.regenerat__counter').text(i + ' из ' + slick.slideCount);
	});

	//////////////////////////

	/* новости на главной */
	$(".newsMain__slider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.newsMain__counter').text(i + ' из ' + slick.slideCount);
	});

	$(".newsMain__slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: !1,
		focusOnSelect: !0,
		infinite: !1,
		dots: true,
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

	/* отзывы на главной */

	$(".reviews__navslider").on('init', function (event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
    	$('.reviews__counter').text(i + ' из ' + slick.slideCount);
	});

	// remove dots
	$(".reviews__mainslider").on('init', function (event, slick, currentSlide, nextSlide){
    	if (!($('.reviews__mainslider .slick-slide').length > 1)) {
        	$('.slick-dots').hide();
    	}
	});

	$(".reviews__mainslider").slick({
		slidesToShow:1,
		slidesToScroll: 1,
		fade: !0,
		arrows: !1,
		asNavFor: ".reviews__navslider",
		dots: true
	});

	$(".reviews__navslider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: ".reviews__mainslider",
		dots: !1,
		infinite: !1,
		arrows: !1,
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
});

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


function salesTimer(){
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = String(today.getFullYear());

	if (mm % 2) { //если месяц четный
    	if (dd < 15) {
        	dd = 15;
    	}
    	else {
        	dd = 30;
    	}
	}
	else if (mm === '02') { //если февраль
  		if (dd < 15) {
        	dd = 15;
    	}
    	else {
        	dd = 28;
    	}
	}
	else {
    	if (dd < 15) {
        	dd = 15;

    	}
    	else {
        	dd = 31;
    	}
	}

	let countDown = new Date(mm+' '+dd+', '+yyyy+' 23:00:00').getTime(),

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

	})
};

salesTimer();

var btnScrollTop = document.getElementById("btnScrollTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
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

function dropdownMenu() {
  	document.getElementById("article__dropdownList").classList.toggle("show");
  	document.getElementById("article__btnSelect").classList.toggle("rotate");
}

window.onclick = function(event) {
	if (!event.target.matches('.article__btnSelect')) {
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