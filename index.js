function goToLinkedin() {
  window.open("https://www.linkedin.com/in/evan-elias-8515a810b", "_blank");
}

function goToGithub() {
  window.open("https://github.com/LordEvanElias", "_blank");
}

function goToBikes4U() {
  window.open("", "_blank");
}

function goToWeatherThingy() {
  window.open("", "_blank");
}

function goToREADMEMaker() {
  window.open("", "_blank");
}

function goToPasswordGenerator() {
  window.open("", "_blank");
}

function goToTeamProfileMaker() {
  window.open("", "_blank");
}

function goToC2ezPOS() {
  window.open("", "_blank");
}
document.querySelector(".github-logo").addEventListener("click", goToGithub);
document.querySelector(".linkedin-logo").addEventListener("click", goToLinkedin);
document.querySelector(".bikes4u").addEventListener("click", goToBikes4U);
document.querySelector(".weather-thingy").addEventListener("click", goToWeatherThingy);
document.querySelector(".README-maker").addEventListener("click", goToREADMEMaker);
document.querySelector(".password-generator").addEventListener("click", goToPasswordGenerator);
document.querySelector(".team-profile-maker").addEventListener("click", goToTeamProfileMaker);
document.querySelector(".c2ez-pos").addEventListener("click", goToC2ezPOS);
