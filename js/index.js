const footer = document.createElement("footer");
const footerContent = document.createElement("p");
footer.appendChild(footerContent);
const body = document.querySelector("body");
body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Sokolova ${thisYear}`;
footer.appendChild(copyright);



const username = "NataliaSokolova";

// // Fetch the list of repositories from the GitHub API
// fetch(`https://api.github.com/users/${username}/repos`)
//   .then(function (response) {
//     // Convert the response to text
//     return response.text();
//   })
//   .then(function (text) {
//     const repositories = JSON.parse(text);

//     displayRepositories(repositories);
//     console.log(repositories);
//   })
//   .catch(function (error) {
//     console.error("Error fetching repositories:", error);
//   });

// Fetch the list of repositories from the GitHub API
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');  // Throw an error if the response is not OK
    }
    return response.json();  // Parse the response as JSON
  })
  .then(repositories => {
    displayRepositories(repositories);  // Display the repositories
    console.log(repositories);  // Log the repositories to the console
  })
  .catch(error => {
    console.error('An error occurred:', error);  // Log any errors that occur during the fetch
  });



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

  const removeButton = document.createElement('button');
  removeButton.innerText = "Remove";
  removeButton.setAttribute('type', 'button');
  removeButton.addEventListener('click', function(){
  const entry = removeButton.parentNode;
  entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});






const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("div.projects-section");

function displayRepositories(repositories) {
  projectList.innerHTML = "";

  repositories.forEach((repo) => {
    const projectCard = document.createElement("li");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
       
        <li class="project-details">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description provided."}</p>
          <a href="" target="_blank" class="project-link">View Project</a>
        </li>
      `;

    projectList.appendChild(projectCard);
  });
}
