// - จงเขียนฟังก์ชัน extractCurrencyValue(string, rate) ในการแปลงค่า string ที่อยู่ในรูปแบบสกุลเงินดอลลาร์ ให้อยู่ในรูปแบบสกุลเงินบาท
// - rate คือ อัตราในการแปลงดอลลาร์ให้เป็นบาท
// - ตัวอย่าง ผลลัพธ์ของฟังก์ชัน

function extractCurrencyValue(string, rate) {
  const money = +string.replace("$", "").replaceAll(" ", "");
  return `THB${money * rate}`;
}

console.log(extractCurrencyValue("$120", 30)); // THB3600
