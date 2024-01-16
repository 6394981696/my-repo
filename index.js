var typed = new Typed('#element', {
    strings: ['Software Engineer', 'Full Stack Developer'],
    typeSpeed: 50,
  });

//   window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// // Sample skills data
// const skillsData = [
//   { name: 'HTML', image: 'images/html.png' },
//   { name: 'CSS', image: 'images/css.png' },
//   { name: 'JavaScript', image: 'images/javascript.png' },
//   // Add more skills as needed
// ];

// // Function to create and append a skill element to the skills section
// function createSkillElement(skill) {
//   const skillsSection = document.getElementById('skills');

//   const skillElement = document.createElement('div');
//   skillElement.classList.add('skill');

//   const imgElement = document.createElement('img');
//   imgElement.src = skill.image;
//   imgElement.alt = skill.name;

//   const pElement = document.createElement('p');
//   pElement.textContent = skill.name;

//   skillElement.appendChild(imgElement);
//   skillElement.appendChild(pElement);

//   skillsSection.appendChild(skillElement);
// }

// // Dynamically add skills to the skills section
// window.addEventListener('load', function () {
//   skillsData.forEach(createSkillElement);
// });




// // Sample projects data
// const projectsData = [
//   {
//       title: 'Project 1',
//       description: 'Best Buy is a multinational retailer specializing in consumer electronics, appliances, and entertainment products.',
//       image: 'project1.jpg',
//       link: 'https://github.com/6394981696/BEST_BUY-CLONE'
//   },
//   {
//       title: 'Project 2',
//       description: 'Best Buy Project is an electronic website. In this website, electronics products are added.',
//       image: 'project2.jpg',
//       link: 'https://github.com/6394981696/FavCart'
//   },
//   // Add more projects as needed
// ];

// // Function to create and append a project element to the projects section
// function createProjectElement(project) {
//   const projectsSection = document.getElementById('projects');

//   const projectElement = document.createElement('div');
//   projectElement.classList.add('project');

//   const imgElement = document.createElement('img');
//   imgElement.src = project.image;
//   imgElement.alt = project.title;

//   const titleElement = document.createElement('h3');
//   titleElement.textContent = project.title;

//   const descriptionElement = document.createElement('p');
//   descriptionElement.textContent = project.description;

//   const linkElement = document.createElement('a');
//   linkElement.href = project.link;
//   linkElement.textContent = 'View Project';

//   projectElement.appendChild(imgElement);
//   projectElement.appendChild(titleElement);
//   projectElement.appendChild(descriptionElement);
//   projectElement.appendChild(linkElement);

//   projectsSection.appendChild(projectElement);
// }

// // Dynamically add projects to the projects section
// window.addEventListener('load', function () {
//   projectsData.forEach(createProjectElement);
// });

// var sidemenu = document.getElementById("sidemenu");
// function openmenu(){
//   sidemenu.style.right = "0";
// }

// function closemenu(){
//   sidemenu.style.right = "-200px";
// }

// var sidemenu = document.getElementById("sidemenu");

// function openmenu() {
//   sidemenu.style.right = "0";
// }

// function closemenu() {
//   sidemenu.style.right = "-200px";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".fa-times").addEventListener("click", closemenu);
// });


function submitForm() {
  // Get form data
  var formData = {
      name: document.getElementsByName("Name")[0].value,
      mobile: document.getElementsByName("mobile")[0].value,
      email: document.getElementsByName("email")[0].value,
      password: document.getElementsByName("password")[0].value,
      confirmPassword: document.getElementsByName("confirmPassword")[0].value,
      address: document.getElementsByName("address")[0].value,
      message: document.getElementsByName("message")[0].value
  };

  // Add your form validation logic here
  if (validateForm(formData)) {
      // Perform actions like sending data to a server or displaying a success message
      alert("Form submitted successfully!");
      // Reset the form
      document.getElementById("Form").reset();
  }
}

function validateForm(formData) {
  // Add your validation logic here
  // Return true if the form is valid, otherwise return false

  // Example: Check if passwords match
  if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return false;
  }

  // Add more validation as needed

  return true; // Form is valid
}




var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".fa-times").addEventListener("click", closemenu);
});

var sidemenu = document.getElementById("sidemenu");

