// A function which take a function as an argument or return a function from it is called heigher order function.

const radius = [3, 1, 2, 4];

const area = radius => {
    return Math.PI * radius * radius;
}

const circumference = radius => {
    return 2 * Math.PI * radius
}

const diameter = radius => {
    return 2 * radius;
}

const calculate = (arr, logic) => {
    const outPut = [];
    for (let i = 0; i < arr.length; i++) outPut.push(logic(arr[i]))
    return outPut;
}

const areaOfCircle = calculate(radius, area);
console.log("Area of circle", areaOfCircle)

console.log("Circumference of circle", calculate(radius, circumference));
console.log('Daimeter of circle', calculate(radius, diameter))