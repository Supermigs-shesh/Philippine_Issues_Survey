// ======================
// PAGES
// ======================

const welcome = document.getElementById("welcome");
const survey = document.getElementById("survey");
const heartPage = document.getElementById("heartPage");
const lovePage = document.getElementById("lovePage");

function showPage(page){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    page.classList.add("active");
}

// ======================
// START SURVEY
// ======================

function startSurvey(){
    showPage(survey);
}

// ======================
// SUBMIT SURVEY
// ======================

function showHeart(){

    // Simple validation

    let answered = true;

    ["q1","q2","q3"].forEach(q=>{
        if(!document.querySelector(`input[name="${q}"]:checked`)){
            answered = false;
        }
    });

    if(!answered){
        alert("Please answer all questions first.");
        return;
    }

    showPage(heartPage);
}

// ======================
// HEART CLICK
// ======================

const heart = document.getElementById("heart");

heart.onclick = function(){

    showPage(lovePage);

    document.getElementById("bgMusic").play();

    startSlideshow();

    floatingHearts();

    typeMessage();

}

// ======================
// SLIDESHOW
// ======================

const pictures = [

"images/pic1.jpg",

"images/pic2.jpg",

"images/pic3.jpg"

];

let current = 0;

function startSlideshow(){

setInterval(function(){

current++;

if(current>=pictures.length){

current=0;

}

document.getElementById("slide").src=pictures[current];

},3000);

}

// ======================
// TYPEWRITER MESSAGE
// ======================

const message =

`Surprise! ❤️

This wasn't really just a survey.

I wanted to make you smile in a way you wouldn't expect.

Thank you for answering my little questionnaire.

Every conversation with you, every laugh, and every moment we've shared has become something special to me.

You make ordinary days feel happier.

So before this little surprise ends...

I have one last question for you. ❤️`;

let i = 0;

function typeMessage(){

const box = document.getElementById("loveText");

box.innerHTML="";

const typing = setInterval(function(){

box.innerHTML += message.charAt(i);

i++;

if(i>=message.length){

clearInterval(typing);

}

},35);

}

// ======================
// FLOATING HEARTS
// ======================

function floatingHearts(){

setInterval(function(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.getElementById("floatingHearts").appendChild(heart);

setTimeout(function(){

heart.remove();

},9000);

},400);

}

// ======================
// NO BUTTON
// ======================

const no=document.getElementById("noBtn");

no.addEventListener("mouseover",moveButton);

no.addEventListener("click",moveButton);

function moveButton(){

const x=Math.random()*250-125;

const y=Math.random()*250-125;

no.style.transform=`translate(${x}px,${y}px)`;

}

// ======================
// YES BUTTON
// ======================

document.getElementById("yesBtn").onclick=function(){

alert("❤️ YAY!! You just made me the happiest person! ❤️\n\nI can't wait for our date. 🌹");

createConfetti();

}

// ======================
// CONFETTI
// ======================

function createConfetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.innerHTML="🎉";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(15+Math.random()*20)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

},50);

setTimeout(()=>{

c.remove();

},4500);

}

}