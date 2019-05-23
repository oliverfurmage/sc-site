$(document).ready(function(){
    initHeader();
});

function initHeader(){
    $header = $('header');

    // mobile menu toggle
    $mobileMenuToggle = $('#mobileMenuToggle');

    $mobileMenuToggle.click(function(){
        console.log(1);
        // if already animating do nothing
        if($header.hasClass("animating")) return;
        $header.addClass('active');
    });
}