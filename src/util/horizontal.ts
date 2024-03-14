import keyboardLayout from "./keyboardLayout";

const horizontalFlip = (inputString: string) => {
  let flippedString = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    let rowIndex = -1;
    let colIndex = -1;

    // Find the position of the character in the keyboard layout
    for (let row = 0; row < keyboardLayout.length; row++) {
      const index = keyboardLayout[row].indexOf(char);
      if (index !== -1) {
        rowIndex = row;
        colIndex = index;
        break;
      }
    }

    // If the character is found in the keyboard layout, flip it horizontally
    if (rowIndex !== -1 && colIndex !== -1) {
      let flippedChar =
        keyboardLayout[rowIndex][
          keyboardLayout[rowIndex].length - 1 - colIndex
        ];
      flippedString += flippedChar;
    } else {
      // If the character is not found, keep it as it is
      flippedString += char;
    }
  }

  return flippedString;
};

export default horizontalFlip;
