
window.addEventListener('scroll', function () {
    document.body.classList[
    window.scrollY > 20 ? 'add': 'remove'
    ]('scrolled');
    });



    $('li a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
    });