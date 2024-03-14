import keyboardLayout from "./keyboardLayout";

const shift = ({ input, n }: { input: string; n: number }) => {
  let output = "";

  // Converts the input into positive form if it is negative
  n = n % (keyboardLayout.length * keyboardLayout[0].length);
  if (n < 0) {
    n += keyboardLayout.length * keyboardLayout[0].length;
  }

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let rowIndex = -1;
    let colIndex = -1;

    // Finds the position of a character in the keyboard layout
    for (let row = 0; row < keyboardLayout.length; row++) {
      const index = keyboardLayout[row].indexOf(char);
      if (index !== -1) {
        rowIndex = row;
        colIndex = index;
        break;
      }
    }

    // Shifts the character position according to the n value
    let newRow =
      (rowIndex + Math.floor((colIndex + n) / keyboardLayout[0].length)) %
      keyboardLayout.length;
    let newCol = (colIndex + n) % keyboardLayout[0].length;

    // Create a new character based on the position that has been shifted
    let shiftedChar = keyboardLayout[newRow][newCol];
    output += shiftedChar;
  }

  return output;
};

export default shift;
