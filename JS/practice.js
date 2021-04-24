// const item = ['Mahatab', 'Samirul', 'Romio']

// for(let i = 0; i < item.length; i++){
// 	console.log(item[i]);
// }



// const items = ['Mahatab Hossain', 'Mehedi Hasan', 'Masum Sk']

// items.forEach((items) => {
// 	console.log(items);
// });



// const arr = [1,3,9,3, 10]
// sum = 0

// arr.forEach((arr) => {
// 	sum += arr
// });
// console.log(sum);


// async function practice 
// async function resolveAfterTwoSecond() {
// 	return "Resolved";
// }

//Using Promise	

// async function resolveAfterTwoSecond(){
// 	return Promise.resolve("Hello");
// }

// function displayMessage(msg){
// 	document.getElementbyId("message").innerHTML = msg; 
// }

// resolveAfterTwoSecond().then{
// 	function(value) {resolveAfterTwoSecond(value);},
// 	function(error) {resolveAfterTwoSecond(error);}
// }


// await

// let value = await Promise;
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("I am a student!");
  });
  document.getElementById("newAwait").innerHTML = await myPromise;
}

myDisplay();

async function displayAfterTimeout(){
	let newPromise = new Promise(function(myResolve, myReject){
		setTimeout(function(){myResolve("Aliah University! ");}, 4000);
		// console.log("hi")
	});
	document.getElementById("versity").innerHTML = await newPromise;
}	

displayAfterTimeout();













// async function testMessage(){
// 	let newStatus = new Promise((resolve,reject) => {

// 	setTimeout(function(){resolve("Status Is OK ! ");}, 2000);

// 	});
	
// 	document.getElementById("statusMsg").innerHTML = await newStatus;
// }

// testMessage();





async function testMessage(){
	let newStatus = new Promise((resolve,reject) => {

		let code = 201;

		if(code == 200){
			setTimeout(function(){resolve("Status Is OK ! ");}, 2000);
		}else{
			reject("Please correct");
		}
		// console.log("Self Test")
	});
	document.getElementById("statusMsg").innerHTML = await newStatus;
}

testMessage();