
$(document).ready(function() {
	
	//<!-- Tabs -->
	var links = $('.team__item__link');
	var paragraphs = $('.team__text__item');

	links.on('click', function(event) {
		event.preventDefault();
		links.removeClass('active');
		paragraphs.removeClass('active');
		$(this).addClass('active');
		var link = this;
		links.each(function(index, el) {
			if (el === link) {
				$(paragraphs[index]).addClass('active');
			}
		});
	});

	//<!-- Accordion -->
	$('.quest__item').on('click', function() {
		console.log("cliked");
		$('.quest__item').removeClass('active');
		$(this).addClass('active');
	});
	
	
	//<!-- Scroll -->
	$('.products__text-link').click( function(e){
    	e.preventDefault();
	    var scroll_el = $(this).attr('href'); 
	    $('html, body').animate({ scrollTop: $(scroll_el).position().top }, 500); 
    });

   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

          
  	$(".form__input--tel").inputmask({"mask":"8 (999) 999-99-99"}); 

});
    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.757344, 37.604052],
            zoom: 18
        });
        myPlacemark = new ymaps.Placemark([55.757344, 37.604052], { balloonContent: 'Hipsweet Мы не знаем где находимся!',

         }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/map.png',
        iconImageSize: [42, 59]
    });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
