function firstWord(s) {
  // your code here
	  let x = s.trim().split(" ")
  return x[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
