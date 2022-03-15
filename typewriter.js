const sentence = "hello there from lighthouse labs";

setTimeout(() => process.stdout.write("\n"), sentence.length * 50);
for (let i = 0; i < sentence.length - 1; i++) {
  setTimeout(() => process.stdout.write(sentence[i]), i * 50);
}
process.stdout.write("\n");
