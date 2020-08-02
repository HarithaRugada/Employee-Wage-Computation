console.log("Welcome to Employee Wage Computation");

let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 25;

let empHours = 0;
let empWage = 0;

let empCheck = Math.floor(Math.random() * 10) % 3;
if (empCheck == IS_PART_TIME)
{
	console.log("Employee is Present for part-time");
	empHours = 4;
}
else if (empCheck == IS_FULL_TIME)
{
	console.log("Employee is Present for full time");
	empHours = 8;
}
else
{
    	console.log("Employee is Absent");
	empHours = 0;
}

empWage = empHours * EMP_RATE_PER_HOUR;
console.log("Daily wage is", empWage);
