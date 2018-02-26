$(document).ready(function () {
    $("#nav-mobile-activate").on('click', function () {
        $("#nav-mobile").addClass('nav-mobile-active');
    });
    var checkInputLabel = function () {
        $(".collaps-inp").each(function () {
            if ($(this).val() !== "") {
                $(this).next("label").addClass("collapsed");
            }
        });
        $(".search").each(function () {
            if ($(this).val() !== "") {
                $(this).prev("label").addClass("collapsed");
            }
        });
    };
    checkInputLabel();
    $(".search").on('focus', function () {
        $(this).prev("label").addClass("collapsed");
    });
    $(".search").on('focusout', function () {
        if ($(this).val() === "") {
            $(this).prev("label").removeClass("collapsed");
        }
    });

    $(".collaps-inp").on('focus', function () {
        $(this).next("label").addClass("collapsed");
    });
    $(".collaps-inp").on('focusout', function () {
        if ($(this).val() === "") {
            $(this).next("label").removeClass("collapsed");
        }
    });
    $(".open-popup").on('click', function (e) {
        e.preventDefault();
        var popupId = $(this).data('id');
        console.log(popupId);
        $("#overlay").show();
        $('#' + popupId).fadeIn();
    });
    $(".close-popup").on('click', function () {
        $("#overlay").hide();
        $(this).parents('.popup').fadeOut();
    });
    $(".js-unlock-inputs").on('click', function () {
        $(this).closest("form").find(".name").focus();
        $(this).closest("form").find("input").removeAttr("readonly").addClass("bordered");

        $(this).slideUp().siblings(".personal-info-btn").removeClass("hidden");
        $(this).closest("form").find(".upload-avatar").fadeIn();
    });
    $(".show-more").on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().find(".recall-wrap.hidden").eq(0).slideDown().removeClass('hidden');
    });
    $('.video-play').on('click', function () {
        var oldUrl = $(this).parent().data("href").toString();
        var n = oldUrl.search('\\?v=');
        oldUrl = oldUrl.substring(n + 3, oldUrl.length);
        oldUrl = oldUrl.split('&')[0];
        var srcVid = 'src="https://www.youtube.com/embed/' + oldUrl + '?autoplay=1"';
        $(this).parent().parent().html('<iframe id="video" width="560" height="430" ' + srcVid + 'frameborder="0" allowfullscreen></iframe>');
    });

    if ($(".carousel-three-slides").length > 0) {
        $(".carousel-three-slides").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<button type="button" data-role="none"class="slick-prev slick-arrow" aria-label="Prev" role="button" ><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" ><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    $(".js-carousel-one-slid").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: '<button type="button" data-role="none"  class="read-next slick-arrow" aria-label="Next" role="button" ><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" data-role="none"class="read-prev slick-arrow" aria-label="Prev" role="button" ><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        arrows: true
    });
    $(".js-schedule-carousel").each(function () {
        var dataTextPrev = $(this).data("textprev");
        var dataTextNext = $(this).data('textnext');
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            prevArrow: '<button type="button" data-role="none" class="slick-arrow slick-prev" aria-label="Prev" role="button" ><i class="fa fa-angle-double-left" aria-hidden="true"></i>' + dataTextPrev + '</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-arrow slick-next" aria-label="Next" role="button" >' + dataTextNext + '<i class="fa fa-angle-double-right" aria-hidden="true"></i></button>'
        });

    });

    var kitcut = function (text, limit) {
        text = text.trim();
        if (text.length <= limit) return text;
        text = text.slice(0, limit); // тупо отрезать по лимиту
        lastSpace = text.lastIndexOf(" ");
        if (lastSpace > 0) { // нашлась граница слов, ещё укорачиваем
            text = text.substr(0, lastSpace);
        }
        return text + "...";
    };


    $('.blog-prw-text').each(function () {
        $(this).text(kitcut($(this).text(), 200));
    });
    $(".you-are-participant").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });
    $(".js-full-block-as-link").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });
    $(document).mouseup(function (e) {
        var container = $(".popup");
        if (container.has(e.target).length === 0 && $('.open-popup').has(e.target).length === 0) {
            container.fadeOut();
            $("#overlay").hide();
        }
    });
    $(".select2").each(function () {
        $(this).select2({
            allowClear: false,
            minimumResultsForSearch: Infinity
        });
    });
    $(".js-tab-btn").on("click", function () {
        var n = $(this).data("tab");
        $(this).siblings('.active').removeClass("active");
        $(this).addClass("active");
        $(this).closest(".tabs").find(".tab-content-item.active-tab").css("display", "none").removeClass("active-tab");
        $(this).closest(".tabs").find(".tab-content-item").eq(n).fadeIn().addClass("active-tab");

    });
    $(".js-carousel-for-slides").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(function () {

        var ts,
            dataTime = parseInt($('#countdown').data('time'));

        ts = (new Date()).getTime() + dataTime;
        console.log(dataTime);
        console.log('l');
        console.log('l');
        $('#countdown').countdown({
            timestamp: ts,
            callback: function (days, hours, minutes, seconds) {
                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    $("#countdown").addClass('complited');
                }
            }
        });

    });
});