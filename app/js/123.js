$(document).ready(function(){
	$(".saleSecond__smsform__btn").click(function(){
		sendAjaxForm('result_form', 'ajax_form', '/include/promocode/send_sms.php');
		return false;
	});

	$("#sms_check_form").on('submit', function(e) {
		let user_code = document.getElementById('get_num').value;

		let options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};

		let addDays = 14;
		let date = new Date()
		date.setDate(date.getDate() + addDays);
		let endSale = date.toLocaleString("ru", options);

		if (user_code == generated_code) {
			e.preventDefault();

			$('#result_form').html('<div class="col_number"><b>СПАСИБО ЗА ВЫБОР ДОКТОР ОСТ!</b><p>Наши администраторы перезвонят в ближайшее время, чтобы выбрать из свободных часов удобное время для Вашего визита в Доктор ОСТ.</p><p>Предложение будет действовать в течение <b>2 недель<b> с момента получения уникального кода.</p><p>Предложение будет действовать для вас до '+endSale+' </p></div>');

			$('.saleSecond__userDate').fadeOut(1000);

			$.ajax({
				url: '/include/promocode/send_sms.php',  
				type: "POST",
				data: $(this).serialize()
			});
		}

		else {
			alert("Неверный код"); 
		}
	});

	function sendAjaxForm(result_form, ajax_form, url) {

		let name  = $('.smsName').val();
		let phone = $('.smsPhone').val();
		let flag  = 0;

		if (name == '') {
			$('.smsName').css({"background-color": "#fff9c1"});
			let flag = 1;
		}

		if (phone == '') { //+7 (   )         
			$('.smsPhone').css({"background-color": "#fff9c1"});
			let flag = 1;
		}

		else {
			$('.smsName').css({"background-color": "#fff"});
			$('.smsPhone').css({"background-color": "#fff"});

			$.ajax({
				url: url,  
				type: "POST",
				dataType: "html",
				data: $("#"+ajax_form).serialize(),   
				success: function(response) {  
					result = $.parseJSON(response);
					//$('#ajax_form').hide();
					//$('#ajax_check_form').css({"display":"flex"});
					$('#result_form').html('<div class="col_number">Введите код, полученный в SMS-сообщении, на указанный Вами номер телефона. </div>');

					city_name = window.result.SELECTED_CITY;
					city_name_letter = window.result.SELECTED_CITY[0]; 
					first_letter = window.result.type_sale[0];

              if (city_name_letter == "К") { ///тут кириллица
              	if (city_name == "Казань") {
                  generated_code = first_letter + "KZ" + window.result.code; //Казань на латинице, кириллица не подходит
                }
                if (city_name == "Краснодар") {
                  generated_code = first_letter + "KD" + window.result.code; //Краснодар
                }
                if (city_name == "Красноярск") {
                  generated_code = first_letter + "KR" + window.result.code; //Красноярск
                }
                else {
                	return false;
                }
              }

              if (city_name_letter == "Н") {
              	if (city_name == "Новосибирск") {
                  generated_code = first_letter + "NS" + window.result.code; //Новосибирск
                }
                if (city_name == "Нижний Новгород") {
                  generated_code = first_letter + "NN" + window.result.code; //Нижний Новгород
                }
              }

              if(city_name_letter == "Ч") {
                generated_code = first_letter + "CH" + window.result.code; //Челябинск
                alert(generated_code);
              }

              if(city_name_letter == "Е") {
                generated_code = first_letter + "E" + window.result.code; //Екатеринбург
              }

              if(city_name_letter == "С") {
                generated_code = first_letter + "S" + window.result.code; //Самара
              }

              if(city_name_letter == "Т") {
                generated_code = first_letter + "T" + window.result.code; //Тюмень
              }

              if(city_name_letter == "П") {
                generated_code = first_letter + "P" + window.result.code; //Пермь
              }
            },
            error: function(response) {  
            	$('#result_form').html('Ошибка. Данные не отправлены.');
            }
          });
		}
	}
})