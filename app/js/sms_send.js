$(document).ready(function(){
  	$(".smsForm").submit(function(){
   		$(".overlay-sms--review").hide();
   		/* тут проверка номера и отправка смс */
   		$(".overlay-specialist--review").show();
  	});
});