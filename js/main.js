$(function(){
    // Fixed Menu

    let header = $('#header');
    let headerCopy = header.clone();

    let intro = $('#intro');
    let introH = intro.innerHeight();

    let body = $('html, body');
    let bodyW = body.width();

    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function(){
        introH = intro.innerHeight();
        bodyW = body.width();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH && bodyW > 720){
            header.addClass('fixed');
            intro.before(headerCopy);
        } else{
            header.removeClass('fixed');
            headerCopy.remove();
        };
    });




    // Smooth Scroll

    $('[data-scroll]').on('click', function(e){
        e.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset - 30,
        }, 800);

    });

    $('.js-home').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: - 100
        }, 800);
    });

    



    // Burger menu

    $('.header__burger').click(function(e) {
        $('.header__burger, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('[data-scroll], .js-home').click(function(){
        $('.header__burger, .nav').removeClass('active');
        $('body').removeClass('lock')
    });

    



    // tabs

    let tabsBtn = $('.works__tabs-item');
    let tabsItem = $('.works__tabs-content__item');

    tabsBtn.on('click', function(e){
        e.preventDefault();

        let item = $(this);
        let tabId = item.attr('data-tab');
        let currentTab = $(tabId);

        if (! item.hasClass('active')) {
            tabsItem.animate({
                'opacity': '0'
            }, 200);

            function tabsAnim () {
                tabsItem.removeClass('active');
                currentTab.addClass('active');

                tabsItem.animate({
                    'opacity': '1'
                }, 200);
            };

            tabsBtn.removeClass('active');
            item.addClass('active');
            
            setTimeout(tabsAnim, 210);
        };
    });
    $('.works__tabs-item:first').click();




    // slider

    $('.team__slider').slick({
       arrows: false,
       dots: true,
       variableWidth: true,
       adaptiveHeight: true,
       infinite: false,
       slidesToShow: 3,
       slidesToScroll: 3,
       speed: 1000,
       touchThreshold: 10,
       responsive:[
            
            {
                breakpoint: 451,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    touchTreshold: 10,
                }
            }
       ]
    });


});

