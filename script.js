const header = document. querySelector("header") ;

window. addeventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY>0);
});

