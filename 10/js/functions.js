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

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
имяФункции('08:00', '17:30', '14:00', 90); // true
имяФункции('8:0', '10:0', '8:0', 120);     // true
имяФункции('08:00', '14:30', '14:00', 90); // false
имяФункции('14:00', '17:30', '08:0', 90);  // false
имяФункции('8:00', '17:30', '08:00', 900); // false
