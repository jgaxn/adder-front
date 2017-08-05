$('body').scrollspy({ target: '#navbar-example' });

$(document).on('click', 'a.scroll-nice', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
