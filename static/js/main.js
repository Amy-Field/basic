
(function($) {
    if($('#swiper').length){
        var swiper = new Swiper('#swiper', {
            pagination: '#swiper .swiper-pagination',
            paginationClickable: true,
            nextButton: '#swiper .swiper-button-next',
            prevButton: '#swiper .swiper-button-prev',
            speed: 600,
            autoplay : 5000,
            loop: true,
        });
        swiper.onResize();
    }
    
    if($('#slides').length){
        var slides = new Swiper('#slides', {
        nextButton: '#slides .swiper-button-next',
        prevButton: '#slides .swiper-button-prev',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        loop: true,
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows : false
            }
        });
        slides.onResize();
    }

    if($('#lables').length){
        var lables = new Swiper('#lables', {
            nextButton: '#lables .swiper-button-next',
            prevButton: '#lables .swiper-button-prev',
            slidesPerView: 'auto',
            centeredSlides: false,
            paginationClickable: true,
            spaceBetween: 0,
            onInit: function(){
                $('#lables .swiper-slide a').on('click',function(){
                    var $this = $(this).parent('.swiper-slide');
                    var curIndex = $this.index();
                    var $con = $('#lables-main')
                    {
                        $this.addClass('cur').siblings().removeClass('cur');
                        $con.find('>li').hide().eq(curIndex).fadeIn();
                    }
                });
            }
        });
        lables.onResize();
    }

    if($('#lightimg').length){
        $('#lightimg').after($('<div class="lightimg-fixed hide"><a href="javascript:void(0)" class="icons icons-close btn-close"></a><div class="swiper-container" id="lightimg-fixed"><div class="swiper-pagination swiper-pagination-white"></div></div></div>'));
        var lightimgIndex = 0;
        var $lightimg = $('#lightimg-fixed');
        $lightimg.prepend($('#lightimg').html());
        var lightimgfixed = new Swiper('#lightimg-fixed', {
            pagination: '#lightimg-fixed .swiper-pagination',
            paginationClickable: true,
            nextButton: '#lightimg-fixed .swiper-button-next',
            prevButton: '#lightimg-fixed .swiper-button-prev',
            speed: 600,
            loop: true,
            //effect : 'fade',
        });
        var lightimg = new Swiper('#lightimg', {
            nextButton: '#lightimg .swiper-button-next',
            prevButton: '#lightimg .swiper-button-prev',
            slidesPerView: 'auto',
            centeredSlides: false,
            paginationClickable: true,
            spaceBetween: 0,
            onInit: function(e){
                $('#lightimg .swiper-slide a').on('click',function(){
                    var $this = $(this).parent('.swiper-slide');
                    lightimgIndex = $this.index()+1;
                    $lightimg.parent('.lightimg-fixed').removeClass('hide');
                    lightimgfixed.update();
                    lightimgfixed.slideTo(lightimgIndex, 10, false);
                    lightimgfixed.onResize();
                });
            }
        });
        lightimg.onResize();
        $('.lightimg-fixed .btn-close').on('click',function(){
            $lightimg.parent('.lightimg-fixed').addClass('hide');
        });
    }

    $('.form-control').on('focus', function(event) {
        $('.relative-box').fadeIn();
    }).on('blur', function(event) {
        $('.relative-box').hide();
    });
    $('#hoverChange .media').hover(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
    });
    $('.caption-wrap').on('click','.btn',function(){
        var conWrap = $(this).parent('.caption-wrap');
        if(conWrap.hasClass('open')){
            conWrap.removeClass('open');
        }else{
            conWrap.addClass('open');
        }
    })
}(jQuery));
