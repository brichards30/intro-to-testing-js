// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    return 'Hello, ' + name + '!';
    /*if (name === "Jaymes") {
        return "Hello, Jaymes!"
    } else if (name === "Alex") {
        return 'Hello, Alex!';
    } else if (name === "Pat") {
        return 'Hello, Pat!';
    } else if (name === true) {
        return 'Hello, World!';
    } //else if (name === false) {
    return 'Hello, World!';
     */
}
function isFive(value) {
        if (value === 5) {
            return true;
        } else if (value !== 5) {
            return false;
        }
}
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    } else if (value % 2 >= 1) {
        return false;
    }

}

console.log(isEven(-2));
console.log(isEven(13));