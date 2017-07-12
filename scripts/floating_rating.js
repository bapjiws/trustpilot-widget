window.onload = function () {
    var ratingContainer = document.querySelector('.rating-container');
    console.log('ratingContainer:', ratingContainer.clientWidth);

    var stars = [1, 2, 3, 4, 5].reduce(function (acc, curr) {
        acc.push({
            rating: curr,
            domRef: document.querySelector('.rating-' + curr),
            left: (ratingContainer.clientWidth / 5) * (curr - 1),
            right: (ratingContainer.clientWidth / 5) * curr - 1
        });
        return acc;
    }, []);
    console.log('stars:', stars);

    ratingContainer.addEventListener('mousemove', function(event) {
        // TODO: use a more efficient way of establishing the right interval -- e.g., binary search
        for (idx in stars) {
            // console.log('star:', key);
            if (event.offsetX > stars[idx].left && event.offsetX < stars[idx].right) {
                console.log('STAR:', idx);

                // console.log('test:', stars.filter(function (star) {return star.rating !== idx + 1}));
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
        }}
    });
};
