window.onload = function () {
    var ratingContainer = document.querySelector("div[class='rating-container']");
    var ratingContainerWidth = ratingContainer.clientWidth;
    console.log('ratingContainerWidth:', ratingContainerWidth);

    var stars = [1, 2, 3, 4, 5].reduce(function (acc, curr, _, array) {
        acc.push({
            rating: curr,
            domRef: document.querySelector('.rating-' + curr),
            left: ratingContainerWidth / array.length * (curr - 1), // left boundary included
            right: curr ===  array.length ? ratingContainerWidth / array.length * curr: ratingContainerWidth / array.length * curr - 1 // right boundary excluded (except the very last interval)
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

    var currentStar = 0;
    ratingContainer.addEventListener('mousemove', function(event) {
        var newStar = findStarByMousePosX(event.offsetX, stars);
        // console.log('currentStar, newStar:', currentStar, newStar);
        if (newStar !== currentStar) {
            console.log('RESTACKING...');
            currentStar = newStar;
            stars.forEach(function (star) {
                if (star.rating === (newStar + 1)) {
                    star.domRef.style.zIndex = 1;
                } else {
                    star.domRef.style.zIndex = 0;
                }
            });
        }
    });
};