jQuery(document).ready(function(e){"use strict";e(".nav.navbar-nav > li.menu-item-has-children > a").on("click",function(i){i.preventDefault(),e(this).parent().find(".sub-menu").toggle(),e(this).parent().find(".sub-menu li .sub-menu").hide()}),e(".nav.navbar-nav li .sub-menu li.menu-item-has-children > a ").on("click",function(i){i.preventDefault(),e(this).parent().find(".sub-menu").toggle()}),e(function(){e(".tabs").tabs({create:function(){e(this).fadeIn()}})}),e("select").chosen({disable_search_threshold:11}),e(function(){e("#accordion").accordion({heightStyle:"content",closedSign:'<i class="fa fa-minus"></i>',openedSign:'<i class="fa fa-plus"></i>'})}),e(".slider.slider-simple").slick({prevArrow:e(".slider-nav-simple-slider .slider-prev"),nextArrow:e(".slider-nav-simple-slider .slider-next"),adaptiveHeight:!0,fade:!0}),e(".slider.slider-featured").slick({prevArrow:e(".slider-nav-properties-featured-for-sell .slider-prev"),nextArrow:e(".slider-nav-properties-featured-for-sell .slider-next"),slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:990,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:589,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".slider.slider-featured2").slick({prevArrow:e(".slider-nav-properties-featured-for-rent .slider-prev"),nextArrow:e(".slider-nav-properties-featured-for-rent .slider-next"),slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:990,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:589,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".slider.slider-testimonials").slick({prevArrow:e(".slider-nav-testimonials .slider-prev"),nextArrow:e(".slider-nav-testimonials .slider-next"),adaptiveHeight:!0}),e(".slider.slider-property-gallery").slick({slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,arrows:!1,fade:!0,infinite:!1,asNavFor:".property-gallery-pager"}),e(".property-gallery-pager").on("init",function(i,r){e(".slide-counter").text("1 / "+r.slideCount)}),e(".property-gallery-pager").slick({prevArrow:e(".slider-nav-property-gallery .slider-prev"),nextArrow:e(".slider-nav-property-gallery .slider-next"),slidesToShow:5,slidesToScroll:1,asNavFor:".slider.slider-property-gallery",dots:!1,focusOnSelect:!0,infinite:!1}),e(".property-gallery-pager").on("afterChange",function(i,r,t){t+=1;var a=t+" / "+r.slideCount;e(".slide-counter").text(a)}),e(".slide").addClass("initialized"),e(window).scrollTop()>140&&(e(".header-default .navbar-toggle").addClass("fixed"),e(".header-default .main-menu-wrap").addClass("fixed")),e(window).bind("scroll",function(){e(window).scrollTop()>140?(e(".header-default .navbar-toggle").addClass("fixed"),e(".header-default .main-menu-wrap").addClass("fixed")):(e(".header-default .navbar-toggle").removeClass("fixed"),e(".header-default .main-menu-wrap").removeClass("fixed"))}),e(".grid-blog").isotope({itemSelector:".col-lg-4"});for(var i=document.getElementsByClassName("price-slider"),r=0,t=0;t<i.length;t++)noUiSlider.create(i[t],{connect:!0,start:[15e4,6e5],step:1e3,margin:1e3,range:{min:[2e3],max:[1e6]},tooltips:!0,format:wNumb({decimals:0,thousand:",",prefix:"$"})}),r+=1;e(".filter-toggle").on("click",function(){e(this).parent().find("form").stop(!0,!0).slideToggle()}),e(".multi-page-form .form-next").on("click",function(){var i=[];if(e(".multi-page-form").find(".error").remove(),e(".multi-page-form .multi-page-form-content.active input.required").each(function(r){e(this).val()||(e(this).parent().find("label").append('<span class="error"> This field is required</span>'),i.push(r))}),0===i.length){var r=e(this).parent().parent().find(".multi-page-form-content.active");e(this).parent().parent().find(".form-nav .form-nav-item.completed").next().addClass("completed"),e(this).parent().parent().find(".form-nav .form-nav-item.completed span").html('<i class="fa fa-check"></i>'),r.next(".multi-page-form-content").next(".multi-page-form-content").length,r.removeClass("active"),r.next().addClass("active")}}),e(".multi-page-form .form-prev").on("click",function(){var i=e(this).parent().parent().find(".multi-page-form-content.active"),r=e(this).parent().parent().find(".form-nav .form-nav-item.completed").last();r.removeClass("completed"),r.find("span").html(r.index()+1),i.prev(".multi-page-form-content").prev(".multi-page-form-content").length>0?(i.removeClass("active"),i.prev().addClass("active")):(i.removeClass("active"),i.prev().addClass("active"),e(this).addClass("show-none"),e(this).parent().find(".disabled").show())});var a=e(".additional-img-container .additional-image").length+1;e(".add-additional-img").on("click",function(){a++,e(".additional-img-container").append('<table><tr><td><div class="media-uploader-additional-img"><input type="file" class="additional_img" name="additional_img'+a+'" value="" /><span class="delete-additional-img appended right"><i class="fa fa-trash"></i> Delete</span></div></td></tr></table>')}),e(".additional-img-container").on("click",".delete-additional-img",function(){e(this).parent().parent().parent().parent().parent().remove()}),e('#owner-info input[type="radio"]').on("click",function(){var i=e(this).val();e("#owner-info .form-block-agent-options").hide(),"agent"===i&&e("#owner-info .form-block-select-agent").slideDown("fast"),"custom"===i&&e("#owner-info .form-block-custom-agent").slideDown("fast")}),e(document).on("submit","form#contact-us",function(){e("form#contact-us .error").remove();var i=!1;if(e(".requiredField").each(function(){if(""===e.trim(e(this).val()))e(this).parent().find("label").append('<span class="error">This field is required!</span>'),e(this).addClass("inputError"),i=!0;else if(e(this).hasClass("email")){var r=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;r.test(e.trim(e(this).val()))||(e(this).parent().find("label").append('<span class="error">Sorry! You\'ve entered an invalid email.</span>'),e(this).addClass("inputError"),i=!0)}}),!i){var r=e(this).serialize();e.post(e(this).attr("action"),r,function(){e("form#contact-us").slideUp("fast",function(){e(this).before('<p class="alert-box success"><i class="fa fa-check icon"></i><strong>Thanks!</strong> Your email has been delivered!</p>')})})}return!1})});