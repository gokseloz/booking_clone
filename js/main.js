//header-switch => 770px and below, header is hide, hamburger-menu is created to display the header
$(".header-switch").on("click", function () {
    $(".header").toggleClass("menu-show")
});
//end of header-switch


//Highlighted-cities => Highlighted cities in a draggable slideshow
var $carousel = $('.highlights-slider').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false
});


$(".highlights-item").eq(0).addClass("is-expanded");

$carousel.flickity('reposition');

$carousel.on('staticClick.flickity', function (event, pointer, cellElement, cellIndex) {
    // dismiss if cell was not clicked
    if (!cellElement) {
        return;
    }
    // change cell background with .is-clicked
    $carousel.find('.is-expanded').removeClass('is-expanded');
    $(cellElement).addClass('is-expanded');
    $carousel.flickity('reposition');
    $carousel.flickity('select', cellIndex);
});
//End of Highlighted-cities

//Section-4-Discover => highlighted countries in a slideshow with prev and next buttons
var $carousel2 = $('.section4-main-box').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    draggable: false,
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: true,
    pageDots: false
});
//End of Section-4-Discover

//Section-5-Destinations we love
var tab = $(".list-tab-btn"),
    content = $(".list-body");

tab.on("click", function () {
    var i = $(this).index();
    tab.removeClass('active').eq(i).addClass('active');
    content.hide().eq(i).fadeIn(1);
    return false;
});
//End of Section-5-Destinations we love


//clickable link at the bottom - Only works in mobile version
$(".siteMap-link").on("click", function(){
    $(".siteMap-item").toggleClass("is-expanded ")
})
//End of clickable link at the bottom - Only works in mobile version



