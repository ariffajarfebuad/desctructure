//destructuring array
const produk = ["laptop", "hape", "printer", "keyboard", "mouse"];
const [laptop, hape] = produk;
console.log(laptop, hape);

// destructuring object
let obj = { name: "Apple", tipe: 12, warna: "blue" };
const { name, tipe } = obj;

console.log(name);

console.log(tipe);

console.log(warna);

//destructuring fungsi
function studentName({ studentName, houseNumber, city }) {
  return `${studentName} No. ${houseNumber}, ${city}`;
}

var address = studentName({
  studentName: "alfatih Kasuari",
  houseNumber: "2A",
  city: "Kab. Bogor",
});

console.log(address);

// destructuring alias dan default value

const student = {
  nama: "cakrawala",
  umur: 12,
  beratBadan: 200,
  tinggiBadan: 300,
  orangtua: {
    nama: "suhardiman",
    tinggal: "indonesia",
  },
};

const {
  nama: namaALias,
  keluarga = "tambolon",
  umur,
  orangtua: { nama },
  ...dataLainya
} = student;
console.log(namaALias, keluarga, umur, dataLainya);