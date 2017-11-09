// var number =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evenNumbers = number.filter(function (number){
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

// var namber =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var namber2 =[];
// 	for(var i=0; i<namber.length; i++){
// 		var n = namber[i];
// 		if(n % 2===0){
// 			namber2.push(n);
// 		}

// 	}
// 	console.log(namber2);

var numbers = [1,2,4,5,6,7,8,9,100];
var explan;
for (var i = 0; i < numbers.length; i++) {
 explan = (numbers[i] === 100 ? numbers[i] : 0);

}

console.log([explan]);
