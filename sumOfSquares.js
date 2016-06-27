function sumOfSquares(theNumber)
{
    // If the number is less than 0, reject it.
    if (theNumber <= 0) {
        return -1;
    }
    // If not, add the square root of that sucker, baby!
    else {
      console.log('square root of ', theNumber, ' = ', Math.sqrt(theNumber));
        return (Math.sqrt(theNumber) + sumOfSquares(theNumber - 1));
    }
}

console.log('sumOfSquares(5): ', sumOfSquares(5));