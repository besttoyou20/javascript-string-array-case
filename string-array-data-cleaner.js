
console.log("========== CASE 1: USER DATA CLEANER ==========");

// String mentah dari form input
const rawNames = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedString = rawNames.trim();

const namesArray = cleanedString.split(",");

const formattedNames = namesArray.map((name) => name.trim().toLowerCase());

const resultNames = formattedNames.join(" | ");

console.log("String awal:", rawNames);
console.log("Array nama:", namesArray);
console.log("Nama setelah dibersihkan:", formattedNames);
console.log("Hasil akhir:", resultNames);


console.log("\n========== CASE 2: E-COMMERCE PRODUCT FILTER ==========");

// Data produk
const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

// 1. Saring produk yang aktif
const activeProducts = products.filter((product) => product.active === true);

// 2. Buat array baru berisi nama produk dengan huruf kapital semua
const activeProductNames = activeProducts.map((product) =>
  product.name.toUpperCase()
);

// 3. Hitung total harga produk aktif
const totalActivePrice = activeProducts.reduce(
  (total, product) => total + product.price,
  0
);

console.log("Produk aktif:", activeProducts);
console.log("Nama produk aktif:", activeProductNames);
console.log("Total harga produk aktif:", totalActivePrice);
