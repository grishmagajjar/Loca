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
    // margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        567: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        },
        1250: {
            items: 5
        },
        1350: {
            items: 6
        }
    }
})

// ------- my menu -------

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#my-menu", {
            "extensions": [
                "pagedim-black",
                "position-left"
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



// -------- listing.html ----------

$('.listing-slider').owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    dots: false,
    items: 1
})

// ------ accordian -------
if (window.innerWidth < 1024) {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    filtercontent = document.getElementsByClassName("filtercontent");
    for (i = 0; i < filtercontent.length; i++) {
        filtercontent[i].style.display = "none";
    }
}



// ----- product detail -----
$('.prdct-imgs-slider').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        430: {
            items: 3
        },
        568: {
            items: 4
        }
    }
})
// ---- animation activation ------
new WOW().init();

// --- search overlay ---

$("#so-search").click(function(){
    $(".search-overlay").toggle();
});
$(".so-close-button").click(function(){
    $(".search-overlay").toggle();
});


// ---- suggested items slider ----
$('.suggested-items-slider').owlCarousel({
    loop: false,
    // margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        567: {
            items: 2
        },
        821: {
            items: 3
        },
        1075: {
            items: 4
        },
        1366: {
            items: 5
        }
    }
})


// ---- prdct detail tab -----
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
tablinks = document.getElementsByClassName("tablinks");
// if (window.innerWidth > 768) {
function openTab(evt, tabName) {
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
if (window.innerWidth > 768) {
    document.getElementById("defaultOpen").click();
}
// }
else if (window.innerWidth < 768) {
    function openTab(evt, tabName) {
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        var prev_state_display = document.getElementById(tabName).style.display;

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        if (prev_state_display === "none") {
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        } else {
            document.getElementById(tabName).style.display = "none";
            evt.currentTarget.className.replace(" active", "");
        }
    }
}


