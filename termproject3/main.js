$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $(".main-text").offset().top;
        var distance = (elementOffset - scrollTop);

        if (distance < $(window).height() && distance > 0) {
            $(".main-text").addClass("fade-in").css("opacity", 1);
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $(".introduce-text").offset().top;
        var distance = (elementOffset - scrollTop);

        if (distance < $(window).height() && distance > 0) {
            $(".introduce-text").addClass("fade-in").css("opacity", 1);
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $(".menu-tab").offset().top;
        var distance = (elementOffset - scrollTop);

        if (distance < $(window).height() && distance > 0) {
            $(".menu-tab").addClass("fade-in").css("opacity", 1);
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $(".game-tab").offset().top;
        var distance = (elementOffset - scrollTop);

        if (distance < $(window).height() && distance > 0) {
            $(".game-tab").addClass("fade-in").css("opacity", 1);
        }
    });
});

function toggleMenu() {
    const header = document.querySelector('.sticky-header');
    const menuItems = document.querySelector('.menu-items');
    const isOpen = header.classList.contains('open');
    header.classList.toggle('open', !isOpen);
    menuItems.style.display = isOpen ? 'none' : 'flex';
  }