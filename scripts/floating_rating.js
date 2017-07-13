window.onload = function () {
    var ratingContainer = document.querySelector('.rating-container');
    console.log('ratingContainer:', ratingContainer.clientWidth);

    var stars = [1, 2, 3, 4, 5].reduce(function (acc, curr) {
        acc.push({
            rating: curr,
            domRef: document.querySelector('.rating-' + curr),
            // left boundary included, right boundary excluded
            // boundaries: [ratingContainer.clientWidth / 5 * (curr - 1), ratingContainer.clientWidth / 5 * curr - 1]
            left: ratingContainer.clientWidth / 5 * (curr - 1), // left boundary included
            right: ratingContainer.clientWidth / 5 * curr - 1 // right boundary excluded
        });
        return acc;
    }, []);
    console.log('stars:', stars);

    function findStarByMousePosX(mousePosX, stars) {
        var min = 0;
        var max = stars.length - 1;
        var guess;

        while (min <= max) {
            guess = Math.floor((min + max) / 2);

            if (mousePosX >= stars[guess].left && mousePosX <= stars[guess].right) {
                return guess;
            } else if (mousePosX > stars[guess].right) {
                min = guess + 1;
            } else if (mousePosX < stars[guess].left) {
                max = guess - 1;
            }
        }
        return -1;
    }

    ratingContainer.addEventListener('mousemove', function(event) {
        var currentStar = findStarByMousePosX(event.offsetX, stars);
        console.log('currentStar:', currentStar);

        stars.forEach(function (star) {
            if (star.rating === (currentStar + 1)) {
                // console.log('SELECTED STAR:', star);
                star.domRef.style.zIndex = 1;
            } else {
                // console.log('UNSELECTED STAR:', star);
                star.domRef.style.zIndex = 0;
            }
        });
    });

    // var ans = findStarByMousePosX(15, stars);
    // console.log('ans:', ans);
    //
    // ans = findStarByMousePosX(51, stars);
    // console.log('ans:', ans);
    //
    // ans = findStarByMousePosX(52, stars);
    // console.log('ans:', ans);
    //
    // ans = findStarByMousePosX(65, stars);
    // console.log('ans:', ans);
    //
    // ans = findStarByMousePosX(104, stars);
    // console.log('ans:', ans);
    //
    // ans = findStarByMousePosX(160, stars);
    // console.log('ans:', ans);
    //
    // ans = findStarByMousePosX(250, stars);
    // console.log('ans:', ans);
};
