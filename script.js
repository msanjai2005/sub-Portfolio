 
 const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6, // 60% visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      navItem.classList.add("active");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

    //---------------------side-menu-bar----------------->
    
function sidebarShow() {
    document.querySelector(".sidebar").classList.add("open");
}
function sidebarClose() {
    document.querySelector(".sidebar").classList.remove("open");
}
    //------------------ Dynamic Role Typing------------->

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
let pro_skill = ["Python", "Java", "JavaScript"];
let web_skill = ["HTML 5", "CSS 3", "JavaScript", "React JS", "Tailwind css", "MySQL"];
let images1 = ["images/python.png", "images/java.png", "images/javascript.png"];
let images2 = ["images/html.png", "images/css.png", "images/javascript.png", "images/react.png", "images/tailwind.png", "images/mysql.png"];
let images3 = ["images/git.png", "images/github.png", "images/vscode.png"];
let tools = ["Git", "GitHub", "VS Code"];

let pro = document.querySelector(".programming");
let web = document.querySelector(".web");
let tool = document.querySelector(".tools");

// Programming Skills
pro_skill.forEach((skill, i) => {
  pro.innerHTML += `
    <div>
      <img src="${images1[i]}" alt="${skill}">
      <li class='sk'>${skill}</li>
    </div>`;
});

// Web Skills
web_skill.forEach((skill, i) => {
  web.innerHTML += `
    <div>
      <img src="${images2[i]}" alt="${skill}">
      <li class='sk'>${skill}</li>
    </div>`;
});

// Tools
tools.forEach((skill, i) => {
  tool.innerHTML += `
    <div>
      <img src="${images3[i]}" alt="${skill}">
      <li class='sk'>${skill}</li>
    </div>`;
});

// ------------------project-page--------------->

const projects = [
      {
        image:"images/project/img1.jpg",
        title: "Restuarant Web APP",
        description: "A responsive restaurant website with menu display and table reservation features, built for a smooth user experience.",
        techstack:['html', 'css', 'javaScript', 'git & github'],
        gitLink: "https://github.com/msanjai2005/Restuarant"
      },
      {
        image:"images/project/img2.jpg",
        title: "Weather Web App",
        description: "A responsive weather app built with React and Tailwind CSS that displays real-time weather data using an API.",
        techstack: ['React', 'Tailwind CSS', 'API', 'Git & GitHub'],
        gitLink: "https://github.com/msanjai2005/WeatherApp_R",
        Demo:""
      },
      {
        image:"images/project/img3.jpg",
        title: "Habit Tracker App",
        description: "A responsive habit tracker built with React and Tailwind CSS, allowing users to manage and track their daily habits with local data storage.",
        techstack: ['React', 'Tailwind CSS', 'JavaScript', 'Git & GitHub'],
        gitLink: "https://github.com/msanjai2005/Habit-Tracker",
        Demo:""
      },
      {
        image:"images/project/img4.jpg",
        title: "Recipe App",
        description: "A simple and responsive app to browse and view recipes with ingredients and instructions. Built for easy meal planning and inspiration.",
        techstack:['html', 'css', 'javaScript','Git & GitHub'],
        gitLink:"https://github.com/msanjai2005/RecipeApp",
        Demo:""
      },
      {
        image:"images/project/img5.jpg",
        title: "To-Do-List App",
        description: "A lightweight app to manage daily tasks with add, delete, and mark-complete features. Designed for productivity and ease of use.",
        techstack:['React', 'Tailwind CSS', 'Git & GitHub'],
        gitLink:"https://github.com/msanjai2005/",
        Demo:""
      },
      {
        image:"images/project/img6.jpg",
        title: "Calculator App",
        description: "A basic calculator for performing arithmetic operations. Built with a clean interface and real-time input handling.",
        techstack:["html", 'css', 'javaScript','Git & GitHub'],
        gitLink:"https://github.com/msanjai2005/SimpleCalculator",
        Demo:""
      }
    ];

    const container = document.getElementById("projects-container");

    const projectHTML = projects.map(project => `
      <div class="proFull">
        <img class="projectImage" src="${project.image}" alt="image">
        <div class="project">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <h4 class="techstack">Tech Stack :</h4>
          <div class="tech">${project.techstack.map(tech => `<div>${tech}</div>`).join(' ')}</div>
          <div class="links">
            <span><a href="${project.gitLink}" target=_blank>Github <i class="fa-solid fa-arrow-right"></i></a></span>
            <span><a href="${project.Demo}" target=_blank>Demo <i class="fa-solid fa-arrow-right"></i></a></span>
          </div>
        </div>
      </div>
    `).join("");

    container.innerHTML = projectHTML;

// ---------------------Contact-------------------------->

document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_8nkkk6j", "template_yepo30y", this)
        .then(() => {
          alert("Message sent successfully!");
          this.reset(); // Clear form
        }, (err) => {
          alert("Failed to send message. Error: " + JSON.stringify(err));
      });
});