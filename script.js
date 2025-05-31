 
 
    //side-menu-bar
    
function sidebarShow() {
    document.querySelector(".sidebar").classList.add("open");
}
function sidebarClose() {
    document.querySelector(".sidebar").classList.remove("open");
}
    // Dynamic Role Typing

const roles = [
    "Data Scientist",
    "Front End Developer",
    "Problem Solver",
    "Fresher"
];
let roleIndex = 0, charIndex = 0, typing = true;
const dynamicRole = document.getElementById('dynamic-role');
function typeRole() {
    if (typing) {
        if (charIndex < roles[roleIndex].length) {
            dynamicRole.textContent += roles[roleIndex][charIndex++];
            setTimeout(typeRole, 80);
        } else {
            typing = false;
            setTimeout(typeRole, 1200);
        }
    } else {
        if (charIndex > 0) {
            dynamicRole.textContent = roles[roleIndex].substring(0, --charIndex);
            setTimeout(typeRole, 30);
        } else {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 200);
        }
    }
}
typeRole();

// ------------Skill-page----------->
let i=0;
let j=0;
const Topic_skill=[
    "Programming Languages & Tools",
    "Web Development"
];
let pro_skill=["Python","Java","Git","GitHub","VS Code"];
let web_skill=["HTML 5","CSS 3","JavaScript","React JS","MySQL"];
const skills=[pro_skill,web_skill];
let pro= document.querySelector(".programming");
let web= document.querySelector(".web");
const arr=[pro,web];

for (i = 0; i<2; i++){
    arr[i].innerHTML+=`
    <div class="ToS">
        <h2>${Topic_skill[i]}</h2>
    </div>
`;
    for(j=0; j<5; j++){
        arr[i].innerHTML+=`
    <div class="sk">
        <h3>${skills[i][j]}</h3>
        <p>intermediate</p>
    </div>
`;
    }
}

// ------------------project-page--------------->

const popup=document.querySelector('.outer_layer');
function showDetails(e){
    popup.style.display="flex"; 
    popup.innerHTML=`<div class="inner_details">
                <h3>Restuarant Web App</h3> <button onClick="closePop()" class="close"><img src="images/svg2.svg" alt="" ></img></button> <br><br>
                <p>1. Browse and view multiple recipes with images <br><br>

                   2. Display of ingredients and step-by-step instructions <br><br>

                   3. Responsive design for mobile and desktop <br><br>

                   4. Simple and user-friendly interface <br>
                </p>
                <button class="btn">Explore</button>
            </div>`
}

function closePop(){
    popup.style.display="none";
}

