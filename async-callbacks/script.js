// console.log('hello');

function someCallback() {
	console.log('Hey there 🙂')
}
// setTimeout(<callback>, <timeInMillSec>)
// const id = setTimeout(function () {
// 	console.log('Hey there 🙂')
// }, 3000);
// console.log(id);
// console.log('this runs first ⏰')
// this cancels the timeout
// clearTimeout(id);
// clearTimeout()

// counter
let counter = 1;
let timeoutId;
function callback() {
	console.log(counter);
	timeoutId = setTimeout(callback, 1000);
	counter++
	// under some condition we want to stop the counter
	if (counter > 3) {
		clearTimeout(timeoutId);
	}
}

// callback();

let i = 1;
setInterval(function () {
	console.log(i);
	i++
}, 1000)