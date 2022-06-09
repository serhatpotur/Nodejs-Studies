//  ASYNC - AWAIT
//Bir işlem tamamlanmadan diğer işleme geçmemeyi iifade eder


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

//    PROMİSE İLE YAZIMI
/*
getData(true).then(value => {
    console.log(value);
    return cleanData(false)
}).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})
*/

//    ASYNC - AWAIT İLE YAZIMI
// ASYNC YAPISINDA THEN CATCH YOKTUR . TRY CATCH VARDIR

async function processData() {

    try {
        const receivedData = await getData(true) // aşağıda ki işlemlere geçmek için getDatanın bitmesini bekleyecek
        console.log(receivedData);
        const cleanedData = await cleanData(false); // daha sonra verlerin temizlenmesini bekle . veriler temizlenene kadar başka bir işlemm yapma
        console.log(cleanedData);

    } catch (error) {
        console.log(error);
    }

}

processData();