var john = {
  firstname: "John",
  lastname: "Smith",
  height: 1.69,
  weight: 78,
  bmiCalc: function () {
    this.bmi = this.weight / this.height ** 2; //using this keyword to create a property for john object and using already defined properties of height and weight
  },
};
var mark = {
  firstname: "Mark",
  lastname: "Sean",
  height: 1.95,
  weight: 92,
  bmiCalc: function () {
    this.bmi = this.weight / this.height ** 2; //using this keyword to create a property for john object and using already defined properties of height and weight
  },
};
john.bmiCalc(); //the method needs to be executed to create the BMI property for john object. Otherwise john.bmi will be undefined.
mark.bmiCalc(); //the method needs to be executed to create the BMI property for mark object. Otherwise mark.bmi will be undefined.
console.log(john);
console.log(mark);
//using ternary operator

john.bmi > mark.bmi
  ? console.log(
      john.firstname +
        " " +
        john.lastname +
        " has a higher BMI than " +
        mark.firstname +
        " " +
        mark.lastname
    )
  : mark.bmi > john.bmi
  ? console.log(
      mark.firstname +
        " " +
        mark.lastname +
        " has a higher BMI than " +
        john.firstname +
        " " +
        john.lastname
    )
  : console.log(
      john.firstname +
        " " +
        john.lastname +
        " and " +
        mark.firstname +
        " " +
        mark.lastname +
        " has the same BMI"
    );
