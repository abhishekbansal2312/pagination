const students = [
  "Abbas Akbar",
  "Abhinav sharma",
  "Abhishek Bansal",
  "Abhishek Srivastava",
  "Aditya Kumar Singh",
  "Ali Sher Khan",
  "Ananya Lamba",
  "Anjali Debnath",
  "Ankit Saini",
  "Anoushka gautam",
  "Ansh Kumar Gupta",
  "Anshika Bhatnagar",
  "Anuj Chauhan",
  "Anurag Saini",
  "Arin Saxena",
  "Ashish Ansh",
  "Avni saxena",
  "Divyanshi Vishnoi",
  "Inayat Ullah Khan",
  "Kratika Agarwal",
  "Manish Kumar",
  "Manit rastogi",
  "Nikita Rathore",
  "Prakhar Sharma",
  "Prakriti Gupta",
  "Pranjal Agarwal",
  "Prince Saxena",
  "Sakshi Chauhan",
  "Samarth Rastogi",
  "Samra Rubab",
  "Sandeep Kumar",
  "Sarthak rastogi",
  "Shashank johri",
  "Shashwat Tewari",
  "Shivam Prajapati",
  "Shivi Agarwal",
  "Shrey Singhal",
  "Sohil Ansari",
  "Tahir Ali",
  "Tahzeeb Malik",
  "Tanu Saini",
  "Vishal kumar",
  "Abbas Akbar",
  "Abhinav sharma",
  "Abhishek Bansal",
  "Abhishek Srivastava",
  "Aditya Kumar Singh",
  "Ali Sher Khan",
  "Ananya Lamba",
  "Anjali Debnath",
  "Ankit Saini",
  "Anoushka gautam",
  "Ansh Kumar Gupta",
  "Anshika Bhatnagar",
  "Anuj Chauhan",
  "Anurag Saini",
  "Arin Saxena",
  "Ashish Ansh",
  "Avni saxena",
  "Divyanshi Vishnoi",
  "Inayat Ullah Khan",
  "Kratika Agarwal",
  "Manish Kumar",
  "Manit rastogi",
  "Nikita Rathore",
  "Prakhar Sharma",
  "Prakriti Gupta",
  "Pranjal Agarwal",
  "Prince Saxena",
  "Sakshi Chauhan",
  "Samarth Rastogi",
  "Samra Rubab",
  "Sandeep Kumar",
  "Sarthak rastogi",
  "Shashank johri",
  "Shashwat Tewari",
  "Shivam Prajapati",
  "Shivi Agarwal",
  "Shrey Singhal",
  "Sohil Ansari",
  "Tahir Ali",
  "Tahzeeb Malik",
  "Tanu Saini",
  "Vishal kumar",
  "Abbas Akbar",
  "Abhinav sharma",
  "Abhishek Bansal",
  "Abhishek Srivastava",
  "Aditya Kumar Singh",
  "Ali Sher Khan",
  "Ananya Lamba",
  "Anjali Debnath",
  "Ankit Saini",
  "Anoushka gautam",
  "Ansh Kumar Gupta",
  "Anshika Bhatnagar",
  "Anuj Chauhan",
  "Anurag Saini",
  "Arin Saxena",
  "Ashish Ansh",
  "Avni saxena",
  "Divyanshi Vishnoi",
  "Inayat Ullah Khan",
  "Kratika Agarwal",
  "Manish Kumar",
  "Manit rastogi",
  "Nikita Rathore",
  "Prakhar Sharma",
  "Prakriti Gupta",
  "Pranjal Agarwal",
  "Prince Saxena",
  "Sakshi Chauhan",
  "Samarth Rastogi",
  "Samra Rubab",
  "Sandeep Kumar",
  "Sarthak rastogi",
  "Shashank johri",
  "Shashwat Tewari",
  "Shivam Prajapati",
  "Shivi Agarwal",
  "Shrey Singhal",
  "Sohil Ansari",
  "Tahir Ali",
  "Tahzeeb Malik",
  "Tanu Saini",
  "Vishal kumar",
  "Abbas Akbar",
  "Abhinav sharma",
  "Abhishek Bansal",
  "Abhishek Srivastava",
  "Aditya Kumar Singh",
  "Ali Sher Khan",
  "Ananya Lamba",
  "Anjali Debnath",
  "Ankit Saini",
  "Anoushka gautam",
  "Ansh Kumar Gupta",
  "Anshika Bhatnagar",
  "Anuj Chauhan",
  "Anurag Saini",
  "Arin Saxena",
  "Ashish Ansh",
  "Avni saxena",
  "Divyanshi Vishnoi",
  "Inayat Ullah Khan",
  "Kratika Agarwal",
  "Manish Kumar",
  "Manit rastogi",
  "Nikita Rathore",
  "Prakhar Sharma",
  "Prakriti Gupta",
  "Pranjal Agarwal",
  "Prince Saxena",
  "Sakshi Chauhan",
  "Samarth Rastogi",
  "Samra Rubab",
  "Sandeep Kumar",
  "Sarthak rastogi",
  "Shashank johri",
  "Shashwat Tewari",
  "Shivam Prajapati",
  "Shivi Agarwal",
  "Shrey Singhal",
  "Sohil Ansari",
  "Tahir Ali",
  "Tahzeeb Malik",
  "Tanu Saini",
  "Vishal kumar",
];

let studentlist = document.querySelector("#studentlist");
let paginationContainer = document.querySelector("#pagination-container");
let studentsPerPage = 10;
let totalPages = Math.ceil(students.length / studentsPerPage);
let active = 0;

const showStudents = (start, end) => {
  studentlist.innerHTML = "";
  for (let i = start; i < end; i++) {
    if (students[i]) {
      let studentItem = document.createElement("li");
      studentItem.textContent = students[i];
      studentlist.appendChild(studentItem);
    }
  }
};

const showPagination = () => {
  paginationContainer.innerHTML = "";
  if (active > 0) {
    let prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.addEventListener("click", () => {
      active--;
      updatePagination();
    });
    paginationContainer.appendChild(prevButton);
  }

  for (let i = 0; i < totalPages; i++) {
    if (
      i === 0 ||
      i === active ||
      i === active - 1 ||
      i === active + 1 ||
      i === totalPages - 1
    ) {
      let button = document.createElement("button");
      button.classList.add("page");
      button.textContent = i + 1;
      if (i === active) {
        button.classList.add("active");
      }
      button.addEventListener("click", () => {
        active = i;
        updatePagination();
      });
      paginationContainer.appendChild(button);
    }
  }

  if (active < totalPages - 1) {
    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
      active++;
      updatePagination();
    });
    paginationContainer.appendChild(nextButton);
  }
};

// Update the students and pagination based on active page
const updatePagination = () => {
  let start = active * studentsPerPage;
  let end = start + studentsPerPage;
  showStudents(start, end);
  showPagination();
};

updatePagination();
