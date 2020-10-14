var johnHeight, markHeight, johnWeight, markWeight, johnBmi, markBmi, result;

johnHeight = prompt("Please enter John's Height in meters:");
johnWeight = prompt("Please enter John's Weight in kilograms:");
markHeight = prompt("Please enter Mark's Height in meters:");
markWeight = prompt("Please enter Mark's Weight in kilograms:");

johnBmi = johnWeight / johnHeight ** 2; //Operator Precedence
markBmi = markWeight / markHeight ** 2; //Operator Precedence

console.log(`John BMI is : ${johnBmi}`, `Mark BMI is : ${markBmi}`);
result = markBmi >= johnBmi;

alert("Is Mark's BMI is higher than John's?  " + result); //Type Coercion
