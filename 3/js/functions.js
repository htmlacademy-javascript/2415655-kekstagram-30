const lengthLine = (line, number) => line.length <= number;

console.log(lengthLine('linelessthannumber', 20)); 
console.log(lengthLine('linemorethannumber', 10)); 

function pallindromTrue(text) {
  let upperCase = text.toLowerCase();
  for(let i=0; i<=upperCase.length/2; i++){
    if(upperCase[i] !== upperCase[upperCase.length-1-i]){
      return true
    }
  } return false
}
console.log(pallindromTrue('шалаш'))
