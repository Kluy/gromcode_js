"use strict";

// file path: src/profile.js

var printProfile = function printProfile(profileData) {
  var name = profileData.name,
    company = profileData.company;
  console.log("".concat(name, " from ").concat(company));
};