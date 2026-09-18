let arr = [-5, 10, -3, 20, 7, -1];

let sum = 0;

for (let elem of arr) {
    if (elem > 0) {
        sum += elem;
    }
}

console.log(sum); // 37