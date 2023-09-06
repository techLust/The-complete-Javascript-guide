// EVERYTHING IN JS HAPPENS IN AN EXECUTION CONTEXT

var x = 7;

function gateName() {
    console.log('Hey there! how are you?');
}

gateName()
console.log(x)
console.log(gateName)