$(document).ready(function () {
    //Init the carousel
    $("#suggestion-slider").owlCarousel({
        rtl: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        dots: false,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });
    
    function startProgressBar() {
      // apply keyframe animation
      $(".slide-progress").css({
        width: "100%",
        transition: "width 5000ms"
      });
    }

    function resetProgressBar() {
      $(".slide-progress").css({
        width: 0,
        transition: "width 0s"
      });
    }

    // **************  product slider
    $(".product-carousel").owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        loop: true,
        navText: ['<i class="now-ui-icons arrows-1_minimal-right"></i>', '<i class="now-ui-icons arrows-1_minimal-left"></i>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                slideBy: 1
            },
            576: {
                items: 2,
                slideBy: 1
            },
            768: {
                items: 3,
                slideBy: 2
            },
            992: {
                items: 3,
                slideBy: 2
            },
            1400: {
                items: 5,
                slideBy: 1
            }
        }
    });


    $('.brand-slider .owl-carousel').owlCarousel({
        rtl: true,
        margin: 10,
        items: 5,
        nav: true,
        navText: ['<i class="now-ui-icons arrows-1_minimal-right"></i>', '<i class="now-ui-icons arrows-1_minimal-left"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 4
            },
            768: {
                items: 5
            },
            992: {
                items: 5
            }
        }
    });

    $("#gallery-slider").owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        navText: ['<i class="now-ui-icons arrows-1_minimal-right"></i>', '<i class="now-ui-icons arrows-1_minimal-left"></i>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
                slideBy: 1
            }
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInExpo');
    });

    if ($("#img-product-zoom").length) {
        $("#img-product-zoom").ezPlus({
            zoomType: "inner",
            containLensZoom: true,
            gallery: 'gallery_01f',
            cursor: "crosshair",
            galleryActiveClass: "active",
            responsive: true,
            imageCrossfade: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500
        });
    }

    $(".sum-more").click(function () {
        var sumaryBox = $(this).parents('.parent-expert');
        sumaryBox.find('.content-expert').toggleClass('active');
        sumaryBox.find('.shadow-box').fadeToggle();

        $(this).find('i').toggleClass('active');

        $(this).find('.show-more').fadeToggle(0);
        $(this).find('.show-less').fadeToggle(0);

    });

    $('nav.header-responsive li.active').addClass('open').children('ul').show();

    $("nav.header-responsive li.sub-menu> a").on('click', function () {
        $(this).removeAttr('href');
        var e = $(this).parent('li');
        if (e.hasClass('open')) {
            e.removeClass('open');
            e.find('li').removeClass('open');
            e.find('ul').slideUp(400);

        } else {
            e.addClass('open');
            e.children('ul').slideDown(400);
            e.siblings('li').children('ul').slideUp(400);
            e.siblings('li').removeClass('open');
        }
    });

    // Start scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $("nav.header-responsive").css({ height: '60px' });
            $("nav.header-responsive .search-nav").css({ opacity: '0', visibility: 'hidden' });
        } else {
            $("nav.header-responsive").css({ height: '110px' });
            $("nav.header-responsive .search-nav").css({ opacity: '1', visibility: 'visible' });
        }
    });

    // End scroll
    
    // favorites product
    
    $("ul.gallery-options button.add-favorites").on("click",function () {
        $(this).toggleClass("favorites");
    });
    
    // favorites product

    // LocalSearch
    if ($("header.main-header").length) {
        $("#gsearchsimple").focus(function(){
            $("header.main-header .search-area form.search ul.search-box-list").css("display","block");
            $(".overlay-search-box").css({"opacity": "1", "visibility": "visible"});
        });
        $(".overlay-search-box,header.main-header .col-md-4.col-sm-12,header.main-header .col-lg-2.col-md-3.col-sm-4.col-5").click(function(){
            $("header.main-header .search-area form.search ul.search-box-list").css("display","none");
            $(".overlay-search-box").css({"opacity": "0", "visibility": "hidden"});
        });
        $(".localSearchSimple").jsLocalSearch({
            action: "Show",
            html_search: true,
            mark_text: 'marktext'
        });
    }
    // LocalSearch

    // verify-phone-number
    if($("#countdown-verify-end").length) {
        var $countdownOptionEnd = $("#countdown-verify-end");

        $countdownOptionEnd.countdown({
        date: (new Date()).getTime() + 180 * 1000, // 1 minute later
        text: '<span class="day">%s</span><span class="hour">%s</span><span>: %s</span><span>%s</span>',
        end: function() {
            $countdownOptionEnd.html("<a href='' class='btn-link-border form-account-link'>ارسال مجدد</a>");
        }
        });

        $(".line-number").keyup(function(){
            $(this).next().focus();
        });
    }
    // verify-phone-number


});

