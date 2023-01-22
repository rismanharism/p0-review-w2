/*
SOAL No. 5

Kalian telah mempelajari bagaimana cara menggunakan function dan tipe data array.
Perhatikan petunjuk dari instruksi di bawah sebagai berikut:

Terdapat sebuah function 'ageConclusion' yang bertujuan untuk melakukan perbandingan 
kumpulan umur-umur seseorang, function tersebut memiliki argumen/parameter bernama 'ages'.
Perbandingan tersebut akan menghasilkan kesimpulan yang akan ditampilkan, tergantung dari 
kelompok umur mana yang lebih banyak
Berikut arahan yang perlu diimplementasikan:

1. Ketika parameter 'ages' memiliki input kosong, maka tampilkan: 'Input invalid'

2. Umur seseorang dibedakan menjadi 2 (dua), yaitu 'lansia' dan 'belum lansia'.
Ketika seseorang berumur 60 keatas maka akan disebut 'lansia', sebaliknya adalah 'belum lansia' (di bawah 60)

3. Ketika jumlah umur 'lansia' lebih banyak dibanding 'belum lansia',
maka tampilkan: 'Kumpulan umur lansia lebih banyak dengan jumlah <jumlah_orang_lansia> orang'

4. Begitupun dengan sebaliknya, ketika 'belum lansia' lebih banyak dibanding 'lansia',
maka tampilkan: 'Kumpulan umur belum lansia lebih banyak dengan jumlah <jumlah_orang_belum_lansia> orang'

5. Tetapi ketika jumlah kelompok 'lansia' dan 'belum lansia' adalah sama,
maka tampilkan: 'Kumpulan kedua kelompok umur berjumlah sama'

*/


function ageConclusion(ages) {
    if (!ages || ages.length === 0) {
        return "Input invalid"
    }
    let countLansia = 0
    let countBelumLansia = 0
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 60) {
            countLansia++
        } else {
            countBelumLansia++
        }
    }
    if (countLansia > countBelumLansia) {
        return `Kumpulan umur lansia lebih banyak dengan jumlah ${countLansia} orang`
    } else if (countBelumLansia > countLansia) {
        return `Kumpulan umur belum lansia lebih banyak dengan jumlah ${countBelumLansia} orang`
    } else {
        return 'Kumpulan kedua kelompok umur berjumlah sama'
    }
}

console.log(ageConclusion([65, 27, 89, 23, 24, 45, 37]))
// Output: Kumpulan umur belum lansia lebih banyak dengan jumlah 5 orang

console.log(ageConclusion([19, 125, 98, 73, 51]))
// Output: Kumpulan umur lansia lebih banyak dengan jumlah 3 orang

console.log(ageConclusion([19, 125, 98, 51]))
// Output: Kumpulan kedua kelompok umur berjumlah sama'

console.log(ageConclusion([]))
// Output: Input invalid

console.log(ageConclusion())
// Output: Input Invalid