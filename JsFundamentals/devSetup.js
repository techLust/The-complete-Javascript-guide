const foreCastDataTwo = [12, 5, -5, 0, 4];
const foreCastDataOne = [17, 21, 23];

const foreCastDataThree = foreCastDataOne.concat(foreCastDataTwo);
console.log(foreCastDataThree)
console.log(`Overall temparature........`)
const printForecast = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        console.log(`... ${arr[i]} days ${i + 1}  `);
    }

}

printForecast(foreCastDataThree)
