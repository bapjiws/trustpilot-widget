window.onload = function () {
    var ratingContainer = document.querySelector('.rating-container');
    console.log('ratingContainer:', ratingContainer.clientWidth);

    var stars = [1, 2, 3, 4, 5].reduce(function (acc, curr) {
        acc.push({
            rating: curr,
            domRef: document.querySelector('.rating-' + curr),
            // left boundary included, right boundary excluded
            // boundaries: [ratingContainer.clientWidth / 5 * (curr - 1), ratingContainer.clientWidth / 5 * curr - 1]
            left: (ratingContainer.clientWidth / 5) * (curr - 1), // left boundary included
            right: (ratingContainer.clientWidth / 5) * curr - 1 // right boundary excluded
        });
        return acc;
    }, []);
    console.log('stars:', stars);

    var calledAtOffsetX = 0;

    ratingContainer.addEventListener('mousemove', function(event) {
        for (idx in stars) {
            // console.log('star:', key);
            // TODO: use a more efficient way of establishing the right interval -- e.g., binary search
            if (event.offsetX > stars[idx].left && event.offsetX < stars[idx].right) {
                // console.log(calledAtOffsetX, stars[idx].left, stars[idx].right);

                if (calledAtOffsetX <= stars[idx].left || calledAtOffsetX > stars[idx].right) {
                    calledAtOffsetX = event.offsetX;

                    console.log('STAR:', idx);
                    stars.forEach(function (star) {
                        if (star.rating === (+idx + 1)) {
                            // console.log('SELECTED STAR:', star);
                            star.domRef.style.zIndex = 1;
                        } else {
                            // console.log('UNSELECTED STAR:', star);
                            star.domRef.style.zIndex = 0;
                        }
                    });
                    break;
                }
        }}
    });
};
