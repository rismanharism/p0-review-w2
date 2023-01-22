/*
SOAL No. 4

Kalian telah mempelajari bagaimana cara menggunakan function dan tipe data array.
Perhatikan petunjuk dari instruksi di bawah sebagai berikut:

Buatlah sebuah function bernama 'getEvenNumber' yang bertujuan untuk melakukan filter angka genap
dari input yang diterima. Function tersebut hanya menerima 1 (satu) argumen/parameter bernama 'data' 
yang berfungsi untuk menerima data yang akan diolah. 

Hint: Gunakan mathematical operator untuk mendapatkan hasil yang diinginkan

*/

// write your code below here
function getEvenNumber(data) {
    return data.filter(num => num % 2 === 0);
    }
console.log(getEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [2, 4, 6, 8, 10]
console.log(getEvenNumber([19, 26, 98, 73, 51])) // [26, 98]
console.log(getEvenNumber([87, 56, 128, 90, 64])) // [56, 128, 90, 64]
console.log(getEvenNumber([100, 101, 102, 103, 104])) // [100, 102, 104]