

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



const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;
  
  console.log('Name:', userName);
  console.log('Email:', userEmail);
  console.log('Message:', userMessage);
  
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href = "mailto:${userEmail}" > ${userName}  </a>
  <span>${userMessage}</span>`;
  messageList.appendChild(newMessage);
  messageForm.reset();
});


