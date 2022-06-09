// Node.js -> docs

// import { readFile } from 'node:fs';

// // DOSYA OKUMA
// readFile('password.txt', (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log('dosya okundu');
// });

// import { writeFile } from 'node:fs';
// import { Buffer } from 'node:buffer';

// //DOSYA YAZMA

// const data = new Uint8Array(Buffer.from('{"name":"Serhat","age":24}'));
// writeFile('example.json', data, (err) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// VERİ EKLEMEK

// import { appendFile } from 'node:fs';

// appendFile('example.txt', '\nYeni Veri Ekleme', (err) => {
//   if (err) throw err;
//   console.log('Veri Eklendi');
// });

// Dosya Silme

// import { unlink } from 'node:fs';

// const silinecekDosya='password.txt';
// unlink(silinecekDosya, (err) => {
//   if (err) console.log(err);
//   console.log(`${silinecekDosya} dosyası başarılı bir şekilde silindi`);
// });

//1 TANE KLASÖR EKLEME

// import { mkdir } from 'node:fs';

// mkdir('deneme', (err) => {
//     if (err) console.log(err);;
// });

// İÇ İÇE ÇOKLU KLASÖR EKLEME 

// import { mkdir } from 'node:fs';
// mkdir('upload/img', { recursive: true }, (err) => {
//     if (err) console.log(err);
// })

//klasör silme
import { rmdir } from 'node:fs';
rmdir('deneme', { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log('Klasörler silindşr');
})