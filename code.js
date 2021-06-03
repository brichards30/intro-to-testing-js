// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {

    if (typeof name === 'string') {
        if (isNaN(name)) {
            return 'Hello, ' + name + '!';
        }

    }
        return "Hello, World!";

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
