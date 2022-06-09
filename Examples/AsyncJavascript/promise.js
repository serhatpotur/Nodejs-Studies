/*const promise1 = new Promise((resolve, reject) => {
    resolve("Veriler Alındı");
    reject("Bağlantı Hatası")
})*/

//console.log(promise1);

// resolvenni değerini verir
/*promise1.then(value=>{
    console.log(value);
})*/

//reject hatasını verir
/*promise1.catch(err=>{
    console.log(err);
})*/


//birleşmiş hali. if else gibi düşün
// hem resolve hem de reject açıksa önce yazılanı yazar bize

/*promise1.then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
}) */

//           PROJE 1 . KİTAP EKLE-SİL
/*
const books = [
    { name: "Kitap1", author: 'Yazar1' },
    { name: "Kitap2", author: 'Yazar2' },
    { name: "Kitap3", author: 'Yazar3' }
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
};


const addBook = (newBook) => {
    const promise1 = new Promise((res, rej) => {
        books.push(newBook)
        res(books);
        rej("Yeni Kitap Eklenemedi")
    })
    return promise1;
};

const deleteBook = (bookLastIndex, bookEndIndex) => {
    const promise1 = new Promise((res, rej) => {
        books.splice(bookLastIndex, bookEndIndex);
        //res(books);
        rej("Silinemedi")
    });
    return promise1;
}

addBook({ name: "Kitap4", author: 'Yazar4' }).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})


deleteBook(1, 1).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})

*/

//           PROJE 2 VERİ ALMA İŞLEMİ

function getData(data) {
    console.log('Veriler alınıyor..');
    return new Promise((res, rej) => {
        if (data) {
            res('Veriler Alındı')
        } else {
            rej('Veriler Alınmadı')
        }
    })
}

function cleanData(receivedData) {
    console.log('Veriler Düzenleniyor...');
    return new Promise((res, rej) => {
        if (receivedData) {
            res('Veriler Düzenlendi')
        } else {
            rej('Veriler Düzenlenemedi')
        }
    })
}

getData(true).then(value => {
    console.log(value);
    return cleanData(false)
}).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})