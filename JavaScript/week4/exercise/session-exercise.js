// Fibonacci Sequence
function fib(position) {
  if (position <= 0) {
    console.error("Not allowed");
    return NaN;
  }

  const values = [0, 1];

  for (let i = 2; i < position; i++) {
    const result = values[i - 1] + values[i - 2];
    values.push(result);
  }

  return values[position - 1];
}

const fibo = fib(3);
console.log(fibo);

// Fizz buzz
function fizzBuzz(multiple1, multiple2) {
  for (let i = 1; i <= 100; i++) {
    const isFizz = i % multiple1 == 0;
    const isBuzz = i % multiple2 == 0;
    let result = "";

    if (isFizz) {
      result += "Fizz";
    }
    if (isBuzz) {
      result += "Buzz";
    }
    if (result) {
      console.log(result);
    } else {
      console.log(i);
    }
  }
}

const multiple1 = 3;
const multiple2 = 5;

fizzBuzz(multiple1, multiple2);

// Build a sentiment analyser

// Credit card number formatter

// Character frequencies
function getCharacterFrequencies(word) {
  const output = {
    characters: [],
    length: word.length
  }

  // 3. Iterate through the characters in the given word
  for (let i = 0; i < word.length; i++) {
    // 4. For each character, put it in the output.characters array with 1 occurence
    const character = word[i];

    const result = {
      character: character,
      count: 1
    }
    output.characters.push(result);
  }

  // Iterate through the characters in the given word
  for (let j = 0; j < output.characters.length; j++) {
    const letter = output.characters[j].character;

    // Iterate through the following characters
    for (let k = j + 1; k < output.characters.length; k++) { // !! This changed
      // Remove duplicates and increase the amount of occurences.
      if (output.characters[k].character === letter) {
        output.characters[j].count += 1;
        output.characters.splice(k, 1);
        // Go one step backward to avoid jumping over a letter
        k--; // !!! This is new
      }
    }
  }

  return output;
}

console.log("happy", getCharacterFrequencies("happy"));

console.log("mississippi", getCharacterFrequencies("mississippi"));

console.log("smørrebrød", getCharacterFrequencies("smørrebrød"));

console.log("individual", getCharacterFrequencies("individual"));


// Palindromic substring

// Credit card info

// Tic Tac Toe

// Conway's game of life
