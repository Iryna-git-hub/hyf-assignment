const class07Students = ["Mark", "Elsa", "Meryem", "Ole", "Martin"];
function addStudentToClass(studentName) {
  // Check if the new student name is an empty string
  if (!studentName) {
    console.log("Enter a student's name");
    return;
  }
  // Check if the student is the Queen
  else if (studentName === "Mary Elizabeth") {
    class07Students.push(studentName);

    // Check if the number of students in the class is less than 6
  } else if (class07Students.length < 6) {
    // Check if the person is already added to the class
    if (class07Students.includes(studentName)) {
      console.log(`Student ${studentName} is already in the class`);
      return;
    } else {
      class07Students.push(studentName);
    }
    // If the number of students is 6 or greater
  } else {
    console.log("Cannot add more students to class 07");
    return;
  }

  return class07Students;
}

addStudentToClass();
console.log(class07Students);

function getNumberOfStudents(class07Students) {
  return class07Students.length;
}

getNumberOfStudents(class07Students);
console.log(class07Students.length);
