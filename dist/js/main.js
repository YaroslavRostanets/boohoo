$(document).ready(function(){

    /*--Слайдер в табах Главная --*/
    var tabSliderOptions = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: "<a class='arrow prev'><i class='icon-menu-arrow-left'></i></a>",
        nextArrow: "<a class='arrow next'><i class='icon-menu-arrow-right'></i></a>"
    };

    $('.tab-slider').slick(tabSliderOptions);

    $('.tabs-slider .one-but').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var activeTab = $(this).attr('data-tab');
        $(activeTab).siblings().hide();
        $(activeTab).show();
        $(activeTab).slick('unslick');
        $(activeTab).slick(tabSliderOptions);
    });

    $('.tabs-slider .one-but.active').click();

    /*--конец Слайдер в табах Главная --*/

    /*--Выбор языка--*/
    (function(){
        $('.js-current-country').on('click', function(){
            $(this).addClass('open');
        });
        $(document).mouseup(function (e) {
            var container = $(".js-current-country");
            if (container.has(e.target).length === 0){
                container.removeClass('open');
            }
        });
    })();
    /*--конец Выбор языка--*/

    /*--форма поиска--*/
    (function(){
        var form = $('.js-search-form-wrap');
        var input = form.find('.js-search-input');
        console.log(input);
        $('.js-search-icon').on('click', function(e){
            e.preventDefault();
            if(!$(this).closest('.search-form-wrap').hasClass('opened')
                && input.val() == ''){
                form.addClass('opened');
                form.find('.js-search-input').fadeIn(200);
            } else {
                
            }
        });
        $(document).mouseup(function (e) {
            if (form.has(e.target).length === 0){
                form.removeClass('opened');
            }
        });
    })();

    /*--конец Форма поиска--*/

});