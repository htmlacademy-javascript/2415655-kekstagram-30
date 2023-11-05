const lengthLine = (line, number) => line.length <= number;

lengthLine('linelessthannumber', 20);
lengthLine('linemorethannumber', 10);

function pallindromTrue(text) {
  const upperCase = text.toLowerCase();
  for(let i = 0; i <= upperCase.length / 2; i++){
    if(upperCase[i] !== upperCase[upperCase.length - 1 - i]){
      return true;
    }
  } return false;
}
pallindromTrue('шалаш');
