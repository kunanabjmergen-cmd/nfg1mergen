let arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let elem of arr) {
    sum += elem;
}

let average = sum / arr.length;

console.log(average); // 30