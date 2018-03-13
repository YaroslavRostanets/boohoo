$(document).ready(function(){
    /*--Определение двайса--*/
    var state = {
        _device: "",
        _mobInit: function(){
            runMobile();
        },
        _tabletInit: function() {
            runTablet();
        },
        _descInit: function() {
            runDesctop();
        },
        _preWindowWidth: $(window).width(),
        _windowIncreases: function() {
            if(state._preWindowWidth > $(window).width()){
                state._preWindowWidth = $(window).width();
                return false;
            } else if (state._preWindowWidth < $(window).width()){
                state._preWindowWidth = $(window).width();
                return true;
            }
        }
    };

    (function( $ ) {
        $.fn.getDevice = function(braikPointMob,braikPointTablet) {
            Object.defineProperty(state, "device", {

                get: function() {
                    return this._device;
                },

                set: function(value) {
                    this._device = value;
                    if(value == "desctop"){
                        state._descInit();

                    } else if (value == "tablet"){
                        state._tabletInit();
                    } else if (value == "mobile"){
                        state._mobInit();
                    }
                }
            });

            $(this).on("resize load", function(){
                if($(this).width() < braikPointMob && state.device != "mobile"){
                    state.device = "mobile";
                } else if($(this).width() > braikPointMob && $(this).width() < braikPointTablet && state.device != "tablet") {
                    state.device = "tablet";
                }
                else if ($(this).width() > braikPointTablet && state.device != "desctop") {
                    state.device = "desctop";
                }
            });
        };
    })(jQuery);

    function runMobile(){
        $('.js-filter-modal.left-side').hide();
        $('h3.js-filter-toggle').on('click', filterCategoryMobileOpen);
        $('.js-close-filter-contain').on('click', filterCategoryMobileClose);
    }

    function runTablet(){
        console.log(state.device);
        $('h3.js-filter-toggle').unbind('click', filterCategoryMobileOpen);
        $('.js-close-filter-contain').unbind('click', filterCategoryMobileClose);
        $('.js-filter-modal.left-side').show();
        $('.js-filter-toggle').unbind('click', filterOpen);
        $(document).unbind('mouseup', filterClose);
        $('.refinements-wrapper .refinement>div').mCustomScrollbar();
        //$('.js-filter-toggle').closest('.refinement').addClass('opened');
    }

    function runDesctop(){

        console.log(state.device);
        //$('.js-filter-toggle').closest('.refinement').removeClass('opened');
        $('.refinements-wrapper .refinement>div').mCustomScrollbar('destroy');
        $('.js-filter-toggle').on('click', filterOpen);
        $(document).on('mouseup', filterClose);
    }

    $(window).getDevice(768,1024);

    /*--Слайдер в табах Главная --*/
    var tabSliderOptions = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: "<a class='arrow prev'><i class='icon-menu-arrow-left'></i></a>",
        nextArrow: "<a class='arrow next'><i class='icon-menu-arrow-right'></i></a>",
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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

    /*--малая корзинаа--*/
    $('.js-mini-cart-total').hover(function(){
        $('.mini-cart-content').fadeIn(100);
    }, function(){
        $('.mini-cart-content').fadeOut(100);
    });

    $('.js-mini-cart-products, .search-window').mCustomScrollbar();

    /*--конец малая корзина--*/

    /*------------------------*/
    $('.banners-below-nav-wrapper .icon-arrow').on('click', function(){
        $(this).closest('.banners-below-nav-wrapper').toggleClass('open');
    });
    /*------------------------*/

    /*--Моб-меню--*/
    $('.mobile-menu-toggle').on('click', function(){
        $('.js-mobile-menu').addClass('open');
        $('body').addClass('lock');
    });
    $('.js-menu-toggle').on('click', function(){
        $('.js-mobile-menu').removeClass('open');
        $('body').removeClass('lock');
    });
    $('.menu-category .has-submenu > a').on('click', function(e){
        if(state.device = 'mobile'){
            e.preventDefault();
            $(this).closest('.has-submenu').toggleClass('opened');
        }
    });

    $('.menu-vertical h3').on('click', function(e){
        $(this).closest('.menu-vertical').toggleClass('open');

    });
    /*--конец Моб-меню--*/

    /*--Аккордеоны в футере--*/
    $('footer .accordion-item h5').on('click', function(){
        var parent = $(this).closest('.accordion-item');
        if(parent.hasClass('opened')){
            parent.removeClass('opened');
            parent.find('.vertical-menu').slideUp(200);
        } else {
            parent.addClass('opened');
            parent.find('.vertical-menu').slideDown(200);
        }
    });
    /*--конец Аккордеоны в футере--*/

    /*--окно поиска--*/
    $('.search-window').mCustomScrollbar();
    $('.js-search-input').on('input', function(){
        if($(this).val().length > 3){
            $(".search-window").show();
        } else {
            $(".search-window").hide();
        }
    });
    $(document).mouseup(function (e) {
        var container = $(".search-window");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });
    /*--конец Окно поиска--*/

    /*--styler--*/
    $('[data-styler]').styler();
    /*--конец styler--*/

    /*--каталог Фильтры--*/
    function filterOpen(){
        var parent = $(this).closest('.refinement');
        parent.toggleClass('opened');
        parent.find('.js-filter-contain').toggle();
    }

    function filterClose(e){
        var container = $(".js-filter-contain");
        if (container.has(e.target).length === 0){
            container.hide();
            container.closest('.refinement').removeClass('opened')
        }
    }

    function filterCategoryMobileClose (){
        $(this).closest('.js-filter-contain').hide();
    }

    function filterCategoryMobileOpen (){
        $('.js-filter-contain').hide();
        $(this).siblings('.js-filter-contain').show();
    }

    $('.js-close-modal').on('click', function(){
        $('.js-filter-modal.left-side').hide();
    });
    $('.mobile-refine-by').on('click', function(){
        $('.js-filter-modal.left-side').show();
    });

    /*--конец каталог Фильтр--*/


});