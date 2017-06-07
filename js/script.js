// // var x = 5;
// // x+=1;
// // console.log(x);
// // x++;
// // console.log(x);
// // x=x+1;
// // console.log(x);


// // var y = 8;
// // y -=1;
// // y--;
// // y=y-1;
// // console.log(y);

// // var z = 8;
// // z=z*2;
// // z*=2;
// // console.log(z);

// // var a=8;
// // a=a/2;
// // a/=2;
// // console.log(a);

// var b=17;
// b=b%2;
// console.log(b);
//Modulus takes the value,divides it by the number
//and returns the remainder

function evenOrOdd(num){
	var tester = num%2;
	if(tester == 0){
		console.log("even number");
	}
	else if (tester == 1){
		console.log("odd number");
	}
	else{
		console.log("invalid input");
	}
}
evenOrOdd('asdasd');