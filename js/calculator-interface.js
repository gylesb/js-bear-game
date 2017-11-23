import { Calc } from './../js/calculator.js';
$(document).ready(function () {
  $("#age-form").submit(function(event) {
    event.preventDefault();

    let userAge = $("input#userAge").val();
    let calc = new Calc();

    $('#result-seconds').text(calc.AgeToSeconds(userAge));
  });

  $('#user-form').submit(function(event){
    event.preventDefault();

    let birthdate = $("input#userBirthdate").val();
    let gender = $('input:radio[name=gender]:checked').val();
    let calc = new Calc();

    $('#EarthAge').text(calc.EarthAge(birthdate));
    console.log(EarthAge);
    $('#MercuryAge').text(calc.MercuryAge(birthdate));
    console.log(MercuryAge);
    $('#VenusAge').text(calc.VenusAge(birthdate));
    $('#MarsAge').text(calc.MarsAge(birthdate));
    $('#JupiterAge').text(calc.JupiterAge(birthdate));

    $('#LifeExpectancy').text(calc.LifeExpectancy(gender));
    $('#LifeMercury').text(calc.LifeMercury(birthdate, gender));
    $('#LifeVenus').text(calc.LifeVenus(birthdate, gender));
    $('#LifeMars').text(calc.LifeMars(birthdate, gender));
    $('#LifeJupiter').text(calc.LifeJupiter(birthdate, gender));

    $("#results").show();

  });
});
