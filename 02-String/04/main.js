// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

function checkRatedWord(str) {
  const word = str.toLowerCase();
  return word === "xxx" || word === "sex" || word === "porn";
}

console.log(checkRatedWord("SeX"));
console.log(checkRatedWord("Apple"));
console.log(checkRatedWord("pOrn"));
console.log(checkRatedWord("Banana"));
