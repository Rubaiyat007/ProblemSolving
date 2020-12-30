const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const triangleTypes = {
  Equilateral: "equilateral",
  Isosceles: "isosceles",
  Scalene: "scalene",
};

const checkTriangle = (first, second, third) => {
  first = parseInt(first);
  second = parseInt(second);
  third = parseInt(third);

  //checking if triangle has equal sides
  isItEquilateral = first === second && second === third;

  //checking if triangle has two equal sides
  isItIsosceles = first === second || second === third || third === first;

  //checking if triangle is no equal sides
  isItscalene = first !== second && second !== third && third !== first;

  //checking value must be getter than 0;

  if (first <= 0 || second <= 0 || third <= 0) {
    return "Input is invalid";
  }

  if (isItEquilateral) {
    return triangleTypes.Equilateral;
  } else if (isItIsosceles) {
    return triangleTypes.Isosceles;
  } else if (isItscalene) {
    return triangleTypes.Scalene;
  }
};

rl.question("Enter your first side of the triangle  \n", (iOne) => {
  rl.question("Enter your second side of the triangle  \n", (iTwo) => {
    rl.question("Enter your third side of the triangle  \n", (iThree) => {
      if (isNaN(iOne) || isNaN(iTwo) || isNaN(iThree)) {
        console.log("You have provided wrong input. please enter number only");
        rl.close();
        return;
      }
      console.log(`Your triangle is ${checkTriangle(iOne, iTwo, iThree)}`);
      rl.close();
    });
  });
});

module.exports = checkTriangle;
