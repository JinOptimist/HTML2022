let sum = 2 + 2;
let age = sum * 4;
let ageOld = (sum + age) * 3 - 17;

let condition1 = age > 18;//false
let condition2 = condition1 && sum != 7;//false
let condition3 = condition1 || !condition2;//true

let user = 'Ivan';
let age2 = 20;

if (age > 18){
	user = 'man';
}else{
	user = 'child';
}

let studens = [7,8,9,5,7,10,-50];//7

let max = studens[0];

for(let i = 0 ; i < studens.length ; i = i + 1){
	if (studens[i] > max){
		max = studens[i];
	}
}

let summOfArray = 0;
for(let i = 0 ; i < studens.length ; i = i + 1){
	summOfArray = studens[i] + summOfArray;
}

console.log(summOfArray);




