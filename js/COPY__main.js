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

    $('.works__tabs-item').click(function(e){
        e.preventDefault();

        let tabs = $('.works__tabs-item');
        let tabsContent = $('.works__tabs-content__item');
        let tabsContentActive = $('works__tabs-content__item--active');

        let item = $(this);
        
        tabsContent.animate({
            'opacity': '0'
        }, 100);

        $('.works__tabs-item').removeClass('works__tabs-item--active');
        $(item).addClass('works__tabs-item--active');

        function showContent() {
            $('.works__tabs-content__item').removeClass('works__tabs-content__item--active');
            $($(item).attr('href')).addClass('works__tabs-content__item--active');

            tabsContent.animate({
                'opacity': '1'
            }, 100);

        };

        setTimeout(showContent, 110);
    });
    $('.works__tabs-item:first').click();

    



    // let tabContainers = $('.works__tabs-content__item');
      
    // $('.works__tabs-item').click(function(){
    //     tabContainers.fadeOut(100);
    //     tabContainers.filter(this.hash).delay(110).fadeIn(100);
    //     $('.works__tabs-item').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // }).filter('.works__tabs-item:first').click();




    // slider

    $('.team__slider').slick({
       arrows: false,
       dots: true,
       variableWidth: true,
       adaptiveHeight: true,
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       speed: 1000,
       autoplay: true,
       autoplaySpeed: 2000,
       touchThreshold: 10,
       responsive:[
            
            {
                breakpoint: 451,
                settings: {
                    autoplay: false,
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    touchTreshold: 10,
                }
            }
       ]
    });


});

