jQuery(document).ready(function ($) {
    //Fixed Header

    window.onscroll = function () {
        if (window.pageYOffset > 200) {
            $('#header').addClass("active")
        } else {
            $('#header').removeClass("active")
        }
    }

    //Magnify

    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        },
    })

    $("#btn-navbar").click(function () {
        navbar = document.getElementById("navbarSupportedContent")
        if (navbar.hasAttribute("hidden")) {
            navbar.removeAttribute("hidden")
        } else {
            navbar.setAttribute("hidden", "")
        }
    })

    //Dark Mode
    const chk = document.getElementById('chk')

    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode')
    })
});



