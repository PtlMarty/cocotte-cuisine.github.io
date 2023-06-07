let header = document.getElementById('header');

document.addEventListener('scroll', function() {
    // Get scroll position
    let scrollPosition = window.pageYOffset;

    // Calculate whether the scroll it 350px or not then set the opacity to face the header out
    if (scrollPosition <= 1600) {
        header.style.opacity = 1 - scrollPosition / 1600;
    } else {
        header.style.opacity = 0;
    }

})