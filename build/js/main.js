window.addEventListener('DOMContentLoaded', () => {


    //burger
    const burgerBtn = document.querySelector('.burger'),
        burgerSpan = document.querySelector('.burger-span'),
        menuList = document.querySelector('.portfolio-menu__list');

    function burgerOpen() {
        burgerSpan.classList.toggle('active');
        menuList.classList.toggle('active');
    }

    burgerBtn.addEventListener('click', (e) => {
        burgerOpen();

    })

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function idArrow(item, gradient, path) {
        item.forEach(function (i) {
            let arrowId = randomInteger(1000, 5000);
            i.querySelector(gradient).setAttribute('id', arrowId);
            i.querySelector(path).setAttribute('fill', `url(#${arrowId})`)

        })
    }

    const arrowR = document.querySelectorAll('.arrow-js');
    const lineGradient = ('.arrow-r__linegradient');
    const path = ('.arrow-r__path');
    idArrow(arrowR, lineGradient, path);
    $('input, select').styler();

    $('.card__item-button').hover(function () {
        $(this).toggleClass('active-hover');
    })
    $('.button__map').hover(function () {
        $(this).toggleClass('active-hover');
    })
    $('.hover-js').hover(function () {
        $(this).toggleClass('active-hover');
    })




    function swiperAppartment() {
        let sliderWrapperGalerry = document.querySelectorAll('.slider-apartment-js');

        sliderWrapperGalerry.forEach(item => {

            let mySwiperNav = new Swiper(item.querySelector('.slider-nav'), {
                slidesPerView: 4,
                spaceBetween: 0,
                loopedSlides: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                loop: false,
                direction: 'vertical',
                scrollbar: {
                    el: item.querySelector('.swiper-scrollbar'),
                    draggable: true,


                },
                autoHeight: true,


            })
            let mySwiper = new Swiper(item.querySelector('.slider-main'), {
                autoHeight: true,
                spaceBetween: 0,
                loop: true,
                loopedSlides: 5,
                thumbs: {
                    swiper: mySwiperNav,
                },


            })

            mySwiper.update();
            mySwiperNav.update();
        })
    }

    swiperAppartment();

    function reinitSwiper(swiper) {
        setTimeout(function () {
            swiper.update();
        }, 500);
    }

    reinitSwiper(swiperAppartment());


    function swiperFeedback() {
        let sliderWrapperGalerry2 = document.querySelectorAll('.slider-feedback-js');

        sliderWrapperGalerry2.forEach(item => {


            let mySwiper2 = new Swiper(item.querySelector('.slider-feedback__container'), {
                slidesPerView: 2,
                spaceBetween: 50,
                loop: true,
                loopFillGroupWithBlank: true,
                autoHeight:true,
                navigation: {
                    nextEl: item.querySelector('.swiper-button-next-btn'),
                    prevEl: item.querySelector('.swiper-button-prev-btn'),
                },



            })

          ;
        })
    }

    swiperFeedback();



    function swiperCrew() {
        let sliderWrapperGalerry3 = document.querySelectorAll('.slider-crew-js');

        sliderWrapperGalerry3.forEach(item => {


            let mySwiper3 = new Swiper(item.querySelector('.slider-crew__container'), {
                slidesPerView: 4.76,
                    spaceBetween: 30,
                    loop: true,
                    autoHeight:true,
                    navigation: {
                        nextEl: item.querySelector('.swiper-button-next-btn'),
                        prevEl: item.querySelector('.swiper-button-prev-btn'),
                    },



                })

            ;
        })
    }

    swiperCrew();




    $('.tabs-wrapper').each(function () {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function () {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });




    function maskPhonefun(selectorInput) {


        function maskPhone() {
            var country = $('.select-lang-js option:selected').val();


            switch (country) {
                case "by":
                    selectorInput.attr("placeholder", "+375 (___) ___-__-__");
                    selectorInput.mask("+375 (999) 999-99-99");
                    break;
                case "ru":
                    selectorInput.attr("placeholder", "+7 (___) ___-__-__");
                    selectorInput.mask("+7 (999) 999-99-99");
                    break;

            }
        }

        maskPhone();
        $('.select-lang-js').change(function () {
            maskPhone();
        });

    }

    maskPhonefun($('.phone-input-js'));

    $( ".phone-input-js-focus" ).focus(function() {
        $(this).parent().addClass('focus');
    });
    $('.phone-input-js-focus').focusout(function(){
        $(this).parent().removeClass('focus');
    });
    $('.option-js').on('click', function () {
        $(this).parents(".jq-selectbox").find('.jq-selectbox__select-text').addClass('color-white');
    })
    $('.option-top').on('click', function () {
        $(this).parents(".jq-selectbox").find('.jq-selectbox__select-text').removeClass('color-white');
    })

});