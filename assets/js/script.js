/********************************Coding Challenge 1 *****************************
var johnHeight,
    markHeight,
    johnWeight,
    markWeight,
    johnBmi,
    markBmi,
    result;

johnHeight = prompt("Please enter John's Height in meters:");
johnWeight = prompt("Please enter John's Weight in kilograms:");
markHeight = prompt("Please enter Mark's Height in meters:");
markWeight = prompt("Please enter Mark's Weight in kilograms:");

johnBmi = johnWeight / johnHeight**2; //Operator Precedence
markBmi = markWeight / markHeight**2; //Operator Precedence

console.log(johnBmi, markBmi);
result = markBmi>=johnBmi;

alert("Is Mark's BMI is higher than John's?  " + result); //Type Coercion

*/

/********************************Coding Challenge 2 *****************************

var avgTeamJohn,
    avgTeamMike,
    avgTeamMary;

var johnScore1 = 89,
    johnScore2 = 120,
    johnScore3 = 103,
    mikeScore1 = 116,
    mikeScore2 = 123,
    mikeScore3 = 94,
    maryScore1 = 97,
    maryScore2 = 134,
    maryScore3 = 105;

avgTeamJohn = (johnScore1 + johnScore2 + johnScore3)/3; console.log("Team John Average Score = " + avgTeamJohn);
avgTeamMike = (mikeScore1 + mikeScore2 + mikeScore3)/3; console.log("Team Mike Average Score = " + avgTeamMike);
avgTeamMary = (maryScore1 + maryScore2 + maryScore3)/3; console.log("Team Mary Average Score = " + avgTeamMary);

if(avgTeamJohn > avgTeamMike && avgTeamJohn > avgTeamMary){
    console.log("Team John is the winner and their average score is " + avgTeamJohn);
}else if(avgTeamMike > avgTeamJohn && avgTeamMike > avgTeamMary){
    console.log("Team Mike is the winner and their average score is " + avgTeamMary);
}
else if(avgTeamMary > avgTeamJohn && avgTeamMary > avgTeamMike){
    console.log("Team Mary is the winner and their average score is " + avgTeamMary);
}else{
    if(avgTeamJohn === avgTeamMike){
        console.log("We have a draw between Team John and Team Mike");
    }
    else if(avgTeamJohn === avgTeamMary){
        console.log("We have a draw between Team John and Team Mary");
    }
    else{
        console.log("We have a draw between Team Mary and Team Mike");
    }
}

*/
/********************************Coding Chanllenge 3 ******************************************

var bill1 = 124;
var bill2 = 48;
var bill3 = 268;
var tipArray = [];
var paidAmount = [];

function tipCalculator(bill){
    return bill <= 50 ? 0.2*bill : bill > 50 && bill <= 200 ? 0.15*bill : 0.10*bill; //the use of ternary operator 'chain if else'
}
console.log(tipCalculator(10));

tipArray.push(tipCalculator(bill1));
tipArray.push(tipCalculator(bill2));
tipArray.push(tipCalculator(bill3));
console.log("Calculated tip on each bill: " + tipArray);
paidAmount.push(bill1 + tipCalculator(bill1));
paidAmount.push(bill2 + tipCalculator(bill2));
paidAmount.push(bill3 + tipCalculator(bill3));
console.log("Total amount paid on each bill: " + paidAmount);

*/

/********************************Coding Chanllenge 4 ******************************************

var john = {
    firstname: "John",
    lastname: "Smith",
    height: 1.69,
    weight: 78, 
    bmiCalc: function(){
        this.bmi = this.weight / this.height**2;  //using this keyword to create a property for john object and using already defined properties of height and weight
    }
}
var mark = {
    firstname: "Mark",
    lastname: "Sean",
    height: 1.95,
    weight: 92, 
    bmiCalc: function(){
        this.bmi = this.weight / this.height**2;  //using this keyword to create a property for john object and using already defined properties of height and weight
    }
}
john.bmiCalc(); //the method needs to be executed to create the BMI property for john object. Otherwise john.bmi will be undefined.
mark.bmiCalc(); //the method needs to be executed to create the BMI property for mark object. Otherwise mark.bmi will be undefined.
console.log(john);
console.log(mark);
//using ternary operator

john.bmi>mark.bmi ? console.log(john.firstname + " " + john.lastname + " has a higher BMI than " + mark.firstname + " " + mark.lastname) : mark.bmi>john.bmi ? console.log(mark.firstname + " " + mark.lastname + " has a higher BMI than " + john.firstname + " " + john.lastname) : console.log(john.firstname + " " + john.lastname + " and "+ mark.firstname + " " + mark.lastname + " has the same BMI");

*/
/********************************Coding Chanllenge 5 *******************************************/

/* function arrayAvg(array){
    var sum = 0;
    var avg = 0;
    for(var i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    avg = sum / (array.length);
    return avg;
}

var johnFamily = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmount: [],
    avgTip: 0,
    tipCalculator: function(){
        for(var i=0; i<this.bills.length; i++){
            var tip = 0;
            var fullAmount = 0;
            if(this.bills[i] <= 50){
                tip = this.bills[i]*0.2;
                fullAmount = this.bills[i] + tip;
            }
            else if(this.bills[i]>50 && this.bills[i]<=200){
                tip = this.bills[i]*0.15;
                fullAmount = this.bills[i] + tip;
            }
            else{
                tip = this.bills[i]*0.10;
                fullAmount = this.bills[i] + tip;
            }
            this.tips.push(tip);
            this.finalAmount.push(fullAmount);   
        }
    }
}
johnFamily.tipCalculator();
johnFamily.avgTip = arrayAvg(johnFamily.tips);
console.log(johnFamily);

var markFamily = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalAmount: [],
    avgTip: 0,
    tipCalculator: function(){
        for(var i=0; i<this.bills.length; i++){
            var tip = 0;
            var fullAmount = 0;
            if(this.bills[i] <= 100){
                tip = this.bills[i]*0.2;
                fullAmount = this.bills[i] + tip;
            }
            else if(this.bills[i]>100 && this.bills[i]<=300){
                tip = this.bills[i]*0.1;
                fullAmount = this.bills[i] + tip;
            }
            else{
                tip = this.bills[i]*0.25;
                fullAmount = this.bills[i] + tip;
            }
            this.tips.push(tip);
            this.finalAmount.push(fullAmount);   
        }
    }
}
markFamily.tipCalculator();
markFamily.avgTip = arrayAvg(markFamily.tips);
console.log(markFamily);

if(johnFamily.avgTip > markFamily.avgTip){
    console.log("John Smith paid more tip than Mark Miller");
}else if(markFamily.avgTip > johnFamily.avgTip){
    console.log("Mark Miller paid more tip than John Smith");
}else{
    console.log("John Smith and Mark Miller paid the same amount in tips");
} */


