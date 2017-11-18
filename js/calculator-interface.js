import { Calc } from './../js/calculator.js';
$(document).ready(function () {
  $("form#age-form").submit(function(event) {
    event.preventDefault();

    let userAge = $("input#userAge").val();
    let userCalc = new Calc(userAge);
    let result = userCalc.ToSeconds();

    const ageInSeconds = calc.DateToSeconds(birthdate);
    $('#results-seconds').text();

  });

  $('#user-form').submit(function(event){
    event.preventDefault();
    // $('.results-earth').show();

    let birthdate = $("input#userBirthdate").val();
    let calc = new Calc(birthdate);

    const earthAge = calc.earthAge(birthdate);
    const marsAge = calc.marsAge(birthdate);
    const mercuryAge = calc.mercuryAge(birthdate);
    const venusAge = calc.venusAge(birthdate);
    const jupiterAge = calc.jupiterAge(birthdate);

    $('#results-earth').text();

  });
});
