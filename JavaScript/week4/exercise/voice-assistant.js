const artyom = new Artyom();

const user = { name: "", todos: [] };

function getReply(command) {
  if (!command && !command.trim()) return "Empty command is not a command" 
  const lower = command.toLowerCase();

  switch (true) {
    case lower.includes("hello my name is"):
      return greeting(lower);

    case lower.includes("what is my name"):
      return checkName();

    case lower.includes("add") && lower.includes("to my todo"):
      return addTodo(lower);

    case lower.includes("remove") && lower.includes("from my todo"):
      return removeTodo(lower);

    case lower.includes("what is on my todo"):
      return handleTodoList();

    case lower.includes("what day is it today"):
      return checkDate();

    case lower.includes("what is") && /[+\-*/]/.test(lower):
      return doMath(lower);

    case lower.includes("set a timer for"):
      return setTimer(lower);

    case lower.includes("tell me a joke"):
      return "Why do programmers prefer dark mode? Because light attracts bugs.";

    default:
      return "I did not understand that command";
  }
}

function greeting(text) {
  const parts = text.split("hello my name is");
  const name = parts[1].trim();

  if (name === user.name) {
    return `I already know that your name is ${user.name}.`;
  }
  user.name = name;
  return `Nice to meet you ${user.name}`;
}

function checkName() {
  if (!user.name) {
    return "I don't know your name yet.";
  }
  return `Your name is ${user.name}`;
}

function addTodo(text) {
  const firstPart = text.split("add");
  const secondPart = firstPart[1].split("to my todo");
  const task = secondPart[0].trim();

  user.todos.push(task);
  return `${task} added to your todo`;
}

function removeTodo(text) {
  const firstPart = text.split("remove");
  const secondPart = firstPart[1].split("from my todo");
  const task = secondPart[0].trim();

  const index = user.todos.indexOf(task);
  if (index > -1) {
    user.todos.splice(index, 1);
    return `Removed ${task} from your todo`;
  }
  return `${task} is not in your todo list`;
}

function handleTodoList() {
  if (user.todos.length === 0) {
    return "You have 0 user.todos.";
  }
  return `You have ${user.todos.length} user.todos - ${user.todos.join(
    " and "
  )}`;
}

function checkDate() {
  const date = new Date();
  const day = date.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}. of ${monthName} ${year}`;
}

function doMath(text) {
  const mathPart = text.replace("what is", "").trim();
  const parts = mathPart.split(" ");

  if (parts.length === 3) {
    const num1 = parseInt(parts[0]);
    const operator = parts[1];
    const num2 = parseInt(parts[2]);

    switch (operator) {
      case "+":
        return String(num1 + num2);
      case "-":
        return String(num1 - num2);
      case "*":
        return String(num1 * num2);
      case "/":
        return String(num1 / num2);
      default:
        return "I don't know that operator.";
    }
  }
  return "I can only do simple math like '3 + 3'";
}

function setTimer(text) {
  const parts = text.split(" ");
  const minutes = parseInt(parts[4]);

  if (!isNaN(minutes)) {
    const timeInMillis = minutes * 60 * 1000;

    setTimeout(() => {
      console.log("Timer done");
      alert("Timer done");
    }, timeInMillis);

    return `Timer set for ${minutes} minutes`;
  }
  return "I couldn't understand the time amount.";
}

function isgetReplyAvailable() {
  return typeof getReply !== "undefined" && typeof getReply === "function";
}

if (isgetReplyAvailable()) {
  let command;
  let timeoutId;
  let setIntervalTimer;

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.innerHTML = "Talk now 🙂";
    setIntervalTimer = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 2;
      if (randomNumber % 2 === 0) {
        button.innerHTML = "Talk now 😮";
      } else {
        button.innerHTML = "Talk now 🙂";
      }
    }, 100);
    clearTimeout(timeoutId);

    command = "";
    timeoutId = setTimeout(() => {
      clearInterval(setIntervalTimer);
      const response = getReply(command);

      artyom.say(response);

      button.innerHTML = "Give a new command";
    }, 5000);
  });

  var UserDictation = artyom.newDictation({
    continuous: false, // Enable continuous if HTTPS connection
    onResult: function (text) {
      // Do something with the text
      if (text.length > command.length) {
        command = text;
        console.log(command);
      }
    },
    onStart: function () {
      console.log("Dictations started by the users");
    },
    onEnd: function () {
      console.log("Dictation stopped by the user");
    },
  });

  UserDictation.start();
} else {
  alert("add the getReply function!");
}
