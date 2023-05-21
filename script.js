function firstChar(text) {
  // your code h
  for (let char of string) {
    if (char !== ' ') {
      return char;
    }
  }
  return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
