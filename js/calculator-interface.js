import { Calc } from './../js/calculator.js';
$(document).ready(function () {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    let userAge = $("input#userAge").val();

    let userCalc = new Calc(userAge);
    let result = userCalc.ToSeconds();

    $("#result").text();

    let birthdate = $("input#userBirthdate").val();
    let calc = new Calc();

    const earthAge = calc.yearAge(birthdate);
    let ageInSeconds = calc.DateToSeconds(birthdate);


    $('#results-earth').append("<li>" + "Your age in Earth years = " + earthAge + "</li>");
    $('#results-earth').append("<li>" + "Your years on Earth = " + ageInSeconds + "seconds" "</li>");
  });
});
