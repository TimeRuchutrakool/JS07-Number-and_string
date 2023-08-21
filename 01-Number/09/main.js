// จงเขียนฟังก์ชันในการหาความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้า;

function senTaYeangMoom(w, h) {
  return Math.pow(w ** 2 + h ** 2, 1 / 2);
}

console.log(senTaYeangMoom(3, 4));
