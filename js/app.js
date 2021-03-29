$(function() {
    /*Fixed Header ================*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();//получаем значние скрола. Обращаемся к окну и узнаем сколько мы проскролили от верха. И узнаем позицию нашего скролла
    
    //будем следить за скролом.Работая с Окном
    //если высота блока больше 
    checkScroll(scrollPos, introH);
    
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();  //работаем с высотой учитывая пединги      
        scrollPos = $(this).scrollTop();
        
        checkScroll(scrollPos, introH);
      });
    
    function checkScroll(scrollPos, introH){        
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }
    
    /* Smooth scroll ================*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');/*это мы получили айди элемента*/
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: elementOffset - 28/*сделали скрол и отняли 80 чтобы не налазить на элементы*/
        }, 700); /*скорость в милесикундах скролла*/
    })
    

    /* Nav Toggle  ================*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    navToggle.on("click", function(event){
        event.preventDefault();/*Если будет вызван данный метод, то действие события по умолчанию не будет выполнено.*/
        
        nav.toggleClass("show");        
         })
    
    /* reviews: https://kenwheeler.github.io/slick/ ================*/ 
    
    let slider = $("#reviewSlider");
    
    slider.slick({
        infinite: true,/*true- заначит что все время будет скролиться до безконечности*/
        slidesToShow: 1, /*сколько показывать слайдеров*/
        slidesToScroll: 1, /*сколько будем скролить слайдов при клике на скрол*/
        fade: true, /*чтобы затемнялись отзывы*/
        arrows: false,/*отключаем кнопки превью и текст*/
        dots: true
        });

    
    
});
