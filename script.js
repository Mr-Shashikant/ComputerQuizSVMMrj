let home = document.getElementById("home");
let members = document.getElementById("members");
let achievements = document.getElementById("achievements");
let syllabus = document.getElementById("syllabus");
let aboutQuiz = document.getElementById("aboutQuiz");
let aboutWebsite = document.getElementById("aboutWebsite");
let aboutShashikant = document.getElementById("aboutShashikant");
let menuClicker = document.getElementById("hamMenu");
let menu = document.getElementById("menu");

function homeF() {
    home.style.display = "flex";
    members.style.display = "none";
    achievements.style.display = "none";
    syllabus.style.display = "none";
    aboutQuiz.style.display = "none";
    aboutWebsite.style.display = "none";
    aboutShashikant.style.display = "none";
    menu.style.display = "none";
}
function membersF() {
    home.style.display = "none";
    members.style.display = "flex";
    achievements.style.display = "none";
    syllabus.style.display = "none";
    aboutQuiz.style.display = "none";
    aboutWebsite.style.display = "none";
    aboutShashikant.style.display = "none";
    menu.style.display = "none";
}
function achievementsF() {
    home.style.display = "none";
    members.style.display = "none";
    achievements.style.display = "flex";
    syllabus.style.display = "none";
    aboutQuiz.style.display = "none";
    aboutWebsite.style.display = "none";
    aboutShashikant.style.display = "none";
    menu.style.display = "none";
}
function syllabusF() {
    home.style.display = "none";
    members.style.display = "none";
    achievements.style.display = "none";
    syllabus.style.display = "flex";
    aboutQuiz.style.display = "none";
    aboutWebsite.style.display = "none";
    aboutShashikant.style.display = "none";
    menu.style.display = "none";
}
function aboutQuizF() {
    home.style.display = "none";
    members.style.display = "none";
    achievements.style.display = "none";
    syllabus.style.display = "none";
    aboutQuiz.style.display = "flex";
    aboutWebsite.style.display = "none";
    aboutShashikant.style.display = "none";
    menu.style.display = "none";
}
function aboutWebsiteF() {
    home.style.display = "none";
    members.style.display = "none";
    achievements.style.display = "none";
    syllabus.style.display = "none";
    aboutQuiz.style.display = "none";
    aboutWebsite.style.display = "flex";
    aboutShashikant.style.display = "none";
    menu.style.display = "none";
}
function aboutShashikantF() {
    home.style.display = "none";
    members.style.display = "none";
    achievements.style.display = "none";
    syllabus.style.display = "none";
    aboutQuiz.style.display = "none";
    aboutWebsite.style.display = "none";
    aboutShashikant.style.display = "flex";
    menu.style.display = "none";
}
function menuF() {
    menu.style.display = "flex"
}