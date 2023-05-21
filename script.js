function firstChar(text) {
  // your code h
   for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      return s[i];
    }
  }
  return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
