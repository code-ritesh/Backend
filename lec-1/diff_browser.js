const x = setTimeout(() => {
    console.log("hello after 3 seconds ")
}, 1000);

console.log(x)

// in node x is object of Timeout class
// in browser x is a number

clearTimeout(x)