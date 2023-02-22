function goToLinkedin() {
  window.open("https://www.linkedin.com/in/evan-elias-8515a810b", "_blank");
}

function goToGithub() {
  window.open("https://github.com/LordEvanElias", "_blank");
}

function goToBikes4U() {
  window.open("https://team-a2c2e.github.io/Bikes4U/", "_blank");
}

function goToWeatherThingy() {
  window.open("https://lordevanelias.github.io/weather-thingy/", "_blank");
}

function goToREADMEMaker() {
  window.open("https://github.com/LordEvanElias/README-maker", "_blank");
}

function goToPasswordGenerator() {
  window.open("https://lordevanelias.github.io/password-generator/", "_blank");
}

function goToTeamProfileMaker() {
  window.open("https://github.com/LordEvanElias/team-profile-maker", "_blank");
}

function goToC2ezPOS() {
  window.open("https://c2ez-pos.herokuapp.com/login", "_blank");
}
document.querySelector(".github-logo").addEventListener("click", goToGithub);
document.querySelector(".linkedin-logo").addEventListener("click", goToLinkedin);
document.querySelector(".bikes4u").addEventListener("click", goToBikes4U);
document.querySelector(".weather-thingy").addEventListener("click", goToWeatherThingy);
document.querySelector(".README-maker").addEventListener("click", goToREADMEMaker);
document.querySelector(".password-generator").addEventListener("click", goToPasswordGenerator);
document.querySelector(".team-profile-maker").addEventListener("click", goToTeamProfileMaker);
document.querySelector(".c2ez-pos").addEventListener("click", goToC2ezPOS);
