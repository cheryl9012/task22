// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let programming_language: string[] = [ "Html", "Css", "Javascript", "Typecsript", "Python"]


// intentional error: Array are zero-indexed, so index 3 is out of bonds
console.log(programming_language[5]);

// correct the error
console.log(programming_language[4]);