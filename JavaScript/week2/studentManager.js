const class07Students = ["Mark", "Elsa", "Meryem", "Ole", "Martin"];
function addStudentToClass(studentName) {
  // Check if the new student name is an empty string
  if (studentName === undefined) {
    console.log("Enter a student's name");
    return 0;
  }
  // Check if the student is the Queen
  else if (studentName === "Mary Elizabeth") {
    class07Students.push(studentName);
    return 1;
    // Check if the number of students in the class is less than 6
  } else if (class07Students.length < 6) {
    // Check if the person is already added to the class

    if (class07Students.includes(studentName)) {
      console.log(`Student ${studentName} is already in the class`);
      return 0;
    } else {
      class07Students.push(studentName);
      
    }
  } else {
    console.log("Cannot add more students to class 07");
    return 0;
  }
}

addStudentToClass();
console.log(class07Students);

function getNumberOfStudents(class07Students) {
  console.log(class07Students.length);
}

getNumberOfStudents(class07Students);
