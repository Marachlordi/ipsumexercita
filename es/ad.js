let config = {
    style: "oblique",
    weight: "600",
};

// Assigning style property to another object
let elementSettings = {
    style: config.style,
    // Other settings...
};

console.log(elementSettings); // { style: "oblique" }

// Using destructuring
let { style } = config;
console.log(style); // "oblique"
