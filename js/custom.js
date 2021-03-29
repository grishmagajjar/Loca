// ----------- home banner ------------
$('.banner-slider').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    items: 1
})

// ------------ shop by category slider ---------
$('.shop-cat-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        300: {
            items: 1,
        },
        768: {
            items: 3
        },
        1350: {
            items: 6,
            nav: true,
            loop: false
        }
    }
})

// ------- my menu -------

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#my-menu", {
            "extensions": [
                "pagedim-black",
                "position-right"
            ],
            "navbars": [
                {
                    "position": "top"
                },
            ]
        });
    }
);

// ------- mmenu title ----- 

$("#my-menu").mmenu({
    navbar: {
      title: " "
    }
});

// --------- mmenu logo ------
// $("menu").mmenu({
//     navbars: [{
//        content: [ "<img src=",../images/brand-logo1.png"/>" ],
//        height: 4
//     }]
//  });


