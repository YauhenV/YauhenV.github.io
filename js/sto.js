$(document).ready(function () {
    mobileSize();
    coloredSigns();

    window.addEventListener('scroll', function () {
        if(window.scrollY >= 400) {
            $('#arrow-down').removeClass('animated infinite bounce');
        }
    });

    $(".four-reasons-div").hover(
        function () {
        $(this).find('i').addClass('animated tada infinite')},
        function () {
        $(this).find('i').removeClass('animated tada infinite')
    });

    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $(id).offset().top;

        //adjust the position to not hide the titles of the sections
        pos -= 50;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });



    var map = $('#map');
    var overlay = $('#google-map');
    map.addClass('scrolloff');                // set the mouse events to none when doc is ready

    overlay.on("mouseup", function () {          // lock it when mouse up
        map.addClass('scrolloff');
        //somehow the mouseup event doesn't get call...
    });
    overlay.on("mousedown", function () {        // when mouse down, set the mouse events free
        map.removeClass('scrolloff');
    });
    map.mouseleave(function () {              // becuase the mouse up doesn't work...
        map.addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
        // or you can do it on some other event
    });
    overlay.on('click', function () {
        map.removeClass('scrolloff');
    })

    replaceButtons();


});

function replaceButtons() {
    var buttons = $('#abbuttons').clone();
    if($(window).width() <= 1200) {
        $('#abbuttons').remove();
        $('#main-h').before(buttons);
    }
}
function mobileSize() {

    if($(window).width() < 800) {
        $('body').css('width', '535px');
        $('h1').css('font-size', '38px');
        $('h2').css('font-size', '38px');
        $('#about').css('padding-top', '2px');
    }
}

function coloredSigns() {
    if($(window).width() <= 1200) {
        $("#re div:nth-child(3n + 1) i").css('color', '#DD0000');
    } else {
        $("#re div:nth-child(2n + 1) i").css('color', '#DD0000');
    }
}

