/*
SOAL No. 5

Kalian telah mempelajari bagaimana cara menggunakan function, tipe data array, dan array multidimensi.
Perhatikan petunjuk dari instruksi di bawah sebagai berikut:

Pada soal di bawah, terdapat variabel bernama 'data' yang menyimpan kumpulan data Nama dan Nomor Telepon
setiap user. Operator nomor telepon yang digunakan pada kumpulan data tersebut ada 3 (tiga), 
yaitu: Cimpati, Rindusat, dan Ekcel

Pada soal di bawah juga terdapat function bernama 'filterOperators' yang memiliki argumen/parameter
'users' dan 'operator'. Argumen/parameter 'users' menerima kumpulan data array multidimensi yang berisikan
Nama dan Nomor Telepon pada setiap elemennya. Argumen/paramater 'operator' menerima nama-nama operator 
yang dipilih (string). Tampilkan nama-nama orang sesuai dengan operator yang telah ditentukan

Berikut adalah arahan-arahan yang perlu diperhatikan untuk mengimplementasikan soal berikut:

1. Ketika argumen/parameter 'data' input nya kosong, maka tampilkan: 'Data tidak ditemukan'

2. Berikut adalah nomor prefiks pada setiap operator:
- Cimpati => 0812
- Rindusat => 0857
- Ekcel => 0817

3. Ketika hanya ada 1 (satu) orang dari operator yang dipilih,
maka tampilkan: 'Hanya user bernama <nama_user> yang memiliki operator <nama_operator>'

4. Ketika user nya lebih dari 1 (satu) orang dari operator yang dipilih,
maka tampilkan: 

'User yang memiliki operator <nama_operator> adalah: <nama1>, <nama2>, dan <nama3>'

ATAU

'User yang memiliki operator <nama_operator> adalah: <nama1>, dan <nama2>'

*/

const data = [
    ['Nama', 'Nomor Telepon'],
    ['Raditya', '08125471xx'], // Cimpati
    ['Budi', '08572566xxx'], // Rindusat
    ['Sinta', '081799887xxx'], // Ekcel
    ['Awal', '0857889966xxx'], // Rindusat
    ['Tono', '081799888xxx'], // Ekcel
    ['Alif', '085725896xxx'] // Rindusat
]


function filterOperators(data, operator) {
    if (!data || !operator) {
        return "Data tidak ditemukan";
    }

    let prefix = {
        "Cimpati": "0812",
        "Rindusat": "0857",
        "Ekcel": "0817"
    }

    let operator_prefix = prefix[operator];
    if (!operator_prefix) {
        return "Operator tidak ditemukan";
    }

    let filtered_data = [];
    for (let i = 1; i < data.length; i++) {
        let number = data[i][1];
        if (number.substring(0, 4) === operator_prefix) {
            filtered_data.push(data[i][0]);
        }
    }

    if (filtered_data.length === 0) {
        return "Tidak ada user dengan operator " + operator;
    } else if (filtered_data.length === 1) {
        return "Hanya user bernama " + filtered_data[0] + " yang memiliki operator " + operator;
    } else {
        let last_item = filtered_data.pop();
        return "User yang memiliki operator " + operator + " adalah: " + filtered_data.join(', ') + " dan " + last_item;
    }
}


console.log(filterOperators(data, 'Rindusat'))
// Output: User yang memiliki operator Rindusat adalah: Budi, Awal, dan Alif

console.log(filterOperators(data, 'Ekcel'))
// Output: User yang memiliki operator Ekcel adalah: Sinta, dan Tono

console.log(filterOperators(data, 'Cimpati'))
// Output: Hanya user bernama <nama_user> yang memiliki operator <nama_operator>

console.log(filterOperators([], 'Ekcel'))
// Output: Data tidak ditemukan

console.log(filterOperators())
// Output: Data tidak ditemukan