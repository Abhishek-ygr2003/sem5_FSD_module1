// Old version function
function oldversion() {
    console.log("Hi, I am function");
}
oldversion();

// New version function
const newversion = () => {
    console.log("Hi, I am the new Function");
}
newversion();

// Old function with return
function oldversion2(no1) {
    return no1 + 10;
}
console.log(oldversion2(30));

// New version with return
const newversion2 = no1 => no1 + 10;
console.log(newversion2(30)); 
