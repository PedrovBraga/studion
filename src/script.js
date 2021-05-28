$(document).ready(() => {
    //MENU
    $(".navbar_menu-btn").on("click", function() {
        $(".navbar__links").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars");
        $(this).find("i").toggleClass("fa-times");
    });
    
    //CARROSSEL
    const slickOptions = {
        dots: false,
        autoplay: true,
        prevArrow: 
            '<button type="button" class="slick-prev slider_prev-arrow">Previous</button>',
        nextArrow:
            '<button type="button" class="slick-next slider_next-arrow">Next</button>',
    };
    $('.slider').slick(slickOptions);

    $('.footer_form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : email,
            Subject : "Assunto",
            Body : "Corpo da mensagem"
        }).then(
          message => alert(message)
        );
    });
});