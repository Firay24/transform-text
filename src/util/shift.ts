import keyboardLayout from "./keyboardLayout";

const shift = ({ input, n }: { input: string; n: number }) => {
  let output = "";

  // Mengubah input ke dalam bentuk positif jika negatif
  n = n % (keyboardLayout.length * keyboardLayout[0].length);
  if (n < 0) {
    n += keyboardLayout.length * keyboardLayout[0].length;
  }

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let rowIndex = -1;
    let colIndex = -1;

    // Mencari posisi karakter dalam layout keyboard
    for (let row = 0; row < keyboardLayout.length; row++) {
      const index = keyboardLayout[row].indexOf(char);
      if (index !== -1) {
        rowIndex = row;
        colIndex = index;
        break;
      }
    }

    // Menggeser posisi karakter sesuai dengan nilai n
    let newRow =
      (rowIndex + Math.floor((colIndex + n) / keyboardLayout[0].length)) %
      keyboardLayout.length;
    let newCol = (colIndex + n) % keyboardLayout[0].length;

    // Membuat karakter baru berdasarkan posisi yang telah digeser
    let shiftedChar = keyboardLayout[newRow][newCol];
    output += shiftedChar;
  }

  return output;
};

export default shift;
