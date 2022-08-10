let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");

icon.addEventListener("click", function() {
    if (icon.classList.contains("fa-bars")) {
        menu.style.left = 0;
        icon.classList = "fa fa-times menu-icon";
    } else {
        menu.style.left = "-250px";
        icon.classList = "fa fa-bars menu-icon";
    }
})
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false
        },
        768: {
            items: 1,
            nav: true
        },
        992: {
            items: 2,
            nav: true
        },
    }
})