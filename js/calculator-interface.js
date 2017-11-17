import { Calc } from './../js/calculator.js';
$(document).ready(function () {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    let userAge = $("input#userAge").val();

    let userCalc = new Calc(userAge);
    let result = userCalc.ToSeconds();

      $("#result").text();
    
  });
});
