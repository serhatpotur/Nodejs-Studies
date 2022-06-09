// Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.

// 1) DOSYA OLUŞTURMA
// import { writeFile } from 'node:fs';
// import { Buffer } from 'node:buffer';

// const veri='[{"name": "Employee 1 Name", "salary": 2000}]'
// const data = new Uint8Array(Buffer.from(veri));
// writeFile('employees.json', data, (err) => {
//     if (err) console.log(err);
//     console.log('Dosya oluşturuldu');
// });

// 2) DOSYA OKUMA

// import { readFile } from 'node:fs';

// readFile('employees.json', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log('Dosya Okundu');
// })

// 3) DOSYA İÇERİSİNEVERİ EKLEME

// import { appendFile } from 'node:fs';
// const eklenecekVeri = ',\n{"name":"Employee 2 Name","salary":3000}'
// appendFile('employees.json', eklenecekVeri, (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log('Dosya Güncellendi');
// })

// 4) DOSYAYI SİLELİM

import { unlink } from 'node:fs';

unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log('dosya silindi');
})