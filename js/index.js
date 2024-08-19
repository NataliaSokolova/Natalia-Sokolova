
const newFooterEl = document.createElement('p');
const textFooter = document.createTextNode('Phone: (425) 214-5050');
newFooterEl.appendChild(textFooter);
document.querySelector(".footer-section").appendChild(newFooterEl);



const today = new Date(); 
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Sokolova ${thisYear}`;
document.getElementById("connect").appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "WordPress", "GitHub", "Figma", "SQL", "Digital Marketing"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for(let i =0 ; i < skills.length; i++){
    let skill =  document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}