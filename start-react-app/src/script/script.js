import $ from 'jquery';
/*global $, document, window, setTimeout, navigator, console, location*/

$(document).ready(function () {
    'use strict';

    var usernameError = true,
        phonenumError = true,
        agreementError = true;

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Button counting
    var $button = $("#formHolder .btn_area button");
    var $count_result = $("#formHolder .btn_area .result");
    var count = 0;

    $button.on("click", function () {
        count++;
        $count_result.text("COUNT: " + count);
    }); // $button.onclick

    // Label effect
    $('input:not(input[type="checkbox"], label[for="terms_agree_1"])').focus(function () {
        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {
        // User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('이름을 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if ($(this).val().length >= 1 && $(this).val().length < 2) {
                $(this).siblings('span.error').text('이름을 2글자 이상 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        // Phone Number  
        if ($(this).hasClass('phone')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('전화번호를 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
                phonenumError = true;
            } else if ($(this).val().length >= 1 && $(this).val().length < 3) {
                $(this).siblings('span.error').text('전화번호를 3글자 이상 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
                phonenumError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                phonenumError = false;
            }
        }

        // Agreement
        if ($(this).hasClass('terms_agree_1')) {
            if ($(this).is(":checked") == false) {
                $(this).siblings('span.error').text('이용약관에 동의하셔야 이용하실 수 있습니다.').fadeIn().parent('.form-group').addClass('hasError');
                agreementError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                agreementError = false;
            }
        }


        $('input').on("click", function () {
            // Agreement
            if ($(this).hasClass('terms_agree_1')) {
                if ($(this).is(":checked") == false) {
                    $(this).siblings('span.error').text('이용약관에 동의하셔야 이용하실 수 있습니다.').fadeIn().parent('.form-group').addClass('hasError');
                    agreementError = true;
                } else {
                    $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                    agreementError = false;
                }
            }
        }); // input.onclick


        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label:not(label[for="terms_agree_1"])').addClass('active');
        } else {
            $(this).siblings('label:not(label[for="terms_agree_1"])').removeClass('active');
        }
    }); // input.blur


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        event.preventDefault();

        if (usernameError == true || phonenumError == true || agreementError == true) {
            $('.name, .phone, .terms_agree_1').blur();
        } else {
            $('.signup, .login').addClass('switched');
            setTimeout(function () { $('.form').hide(); }, 1000);
        }
    });

    // Reload page
    $('a.profile').on('click', function () {
        window.location.reload(true);
    });
}); // document.onready