$(document).ready(function() {

		// ====== burger menu ====
		$('.burger_menu').click(function(event) {
			$('.burger_menu, .header_links, .header').toggleClass('active')
			$('body').toggleClass('lock')
		})
	
	$('.tab_tb_name').click(function(event) {
		$('div.' + $(this).attr('data-block')).toggleClass('active')
        $(this).children().children().toggleClass('rotate')
        // $('body').toggleClass('lock')
	})

	$("form").submit(function() { //Change
		var th = $(this)
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".popup_content").addClass('popup_content_disab')
			$(".popup_text").addClass('popup_text_compl')
			setTimeout(function() {
				// Done Functions
				th.trigger("reset")
			}, 1000);
		})
		return false;
	})

    var blurtime
    $(document).on("focus", "input", function (e) {
        console.log("focus on")
        clearTimeout(blurtime)
        $( this ).addClass('onFocus')
        $('popup').addClass('virtual-keyboard')
        $('popup_window, .popup').animate({
            scrollTop: $( this ).offset().top
        }, 1000)
    }).on("blur", "input", function (e) {
        $( this ).removeClass('onFocus')
        blurtime = setTimeout(function(){
            $('popup').removeClass('virtual-keyboard')
        },200)
        console.log("blur on")
    })
})

$(function () {
	$('.popup_call').click(function () {
		$('.popup').removeClass('popup_active')
		$('.popup_content').removeClass('popup_content_disab')
		$('.popup_text').removeClass('popup_text_compl')
		$('.popup').addClass('popup_active') 
		$('body').addClass('popup_lock') 		
	})

	$('div.popup_closed').click(function () {
		$(this).parent().removeClass('popup_active')
		$(this).parent().parent().removeClass('popup_active')
		$('body').removeClass('popup_lock')
	})

})

jQuery(function($){
    $.fn.setCursorPosition = function(pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos)
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange()
			range.collapse(true)
			range.moveEnd('character', pos)
			range.moveStart('character', pos)
			range.select()
		}
	}
	
	$("#phone, #phone2").click(function(){
		$(this).setCursorPosition(3)
	  }).mask("+7(999) 999-99-99")
 })

