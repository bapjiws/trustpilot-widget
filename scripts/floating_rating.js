window.onload = function () {
    var oneStar = document.querySelector('.rating-1');
    var twoStars = document.querySelector('.rating-2');
    var threeStars = document.querySelector('.rating-3');
    var fourStars = document.querySelector('.rating-4');
    var fiveStars = document.querySelector('.rating-5');

    var ratingContainer = document.querySelector('.rating-container');
    console.log('ratingContainer:', ratingContainer.clientWidth);

    var widths = new Array(5);
    [1, 2, 3, 4, 5].forEach(function(step) {
        widths[step - 1] = ratingContainer.clientWidth / 5 * step;
    });
    console.log('widths:', widths);

    ratingContainer.addEventListener('mousemove', function(event) {
        if (event.offsetX > widths[0] && event.offsetX < widths[1]) { // second star
            // oneStar.style.zIndex= 0;
            twoStars.style.zIndex= 1;
        } else if (event.offsetX > widths[1] && event.offsetX < widths[2]) {
            // twoStars.style.zIndex= 0;
            threeStars.style.zIndex= 1;
        } else if (event.offsetX > widths[2] && event.offsetX < widths[3]) {
            // threeStars.style.zIndex= 0;
            fourStars.style.zIndex= 1;
        } else if (event.offsetX > widths[3] && event.offsetX < widths[4]) {
            // fourStars.style.zIndex= 0;
            fiveStars.style.zIndex= 1;
        }
    });
};
