// Takes first name and surname and return fullname
function getFullName(firstName, lastName, useFormalName = false) {
  let fullName;
  if (!firstName || !lastName) {
    return "Please enter your first and last name.";
  } else if (useFormalName) {
    let formalName = "Lord";
    fullName = `${formalName} ${firstName} ${lastName}`;
  } else {
    fullName = `${firstName} ${lastName}`;
  }

  return fullName;
}

// Assigning the variables to calling the getFullName function
const fullName1 = getFullName("Benjamin", "Hughes", true);
console.log(fullName1);

const fullName2 = getFullName("Mark", "Twain", false);
console.log(fullName2);

const fullName3 = getFullName();
console.log(fullName3);

// Formal fullname
/*
To allow changing the formal name, I would add a dropdown menu
that lets the user select a formal name (Mr, Mrs) and then insert it 
into the final code.
*/
