function findStarByMousePosX(mousePosX, stars) {
    var min = 0;
    var max = stars.length - 1;
    var guess;

    var ks = 0;
    while (min <= max) {
        ks++;
        if (ks === 5) {return};

        guess = Math.floor((min + max) / 2);
        // console.log('min, max:', min, max);
        // console.log('guess:', guess,  stars[guess]);

        // console.log('min. max:', min. max);
        if (mousePosX > stars[guess].left && mousePosX < stars[guess].right) {
            return guess;
        } else if (mousePosX > stars[guess].right) {
            min = guess + 1;
        } else if (mousePosX < stars[guess].left) {
            // console.log('LAST:', mousePosX, stars[guess].left);
            max = guess - 1;
            // console.log('max now is:', max);
        }
    }
    return -1;
}


// var ans = findStarByMousePosX(15, stars);
// console.log('ans:', ans);

// var ans = findStarByMousePosX(52, stars);
// console.log('ans:', ans);

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