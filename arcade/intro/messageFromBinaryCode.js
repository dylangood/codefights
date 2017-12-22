function messageFromBinaryCode(code) {
  return code.replace(/([01]{8})/g, char => {
    return String.fromCharCode( parseInt(char, 2) );
  });
}
