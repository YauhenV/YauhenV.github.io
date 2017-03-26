$(document).ready(function () {

    $(".four-reasons-div").hover(
        function () {
        $(this).find('i').addClass('animated tada infinite')},
        function () {
        $(this).find('i').removeClass('animated tada infinite')
    });

    // $('.instr-image').hover(
    //     function () {
    //         console.log('meow');
    //     $(this).find('img').removeClass('img-responsive').addClass('instr-image-enlarged')},
    //     function () {
    //     $(this).find('img').addClass('img-responsive').removeClass('instr-image-enlarged')
    // });


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

function showMoreImages() {
    $('#show-more-images-link').addClass('hidden');

    $('#hidden-images').removeClass('hidden').animate({
            opacity: 0
        }, 0, function () {
            $('#hidden-images').animate({opacity: 1}, 800)
        }
    );
}

function replaceButtons() {
    var buttons = $('#abbuttons').clone();
    console.log($(window).width());
    if($(window).width() <= 1200) {
        $('#abbuttons').remove();
        $('#main-h').before(buttons);
    }
}

function enlargeInstrImage() {

}


