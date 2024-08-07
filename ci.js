function process(n, i) {
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

let n = [3500]; // Example array with a number
let i = 5; // Example number

console.log(process(n, i)); // Output: 8
console.log(d.L); // Assuming d.L is set by the function