document.getElementById('replaceButton').addEventListener('click', function() {
    const newHeading = document.createElement('p');
    newHeading.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="420.234" height="40.664" viewBox="0 0 111.187 10.759" xmlns:v="https://vecta.io/nano"><defs>
    <filter id="f1" x="0" y="0" xmlns="http://www.w3.org/2000/svg">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
    </filter>
  </defs><path d="M6.982.111L4.049 5.32v2.896H2.933V5.296L0 .111h1.333l1.612 2.964.595 1.191.546-1.079L5.717.111zm6.437 4.056q0 .93-.186 1.699-.186.763-.564 1.315-.378.546-.943.85-.558.298-1.315.298-.651 0-1.184-.242-.533-.248-.912-.757-.378-.508-.583-1.296-.205-.788-.205-1.867 0-.93.186-1.699.192-.769.564-1.315.378-.552.943-.85Q9.785 0 10.536 0q.651 0 1.184.248.533.242.912.757.378.508.583 1.296.205.788.205 1.867zm-1.091.037q0-.211-.019-.415-.012-.211-.031-.409L8.849 5.928q.093.322.236.595.143.273.341.471.205.192.459.304.26.105.589.105.422 0 .763-.205.347-.205.589-.608.242-.403.372-.998.13-.602.13-1.389zM8.62 4.13q0 .192 0 .384.006.192.025.372l3.429-2.536q-.093-.316-.236-.577-.143-.26-.341-.446-.198-.192-.453-.298-.254-.105-.571-.105-.422 0-.769.205-.341.205-.583.614-.242.403-.372 1.005-.13.595-.13 1.383zm11.658 1.265q0 .67-.192 1.215-.186.54-.552.924-.366.378-.899.589-.527.205-1.215.205-.757 0-1.284-.198-.527-.198-.862-.558-.329-.366-.484-.874-.149-.508-.149-1.135V.111h1.104v5.364q0 .477.087.837.093.36.298.602.205.242.527.366.329.124.8.124.881 0 1.296-.508.422-.508.422-1.432V.111h1.104zM27.905.111l-2.753 8.105h-1.488L20.972.111h1.246l1.749 5.463.496 1.6.508-1.6L26.727.111zm6.121 5.643q0 .533-.217 1.005-.217.465-.651.819-.434.347-1.091.552-.657.198-1.532.198-.484 0-.868-.031-.384-.031-.719-.081v-.967q.384.068.812.105.428.037.874.037.608 0 1.036-.105.434-.112.707-.316.273-.205.397-.496.124-.291.124-.657 0-.335-.149-.583-.149-.248-.422-.415-.267-.167-.645-.248-.372-.087-.819-.087h-.924v-.887h.936q.366 0 .664-.093.304-.099.515-.279.217-.18.329-.44.118-.267.118-.602 0-.651-.397-.949-.397-.298-1.166-.298-.409 0-.843.081-.434.081-.93.242V.316q.211-.074.446-.13.242-.062.477-.099.242-.043.477-.062.236-.025.453-.025.645 0 1.135.143.49.136.819.397.329.26.496.633.167.372.167.837 0 .695-.36 1.166-.353.471-.974.75.316.05.62.198.31.149.552.384.248.229.397.546.155.316.155.701zm7.869 5.004h-6.983v-.893h6.983zm5.841-9.705h-3.442v2.629h3.262v.924h-3.262v3.609h-1.129V.111h4.57zm7.578 3.113q0 .93-.186 1.699-.186.763-.564 1.315-.378.546-.943.85-.558.298-1.315.298-.651 0-1.184-.242-.533-.248-.912-.757-.378-.508-.583-1.296-.205-.788-.205-1.867 0-.93.186-1.699.192-.769.564-1.315.378-.552.943-.85Q51.68 0 52.431 0q.651 0 1.184.248.533.242.912.757.378.508.583 1.296.205.788.205 1.867zm-1.091.037q0-.211-.019-.415-.012-.211-.031-.409l-3.429 2.549q.093.322.236.595.143.273.341.471.205.192.459.304.26.105.589.105.422 0 .763-.205.347-.205.589-.608.242-.403.372-.998.13-.602.13-1.389zm-3.708-.074q0 .192 0 .384.006.192.025.372l3.429-2.536q-.093-.316-.236-.577-.143-.26-.341-.446-.198-.192-.453-.298-.254-.105-.571-.105-.422 0-.769.205-.341.205-.583.614-.242.403-.372 1.005-.13.595-.13 1.383zm11.658 1.265q0 .67-.192 1.215-.186.54-.552.924-.366.378-.899.589-.527.205-1.215.205-.757 0-1.284-.198-.527-.198-.862-.558-.329-.366-.484-.874-.149-.508-.149-1.135V.111h1.104v5.364q0 .477.087.837.093.36.298.602.205.242.527.366.329.124.8.124.881 0 1.296-.508.422-.508.422-1.432V.111h1.104zm6.92 2.822h-1.439l-2.363-5.054-.682-1.625v4.087 2.592h-1.029V.111h1.42l2.251 4.787.812 1.854V2.412.111h1.029zm7.262-4.142q0 .583-.093 1.116-.087.533-.285.992-.198.459-.515.837-.316.372-.775.639-.459.267-1.067.415-.608.143-1.383.143h-1.736V.111h2.09q1.898 0 2.828.98.936.974.936 2.983zm-1.16.081q0-.862-.161-1.457-.161-.595-.49-.961-.329-.366-.825-.527-.496-.167-1.166-.167h-.949v6.22h.825q2.766 0 2.766-3.107zm8.595 6.604h-6.983v-.893h6.983zm6.449-9.705h-2.4v7.162h-1.116V1.054h-2.4V.111h5.916zm6.834 7.162h-1.104V4.496h-3.404v3.721h-1.104V.111h1.104v3.429h3.404V.111h1.104zm7.336-1.792h-1.383v1.792h-1.104V6.424h-3.901v-.949l3.454-5.364h1.55v5.364h1.383zm-2.487-5.271l-2.822 4.322h2.822zm9.265-.099h-2.4v7.162h-1.116V1.054h-2.4V.111h5.916z" filter="url(#f1)"/></svg>`;
    this.parentNode.replaceChild(newHeading, this);
});

function insert_coupon() {
    var status = $('.show_status').html() *1;
    if (status == 1)
    {
        $('.insert_off_box').css('display', 'block');
        $('.insert_off_box').addClass('he_a');
        $('.insert_off_box').removeClass('he_0');
        $('.show_status').html('0')
    }
    else
    {
        $('.insert_off_box').css('display', 'none');
        $('.insert_off_box').addClass('he_0');
        $('.insert_off_box').removeClass('he_a');
        $('.show_status').html('1')
    }

}
