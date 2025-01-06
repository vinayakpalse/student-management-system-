$(document).ready(function () {

    $('.login-section').hover(
        function () {
            $(this).css('background-color', '#f7f7f7');
        }, 
        function () {
            $(this).css('background-color', '#f4f4f4');
        }
    );
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
    $('.brand-title').on('click', function () {
        $('body').toggleClass('dark-mode');
        $('.login-section').toggleClass('dark-mode');
    });
    $('.card-hover').hover(
        function () {
            $(this).css('transform', 'translateY(-10px)').css('box-shadow', '0 10px 20px rgba(0,0,0,0.2)');
        }, 
        function () {
            $(this).css('transform', 'translateY(0)').css('box-shadow', '0 4px 8px rgba(0,0,0,0.1)');
        }
    );
});