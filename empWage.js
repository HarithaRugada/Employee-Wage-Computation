console.log("Welcome to Employee Wage Computation");

let IS_PRESENT = 1;
let EMP_RATE_PER_HOUR = 25;

let empHours = 0;
let empWage = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_PRESENT)
{
	console.log("Employee is Present");
	empHours = 8;
}
else
{
    	console.log("Employee is Absent");
	empHours = 0;
}

empWage = empHours * EMP_RATE_PER_HOUR;
console.log("Daily wage is", empWage);
