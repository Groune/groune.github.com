/**
 * Created by Groune on 2016/01/23.
 */

var commonApp = function () {

    /**
     * initialization
     */

    var initFun = function () {
        /*ͷ��������*/
        var $nav_btn = $('.head-nav-btn');
        $nav_btn.bind('click',function(){
            if(!$nav_btn.hasClass('hover')){
                $nav_btn.addClass('hover');
                $('nav').addClass('show');
            }else{
                $nav_btn.removeClass('hover');
                $('nav').removeClass('show');
            }
        })
    };
    var init_swiper = function(){
        var mySwiper = new Swiper('#index_swiper', {
            autoplay: 5000//��ѡѡ��Զ�����
        })
    };
    var init_about = function(){
        var mySwiper = new Swiper('#about_swiper', {
            slidesPerView:2,
            slidesPerGroup:2,
            spaceBetween:10,
            autoplay: 5000//��ѡѡ��Զ�����
        })
    };
    var init_detail = function(){
        var mySwiper = new Swiper('#detail_swiper', {
            autoplay: 5000//��ѡѡ��Զ�����
        })
    };
    return {
        init: function () {
            initFun();
        },
        init_swiper: function(){
            init_swiper();
        },
        init_about: function(){
            init_about();
        },
        init_detail: function(){
            init_detail();
        }
    }
}();