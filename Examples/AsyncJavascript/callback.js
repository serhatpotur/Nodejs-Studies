// Callback : Bir fonskiyonu başka bir fonksiyonun içerisin argüman olarak koymaktır
// Senkron programlama .

// const func1 = () => {
//     console.log('Func1 Çalıştı');
// }
// const func2 = () => {
//     console.log('Func2 Çalıştı');
// }

// // Önce func2 sonra func1 çalıştı
// func2();
// func1();


/* const func1 = () => {
   console.log('Func1 Çalıştı');
   func3();
}
const func2 = () => {
   console.log('Func2 Çalıştı');
   
}
const func3 = () => {
   console.log('Func3 Çalıştı');
   func2();
}

// Func1 - Func3 - Func2 sırasıyla senkron çalışır
func1();  */

// x=x+5 ifadesini setTimeout içine alarak asyc yaptık.

/* let x = 5;
console.log("1. gelen veri", x);

setTimeout(() => {
    x = x + 5;
    console.log("2. gelen veri", x);
}, 5000);


x = x + 5;
console.log("3. gelen veri", x); */

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

// listBooks methodunu başka methotların içinde callback olarak çağırarak asyc bir yapıya dönüştürdük


const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

const deleteBook = (bookLastIndex,bookEndIndex, callback) => {
  books.splice(bookLastIndex,bookEndIndex);   
    callback();
}

//addBook({ name: "Kitap4", author: 'Yazar4' }, listBooks)
deleteBook(1,1,listBooks)
//console.log(books[3]);
//listBooks();