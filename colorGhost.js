// Create a JavaScript object named Ghost that includes a function named "color".
// When you call this function it should return a random color

const Ghost = {
  color: () => {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "black",
      "white",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  },
};

console.log(Ghost.color());
console.log(Ghost.color());
console.log(Ghost.color());
console.log(Ghost.color());
console.log(Ghost.color());
