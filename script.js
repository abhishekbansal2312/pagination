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
];

let studentlist = document.querySelector("#studentlist");

let studentsPerPage = 10;

let totalPages = Math.ceil(students.length / studentsPerPage);

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

for (let i = 0; i < totalPages; i++) {
  let button = document.createElement("button");
  button.classList.add("page");
  button.textContent = i + 1;
  button.addEventListener("click", () => {
    let start = i * studentsPerPage;
    let end = start + studentsPerPage;
    showStudents(start, end);
  });
  document.querySelector("#pagination-container").appendChild(button);
}

showStudents(0, studentsPerPage);
