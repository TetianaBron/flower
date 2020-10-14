const wr = document.querySelector('.wr-flowers'),
      rect = wr.getBoundingClientRect();
let idInterval;
console.log(rect);

wr.addEventListener('mousemove', debounce(e => {
    return addFlower(wr, e.clientX - rect.left - 25, e.clientY - rect.top - 25);
}, 300));

function addFlower(wr, x, y) {
    const flower = createFlower(x, y);
    wr.appendChild(flower);
    setTimeout(() => wr.removeChild(flower), 700);
    return { x, y };
}

function createFlower(x, y) {
    const flower = document.createElement('img');
    flower.setAttribute('src', `img/${rnd(1, 5)}.png`);
    flower.style.animationName = 'disappear-' + rnd(1, 4);
    flower.style.animationDuration = '1.5s';
    flower.style.top = y + 'px';
    flower.style.left = x + 'px';
    flower.className = 'flower';
    return flower;
}

function rnd(min, max) {
    return Math.round(min-0.5+Math.random()*(max-min+1));
}

function debounce(f, ms) {
    let isWork = true;
    return function () {
        if (isWork) {
            isWork = false;
            setTimeout(() => {
                isWork = true;
            }, ms);
            return f.apply(null, arguments);
        }
        return 'not work';
    };
}

// function decShowConsole(f) {
//     return function () {
//         const result = f.apply(null, arguments);
//         console.log(result);
//         return result;
//     }
// }

// function add(a, b) {
//     //console.log(arguments);
//     return a + b;
// }

// function increment (a) {
//     return a + 1;
// }

// const _increment = decShowConsole(increment);
// const _add = decShowConsole(add);


// _increment(2);
// _add(5, 7.5);
// add(5, 7.5, 8, 10);

// function recursion1(n) {
//     console.log(n);
//     if (n < 0) return 8;
//     return recursion1(n - 1);
// }
// console.log(recursion1(5));