(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = exports.Calc = function () {
  function Calc() {
    _classCallCheck(this, Calc);
  }

  _createClass(Calc, [{
    key: "AgeToSeconds",
    value: function AgeToSeconds(age) {
      return age * 31556952;
    }
  }, {
    key: "DateToSeconds",
    value: function DateToSeconds(date) {
      return this.EarthAge(date) * 31556952;
    }
  }, {
    key: "DatesDifference",
    value: function DatesDifference(dateOne, dateTwo) {
      return this.DateToSeconds(dateTwo) - this.DateToSeconds(dateOne) / 1000;
    }
  }, {
    key: "EarthAge",
    value: function EarthAge(date) {
      var currentdate = new Date();
      var birthdate = new Date(date);
      var age = new Date(currentdate - birthdate).getFullYear() - 1970;
      return age;
    }
  }, {
    key: "MercuryAge",
    value: function MercuryAge(date) {
      return Math.round(this.EarthAge(date) / .24);
    }
  }, {
    key: "VenusAge",
    value: function VenusAge(date) {
      return Math.round(this.EarthAge(date) / .62);
    }
  }, {
    key: "MarsAge",
    value: function MarsAge(date) {
      return Math.round(this.EarthAge(date) / 1.88);
    }
  }, {
    key: "JupiterAge",
    value: function JupiterAge(date) {
      return Math.round(this.EarthAge(date) / 11.86);
    }
  }, {
    key: "LifeExpectancy",
    value: function LifeExpectancy(gender) {
      var averageEarthLife = 70;
      if (gender == "Male") {
        return averageEarthLife -= 10;
      } else if (gender !== "Male") {
        return averageEarthLife += 10;
      }
    }
  }, {
    key: "LifeMercury",
    value: function LifeMercury(gender) {
      return Math.round(this.LifeExpectancy(gender) / 0.24);
    }
  }, {
    key: "LifeVenus",
    value: function LifeVenus(gender) {
      return Math.round(this.LifeExpectancy(gender) / 0.62);
    }
  }, {
    key: "LifeMars",
    value: function LifeMars(gender) {
      return Math.round(this.LifeExpectancy(gender) / 1.88);
    }
  }, {
    key: "LifeJupiter",
    value: function LifeJupiter(gender) {
      return Math.round(this.LifeExpectancy(gender) / 11.86);
    }
  }]);

  return Calc;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _calculator = require("./../js/calculator.js");

$(document).ready(function () {
  $("#age-form").submit(function (event) {
    event.preventDefault();

    var userAge = $("input#userAge").val();
    var calc = new _calculator.Calc();

    var AgeInSeconds = calc.AgeToSeconds(userAge);
    console.log(AgeInSeconds);
    $('#result-seconds').text();
  });

  $('#user-form').submit(function (event) {
    event.preventDefault();

    var birthdate = $("input#userBirthdate").val();
    var gender = $('input:radio[name=gender]:checked').val();
    var calc = new _calculator.Calc();

    // const EarthAge = calc.EarthAge(birthdate, gender);
    // const MarsAge = calc.MarsAge(birthdate, gender);
    // const MercuryAge = calc.MercuryAge(birthdate, gender);
    // const VenusAge = calc.VenusAge(birthdate, gender);
    // const JupiterAge = calc.JupiterAge(birthdate, gender);

    $('#EarthAge').text(calc.EarthAge(birthdate));
    console.log(EarthAge);
    $('#MercuryAge').text(calc.MercuryAge(birthdate));
    console.log(MercuryAge);
    $('#VenusAge').text(calc.VenusAge(birthdate));
    $('#MarsAge').text(calc.MarsAge(birthdate));
    $('#JupiterAge').text(calc.JupiterAge(birthdate));

    $('#LifeExpectancy').text(calc.LifeExpectancy(birthdate, gender));
    $('#LifeMercury').text(calc.LifeMercury(birthdate, gender));
    $('#LifeVenus').text(calc.LifeVenus(birthdate, gender));
    $('#LifeMars').text(calc.LifeMars(birthdate, gender));
    $('#LifeJupiter').text(calc.LifeJupiter(birthdate, gender));
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
