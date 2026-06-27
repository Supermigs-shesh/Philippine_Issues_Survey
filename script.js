// ======================
// PAGES
// ======================

const welcome = document.getElementById("welcome");
const survey = document.getElementById("survey");
const survey2 = document.getElementById("survey2");
const heartPage = document.getElementById("heartPage");
const lovePage = document.getElementById("lovePage");

function showPage(page){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    page.classList.add("active");
}

function nextSurvey(){
    showPage(document.getElementById("survey2"));
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

    ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"].forEach(q=>{
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

document.getElementById("yesBtn").onclick = function () {

    createConfetti();

    const popup = document.createElement("div");

    popup.innerHTML = `
    <div style="
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:90%;
        max-width:420px;
        background:white;
        border-radius:25px;
        padding:25px;
        text-align:center;
        box-shadow:0 10px 30px rgba(0,0,0,.3);
        z-index:9999;
    ">

        <h1 style="font-size:55px;">❤️</h1>

        <h2 style="color:#ff2d75;">
            You said YES!
        </h2>

        <p style="
            margin-top:15px;
            line-height:1.8;
            font-size:17px;
        ">
            Thank you for saying <b>YES</b>. ❤️
            <br><br>
            You just made me the happiest person.
            <br><br>
            I can't wait to spend our first date with you and create many wonderful memories together.
            🌹
        </p>

        <button id="closePopup"
        style="
        margin-top:20px;
        background:#ff2d75;
        color:white;
        border:none;
        padding:12px 30px;
        border-radius:30px;
        font-size:16px;
        cursor:pointer;
        ">
        ❤️ Continue
        </button>

    </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("closePopup").onclick=function(){

        popup.remove();

    };

};

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