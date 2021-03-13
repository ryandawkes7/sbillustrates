$(document).ready(() => {

    const windowHeight = $(window).height();
    const headerHeight = $('#header').innerHeight();
    const footerHeight = $('#footer').innerHeight();
    const sectionHeight = windowHeight - (headerHeight + footerHeight);
    const homeContainer = $('#home-container');
    const homeSection = $('.section_container');

    homeContainer.css('min-height', `${sectionHeight}px`);
    homeSection.css('min-height', `${sectionHeight}px`);


    const imageSlider = $('.image_slider');

})

