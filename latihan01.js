// ini merupakan sebuah komentar

/* jenis komentar yang lebih dari 
satu baris
kita bisa membuat lebih banyak baris komentar */

console.log('HELLO WORLD!');
console.log('IRSYADI HANIF ELNUR');

let lastName;
lastName = 'elnur ';

console.log(lastName);

let firstName = 'irsyadi ';
console.log(firstName);

let fullName = firstName + lastName;
console.log(fullName);

const A = 100;
console.log(A);

//  A = 200;
//  console.log(A);

/* kode diatas error karena memakai
deklarasi variabel dengan const
nilai pda const adalah konstan
tidak bisa untuk diubah */

let B;
console.log(typeof B);
// undefined adalah variabel yang belum memiliki nilai

// type data number
let C = 28;
console.log(C);
console.log(typeof C);

// operator pada number
let D = 16;

console.log(C + D);
console.log(C - D);
console.log(C / D);
console.log(C * D);
console.log(C % D);

console.log(C++);
console.log(C);
console.log(++D);

// type data Bigint
// yaitu pemakaian angka yang lebih besar dengan penambahan huruf n pada akhir angka
let E = 1234567891012345678910n;
console.log(E);

// type data strings, dibut didalam tanda kutip.
let myHobi = 'badminton and drawing';
console.log(myHobi);

// type data boolean
// boolean hanya ada dua nilai, true or false
console.log(C > D);
console.log(C < D);

// type data NULL
// untuk pendeklarasian variabel yang belum diberi nilai, kadang kita perlu variabel namun belum membutuhkannya.
let F = null;
console.log(F);

// type data symbol
const id = Symbol('id');
console.log(id);
