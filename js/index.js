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
var answers = ["d", "a", "d", "b","c","a"];
var optionsA = ["a1","Supernova","Destroy planets","Proxima centauri b","8 minutes and 10 seconds","Higher Frequency"]
var optionsB = ["b1","Hawking Radiation","Attract every planet until they crash","Sun","9 minutes and 20 seconds","Lower Frequency "]
var optionsC = ["c1","The big bang","Create planets","Alpha centauri","8 minutes and 20 seconds","Outer Frequency"]
var optionsD = ["d1","Accretion disk","Attract planets around the sun and they spin by themself","Bernard’s star", "2 years","Ultra radial Frequency"]
var selectedA = "";
var selectedQ = 0;
const questions = ["q1", "What created our planets, moons and sun?", "What does the sun do?", "What’s the closest star to earth?","How long does it take the sunlight to reach Earth?" ,"How does the frequency change of sirens close to you?"];
const texts = ["1", "It all happened after the big bang exactly 4.5 billion years ago when our solar system was formed and the first planets started creating, but all of this just happened because a supernova ( explosion of a star ) squeezed two dust clouds which contained gas and cold dust, after squeezing together which is called solar nebular, it also means that it spinned really fast and started gathering heat while spinning faster and faster in the inside of the two clouds of dust which is called a accretion disk at this point, a small ball extremely hot formed. As the disk got thinner and faster the particles inside of the disk added together with other particles and bigger clumps until eventually planets and moons were formed. Planets that were rocky and stony lead to being in the middle of the solar system/ disk for example the earth is rocky and watery, the rocks and the water were able to stand the heat and that’s the reason for them being more to the middle. But other planets like Uranus and Neptune which are cold and icy. But this isn’t where the disk stopped spinning, it continued until it created the center of our solar system, a star ( the sun )which is the hottest of them all and has such a big attraction that it attracts every planet in our solar system. The sun is the center which means every eight planets in our solar system are orbiting the sun, some are near which are the ones hotter and some are further away which are the ones colder.", "In our solar system there are 8 planets: Merkur, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune all 8 planets orbit the sun, the Middle point of our solar system. While every planet is orbiting the sun it is turning by itself as well this is how the night and the day is formed, for example on the earth  it is night in America, New York it is day in China, this is only possible because the earth just like every other planet turns itself and it is turned away from the sun from america's point but turned to the sun from china's point. Not only the Earth turns itself while orbiting the sun every planet turns itself while orbiting the sun. Planets can contain  different materials or gasses which means some planets that have the right elements can be lived on, the possibility of having another planet with live forms or just another planet that you are able to live on is extremely high since the universe has over 10,000,000,000,000,000,000,000,000 Planets. In our solar system there are eight planets however it can happen that planets are too small to be a planet and too big for being a moon, 2006 astronomers ( scientists that explore the universe ) made clear that a dwarf planet is a celestial body orbiting the sun meaning that it is not a moon.  What is an asteroid Belt? In our solar system there are different asteroid groups: the Greeks, trojans, Hildas and the ones that are nearer to the sun.", "Currently the universe is speeding up it’s expansion. Scientists say that the universe is expanding faster than the speed of light. The limit to human knowledge is that there is nothing faster than the speed of light. By studying stars in 1929 Edwin Hubble found out that the universe is expanding, at first scientists thought that it would expand slower until in 1990 they discovered that the universe's expansion was speeding up. The galaxies have been spreading further apart every day ( on average ), but so has the universe. Every star in the universe has a different wavelength. Astronomers can see if a star has moved further away from earth by checking the wavelength's frequency. The second closest star to earth is Proxima centauri b, the sun is the closest.  It is 4,24 light years away, this star hasn’t moved a while meaning it’s wavelength hasn’t changed. ","The reason why it’s measured in light years is simply because Astronomers can also determine how far back in time they are observing by measuring in light-years. Everything we see in the night sky has already happened because light takes time to reach us ( our eyes ). In other words, when you see something from a distance of one light-year, you see it precisely as it appeared one year ago. For example, the sun takes 8 minutes and 20 seconds to reach the earth because sunlight travels at the speed of light.","An example of a wavelength in sound would be an ambulance siren. When the sirens are close to you there is a higher frequency which means a shorter wavelength because then it appears louder and higher in pitch when it’s close to you, then once the sirens are further away from you there is a lower frequency and a longer wavelength."];
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
    aBtn.innerText = optionsA[selectedQ];
    bBtn.innerText = optionsB[selectedQ];
    cBtn.innerText = optionsC[selectedQ];
    dBtn.innerText = optionsD[selectedQ];
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
