import { Calc } from './../js/calculator.js';
$(document).ready(function () {
  $("#age-form").submit(function(event) {
    event.preventDefault();

    let userAge = $("input#userAge").val();
    let calc = new Calc();

    const AgeInSeconds = calc.AgeToSeconds(userAge);
    $('#results-seconds').text();

  });

  $('#user-form').submit(function(event){
    event.preventDefault();

    let birthdate = $("input#userBirthdate").val();
    let gender = $('input:radio[name=gender]:checked').val();
    let calc = new Calc();

    const EarthAge = calc.EarthAge(birthdate, gender);
    const MarsAge = calc.MarsAge(birthdate, gender);
    const MercuryAge = calc.MercuryAge(birthdate, gender);
    const VenusAge = calc.VenusAge(birthdate, gender);
    const JupiterAge = calc.JupiterAge(birthdate, gender);

    $('#results-earth').text();

  });
});
