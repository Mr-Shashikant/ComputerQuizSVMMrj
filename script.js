let home = document.getElementById("home");
let members = document.getElementById("members");
let achievements = document.getElementById("achievements");
let syllabus = document.getElementById("syllabus");
let aboutQuiz = document.getElementById("aboutQuiz");
let aboutWebsite = document.getElementById("aboutWebsite");
let aboutShashikant = document.getElementById("aboutShashikant");
let menuClicker = document.getElementById("hamMenu");
let menu = document.getElementById("menu");
let menuToggle = document.getElementById("hamMenu");

function homeF() {
    home.style.display = "flex";
    members.style.display = "none";
    achievements.style.display = "none";
    syllabus.style.display = "none";
    aboutQuiz.style.display = "none";
    aboutWebsite.style.display = "none";
    aboutShashikant.style.display = "none";
    menu.style.display = "none";
    menuToggle.classList.remove('close');
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
    menuToggle.classList.remove('close');
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
    menuToggle.classList.remove('close');
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
    menuToggle.classList.remove('close');
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
    menuToggle.classList.remove('close');
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
    menuToggle.classList.remove('close');
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
    menuToggle.classList.remove('close');
}
function menuF() {
    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = "flex";
        menuToggle.classList.add('close');
    } else if (menu.style.display == 'flex') {
        menu.style.display = "none";
        menuToggle.classList.remove('close');
    }
}