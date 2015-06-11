window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

//Captura o html para inserir no pageslider.
var homePage = document.getElementById('divUm').innerHTML;
homePage = $($.parseHTML(homePage));

var detailsPage = document.getElementById('divDois').innerHTML;
detailsPage = $($.parseHTML(detailsPage));

var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = detailsPage;
        slider.slidePageFrom($(page), "right");
    } else if (hash === "#page2") {
        page = detailsPage;
        slider.slidePageFrom($(page), "right");
    } else if (hash === "#page3") {
        page = detailsPage;
        slider.slidePageFrom($(page), "right");
    }
    else {
        page = homePage;
        slider.slidePageFrom($(homePage), "left");
    }
}



route();
