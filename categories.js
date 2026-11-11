// ໝວດສິນຄ້າມາດຕະຖານຂອງ LLUX — ໃຊ້ຮ່ວມກັນທັງໜ້າຮ້ານ (index.html) ແລະ ໜ້າລູກຄ້າ (products.html)
// ເພີ່ມ / ແກ້ / ລຶບ ໝວດຢູ່ບ່ອນນີ້ບ່ອນດຽວ ທັງ 2 ໜ້າຈະປ່ຽນຕາມອັດຕະໂນມັດ
const LLUX_CATEGORIES = [
  { name: 'ທົ່ວໄປ', icon: '🛒', units: ['ອັນ', 'ກັບ', 'ແພັກ', 'ເຄື່ອງ', 'ຊຸດ', 'ແກັດ', 'ຖົ່ງ', 'ແຜນ', 'ເປົາ', 'ໂຕນ'] },
  { name: 'ອາຫານພ້ອມກິນ', icon: '🍜' },          // ອາຫານທີ່ຮ້ານປຸງສຸກພ້ອມກິນແລ້ວເທົ່ານັ້ນ (ໃຊ້ຂະໜາດແທນຫົວໜ່ວຍ)
  { name: 'ແຟຊັ່ນ', icon: '👕' },
  { name: 'ເຄື່ອງສຳອາງ', icon: '💄' },
  { name: 'ເຄື່ອງໃຊ້ໄຟຟ້າ', icon: '🔌', units: ['ອັນ', 'ກັບ', 'ແພັກ', 'ເຄື່ອງ', 'ຊຸດ'] },
  { name: 'ເຄື່ອງໃຊ້ໃນຄົວເຮືອນ', icon: '🏠', units: ['ອັນ', 'ແພັກ', 'ແກັດ'] },
  { name: 'ເຄື່ອງໃຊ້ຫ້ອງການ', icon: '🗂️', units: ['ອັນ', 'ແພັກ', 'ແກັດ', 'ຖົ່ງ'] },
  { name: 'ອຸປະກອນການຮຽນ', icon: '✏️' },
  { name: 'ວັດສະດຸກໍ່ສ້າງ', icon: '🧱', units: ['ອັນ', 'ແພັກ', 'ແກັດ', 'ແຜນ', 'ຖົ່ງ', 'ເປົາ', 'ໂຕນ'] },
  { name: 'ເຄື່ອງມືຊ່າງ', icon: '🔧', units: ['ອັນ', 'ແພັກ', 'ຖົ່ງ', 'ຊຸດ'] },
  { name: 'ເຄື່ອງກະເສດ ແລະ ຜະລິດຕະພັນການກະເສດ', icon: '🌾', units: ['ອັນ', 'ແພັກ', 'ແກັດ', 'ຖົ່ງ', 'ກັບ', 'ຊຸດ'] }
];

// ຫົວໜ່ວຍຂອງໝວດ (ຖ້າໝວດບໍ່ມີ units = ບໍ່ໃຫ້ເລືອກຫົວໜ່ວຍ)
function unitsOf(catName) {
  const hit = LLUX_CATEGORIES.find(function (c) { return c.name === catName; });
  return hit && hit.units ? hit.units : [];
}

// ຊື່ໝວດເກົ່າ (ໃນຊີດ Menu) -> ໝວດມາດຕະຖານ
const LLUX_CATEGORY_ALIAS = {
  'ອາຫານດ່ວນ': 'ອາຫານພ້ອມກິນ',
  'ນໍ້າມັນພືດ': 'ເຄື່ອງໃຊ້ໃນຄົວເຮືອນ',
  'ເຈ້ຍ A4': 'ເຄື່ອງໃຊ້ຫ້ອງການ'
};

// ສິນຄ້າທີ່ມີຊື່ມີຄຳເຫຼົ່ານີ້ ຈັດເຂົ້າ "ເຄື່ອງໃຊ້ໃນຄົວເຮືອນ" ອັດຕະໂນມັດ
const LLUX_HOUSEHOLD_KEYWORDS = ['ນໍ້າມັນພືດ', 'ເນື້ອສັດ', 'ຜົງຊູລົດ', 'ນໍ້າປາ', 'ຊີອີ້ວ', 'ຊີອິວ', 'ສະບູ່', 'ຜົງຊັກຟອກ'];

// ຄືນໝວດມາດຕະຖານຂອງສິນຄ້າ (ຫວ່າງ = ບໍ່ຢູ່ໃນໝວດໃດ)
function catOf(item) {
  const name = String((item && item.itemName) || '');
  const raw = String((item && item.category) || '').trim();
  if (LLUX_HOUSEHOLD_KEYWORDS.some(function (k) { return name.indexOf(k) >= 0; })) return 'ເຄື່ອງໃຊ້ໃນຄົວເຮືອນ';
  if (LLUX_CATEGORIES.some(function (c) { return c.name === raw; })) return raw;
  if (LLUX_CATEGORY_ALIAS[raw]) return LLUX_CATEGORY_ALIAS[raw];
  return '';
}
