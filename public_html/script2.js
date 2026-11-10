/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const coursesArray = [
  {
    title: "Introductory Programming",
    description: "In this course, I began my programming journey. Although I had prior knowledge about coding, I had never ventured into the subject thoroughly. I was taught how to write functional codes that provided me with the desired output. Introductory Programming opened the doors to coding for me and so, learning Java in this course was highly informative as well as fun!"
  },
  {
    title: "Human Rights",
    description: "Choosing this course was quite an unproblematic decision for me. Law has been an interest of mine since high school, hence why this elective caught my eye. I learned a ton regarding human rights issues, laws, legislation, behind the scenes of the law-making process, etc."
  },
  {
    title: "Work Ethics",
    description: "This was yet another law course that expanded over the topics of real-world jobs and our responsibilities to our employers and fellow employees. The information I gained from this course will provide aid in the near present when I am presented with the need to showcase my ethical and moral duties to my employer."
  },
  {
    title: "Web Systems",
    description: "This course helped me expand on my knowledge about html, css, javascript, and bootstrap. Since taking this course, I have been able to create interactive webpages and websites and form a decent and fundamental foundation on the workings of web systems."
  },
  {
    title: "Calculus",
    description: "Math has always been a fun subject for me. Hence, taking calculus was exciting and solving the challenging problems proved to be a great mental acitvity. This course formed a dream of teaching calculus one day as I would love to share tips and tricks that helped me ace the course as well as to instill the love of math in others as it is in me."
  }
];

// Change courses upon reload
function getRandomCourses(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderCourses() {
  const courseContainer = document.getElementById("courseSlider");
  const courses = getRandomCourses(coursesArray, 5);

  courseContainer.innerHTML = ""; // Clear previous content

  courses.forEach(course => {
    const section = document.createElement("div");
    section.classList.add("section");
    section.style.minWidth = "300px"; // Ensures scroll works

    section.innerHTML = `
      <div class="coursestitle">${course.title}</div>
      <div class="coursestext"><p>${course.description}</p></div>
    `;

    courseContainer.appendChild(section);
  });
}

// Automatic scrolling function
function autoScrollCourses() {
  const container = document.getElementById("courseSlider");

  container.scrollBy({ left: 320, behavior: "smooth" });

  if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
    container.scrollTo({ left: 0, behavior: "smooth" });
  }
}

// arrows
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();

  setInterval(() => {
    autoScrollCourses();
  }, 4000);

  document.getElementById("prevBtn").addEventListener("click", () => {
    document.getElementById("courseSlider").scrollBy({ left: -320, behavior: "smooth" });
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    document.getElementById("courseSlider").scrollBy({ left: 320, behavior: "smooth" });
  });
});
