const baseUrl = "https://twitter.com/intent/tweet?text=";
const missChar = "⬛";
const correctChar = "🟩";
const returnStr = "%0D%0A";
const urlGenerater = (attempts: number): string => {
  let str = "%23tfle" + returnStr;
  for (let i = 1; i < attempts; i++) {
    str += missChar + returnStr;
  }
  str += correctChar + returnStr;
  str += `I got the correct answer in ${attempts} guesses.`+returnStr;
  str += location.href;  
  return baseUrl + str;
};
export default urlGenerater;
