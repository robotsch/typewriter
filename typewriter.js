const sentence = "hello there from lighthouse labs";

// Print after full delay of printing sentence has finished
setTimeout(() => process.stdout.write("\n"), sentence.length * 50);
for (let i = 0; i < sentence.length - 1; i++) {
  // Print each character with a delay calculated by the loop
  setTimeout(() => process.stdout.write(sentence[i]), i * 50);
}

