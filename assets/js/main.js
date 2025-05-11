(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

     // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".navbar").addClass("bg-primary");
        } else {
            $(".navbar").removeClass("bg-primary");
        }
    });


    //Smoth Scroll
    $(function () {
        $('.nav-link, .smoth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });


    /*==========================
        Hero Area Slider
    ============================*/

    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'

    });
    //Wow Animation
    new WOW().init();
    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["Desainer situs web", "Desainer UI/UX", "Desainer Grafis",],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });

    
    /*::::::::::::::::::::::::::::::::::::
       Portfolio Section
    ::::::::::::::::::::::::::::::::::::*/

    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });

    $('.portfolio-area').mixItUp();

    

    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
    // Fungsi untuk menampilkan data dari localStorage
    $(function () {
    const form = $('#contact-form');
    const messageContainer = $('#local-storage-messages');

    // Tampilkan pesan dari localStorage saat halaman dibuka
    displayMessages();

    form.on('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: form.find('input[name="name"]').val(),
            email: form.find('input[name="email"]').val(),
            subject: form.find('input[name="subject"]').val(),
            message: form.find('textarea[name="message"]').val()
        };

        // Ambil data lama, tambahkan yang baru
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(formData);
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        // Bersihkan form dan tampilkan ulang pesan
        form.trigger('reset');
        displayMessages();
    });

    function displayMessages() {
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        if (messages.length === 0) {
            messageContainer.html('<p class="text-muted">Belum ada pesan tersimpan.</p>');
            return;
        }

        let html = '<h5>Pesan Tersimpan:</h5>';
        messages.forEach((msg, index) => {
            html += `
                <div class="border p-3 mb-3 rounded bg-light">
                    <p><strong>Nama:</strong> ${msg.name}</p>
                    <p><strong>Email:</strong> ${msg.email}</p>
                    <p><strong>Subjek:</strong> ${msg.subject}</p>
                    <p><strong>Pesan:</strong> ${msg.message}</p>
                    <button class="btn btn-danger btn-sm delete-message" data-index="${index}">Hapus</button>
                </div>
            `;
        });

        messageContainer.html(html);
    }

    // Event handler untuk hapus pesan
    messageContainer.on('click', '.delete-message', function () {
        const index = $(this).data('index');
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];

        messages.splice(index, 1);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        displayMessages();
    });
});


    
    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));
