let arr = [12, 5, 87, 23, 4, 51];

let max = arr[0];

for (let elem of arr) {
    if (elem > max) {
        max = elem;
    }
}

console.log(max); // 87