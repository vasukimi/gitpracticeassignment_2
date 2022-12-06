let num=9;

let count=0;

for (let i=0;i<=num/2;i++){

	if(num%i==0){
	count++;
	}
}

if(count==0){
console.log("Yes Prime");
}

else{
console.log("Not Prime");
}