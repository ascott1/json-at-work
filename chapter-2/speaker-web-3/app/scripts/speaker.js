'use strict';

function Speaker(firstName, lastName, email, company, about, registered) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.company = company;
  this.about = about;
  this.registered = registered || false;
  this.tags = [];
}

Speaker.prototype = {
    fullName: function () {
        return (this.firstName + ' ' + this.lastName);
    },

    printFullName: function() {
      console.log('My name is ' + this.fullName());
    }
};

function SpeakerFactory(){}
SpeakerFactory.makeFromObj = function(obj) {
  var spkr = new Speaker();

  for (var key in obj) {
    if (spkr.hasOwnProperty(key)) {
      spkr[key] = obj[key];
    }
  }

  return spkr;
};

SpeakerFactory.makeFromJson = function(json) {
  var obj = JSON.parse(json);

  return SpeakerFactory.makeFromObj(obj);
};