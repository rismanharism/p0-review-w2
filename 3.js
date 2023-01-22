/*
SOAL No. 3

Kalian telah mempelajari bagaimana cara menggunakan function dan tipe data array.
Perhatikan petunjuk dari instruksi di bawah sebagai berikut:

Pada soal dibawah, terdapat variabel bernama 'array' dan 'secondArray' (sebagai contoh pertama) yang memiliki input dengan
tipe data array. Buatlah sebuah function bernama 'addData' yang memilki 2 (dua) argumen/parameter sebagai berikut:

1. 'data' => berisikan data yang akan diubah (array)
2. 'secondData' => berisikan data yang akan dimasukkan ke dalam argumen data (array)

*/

const array = [1, 2, 3]
const secondArray = [4, 5, 6]


// write your code below here
function addData(data, secondData) {
    return data.concat(secondData);
}

console.log(addData(array, secondArray)) // [1, 2, 3, 4, 5, 6]
console.log(addData([7, 8, 9], [10, 11, 12])) // [7, 8, 9, 10, 11, 12]
console.log(addData([10, 20, 30], [60, 70, 80])) // [10, 20, 30, 60, 70, 80]
console.log(addData([10, 20, 30], array)) // [10, 20, 30, 1, 2, 3, 4, 5, 6]