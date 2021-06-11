const continueBtn = document.querySelector(".continue");
const nextBtn = document.querySelector(".next");
const answerBtns = document.querySelectorAll(".q");
const nextQ = document.querySelector(".nextq");
const aBtn = document.querySelector(".a");
const bBtn = document.querySelector(".b");
const cBtn = document.querySelector(".c");
const dBtn = document.querySelector(".d");
const infoText = document.querySelector(".info-text");
const question = document.querySelector(".question");
const results = document.querySelector(".results");


var textNum = 0;
var answers = ["a", "b", "c", "d"];
var selectedA = "";
var selectedQ = 0;
const questions = ["q1", "q2", "q3", "q4"];
const texts = ["1", "2", "3", "4"];
var score = 0;

if(getCookie("score") != ""){
    score = parseInt(getCookie("score"));
    results.style.right = "0";
    results.style.zIndex = "100";
    anime({
        targets: '.total',
        innerHTML: [0, score],
        duration: 3000,
        easing: 'linear',
        round: 1,
    })
    
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

continueBtn.addEventListener("click", () => {
  anime({
    targets: ".load",
    left: "-200%",
    easing: "easeInOutQuad",
  });
});

nextBtn.addEventListener("click", () => {
  anime({
    targets: ".questions",
    top: "0%",
    easing: "easeInOutQuad",
  });
});

nextQ.addEventListener("click", () => {
  nextQ.style.display = "none";
  textNum += 1;
  infoText.innerHTML = texts[textNum];
  if(textNum > texts.length - 1){
    if(answers[selectedQ] == selectedA){
      score += 1000;
    }
    anime({
        targets: ".results",
        left: "0",
        easing: "easeInOutQuad",
    })
    anime({
        targets: '.total',
        innerHTML: [0, score],
        duration: 3000,
        easing: 'linear',
        round: 1,
    })
    setCookie("score",score.toString(), 1000);
  }
  else{
    anime({
        targets: ".questions",
        top: "-200%",
        easing: "easeInOutQuad",
    });
    if(answers[selectedQ] == selectedA){
        score += 1000;
    }
    selectedQ += 1;
    question.innerHTML = questions[selectedQ];
    aBtn.style.borderColor = "#FFFFFF";
    bBtn.style.borderColor = "#FFFFFF";
    cBtn.style.borderColor = "#FFFFFF";
    dBtn.style.borderColor = "#FFFFFF";

}
});

answerBtns.forEach((elmnt) => {
  elmnt.addEventListener("click", () => {
    nextQ.style.display = "block";
    selectedA = elmnt.classList[0];
    aBtn.style.borderColor = "#FFFFFF";
    bBtn.style.borderColor = "#FFFFFF";
    cBtn.style.borderColor = "#FFFFFF";
    dBtn.style.borderColor = "#FFFFFF";
    elmnt.style.borderColor = "#55BB77";
  });
});
