//Show Definition

function showDefinition() {
	var x = document.getElementById("definition");
	if(x.style.display =="none"){
		x.style.display = "block";
	} else{
		x.style.display = "none";
	}


}

//Hide Definition
function hideBtn(){
	document.getElementById("definition").style.display = "none";
}



//Promise function experiment 
function myDisplayStatus(status){
	 document.getElementById("myMessage").innerHTML = status;
}


let myPromise = new Promise(
	(myResolve, myReject ) => {
		let x = 2;
		// console.log("Hello Promise")

		//Some code 
		if (x == 2){
			myResolve("OK");
		}

		else{
			myReject("Error");
		}
	}
	);

function callBack(){
	myPromise.then(

	function(value) {myDisplayStatus(value);},
	function(error) {myDisplayStatus(error);}
	);
}

callBack();





function myFunction(value) {
  document.getElementById("exp").innerHTML = value;
}


setTimeout(() => { myFunction("I am doing well !!!"); }, 3000);




function displayName(Name){
	document.getElementById("myName").innerHTML = Name;
}

let myIdentity = new Promise(
	(personName, personError) => {
		let name = 2;
		// console.log("Hello Mahatab")

		if (name == 2){
			personName("Hi Mahatab! How are you");
		}
		else{
			personError("There is no person! ");
		}
	});

// timeOut();


myIdentity.then(
	function(value) {displayName(value);},
	function(error) {displayName(error);}
	);


//async await experiment 

// 	function displayMessage(msg1){
// 	document.getElementById("myMessage").innerHTML = msg1;
// }

// async function resolveAfterTwoSecond(){
// 	return "Resolved";
// 	console.log("It is resolved");
// }

// resolveAfterTwoSecond().then(
// 	function(value1) {displayName(value1);},
// 	function(error1) {displayName(error1);}
// 	);


// let value = await Promise;

// async function myFirstAsync(){
// 	let MyPromiseExperiment = new Promise(function(myResolve, myReject){
// 		myResolve("I am a student! ");
// 	});
// 	document.getElementById("newAwait").innerHTML = await myPromiseExperiment;
// }

// myFirstAsync();
