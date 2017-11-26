import { Calc } from './../js/calculator.js';
$(document).ready(function () {
  $("#age-form").submit(function(event) {
    event.preventDefault();

    let userAge = $("input#userAge").val();
    let calc = new Calc();

    $('#result-seconds').text(calc.AgeToSeconds(userAge));
    
    $("#seconds").show();
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
    $('#LifeEarth').text(calc.LifeEarth(gender, birthdate));
    $('#LifeMercury').text(calc.LifeMercury(gender, birthdate));
    console.log(LifeMercury);
    $('#LifeVenus').text(calc.LifeVenus(gender, birthdate));
    $('#LifeMars').text(calc.LifeMars(gender, birthdate));
    $('#LifeJupiter').text(calc.LifeJupiter(gender, birthdate));

    $("#results").show();

  });
});
