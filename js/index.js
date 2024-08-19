

const footer = document.createElement('footer');
const footerContent = document.createElement('p');
footer.appendChild(footerContent);
const body = document.querySelector('body');
body.appendChild(footer);
const today = new Date(); 
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Sokolova ${thisYear}`;
footer.appendChild(copyright);




const skills = ["JavaScript", "HTML", "CSS", "WordPress", "GitHub", "Figma", "SQL", "Digital Marketing"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for(let i =0 ; i < skills.length; i++){
    let skill =  document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}