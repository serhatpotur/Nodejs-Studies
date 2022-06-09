// Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

// createServer metodunu kullanacağız.
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
// port numarası olarak 5000'i kullanalım.

const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>Index Sayfasina Hosgeldiniz </h2>')
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>About Sayfasina Hosgeldiniz </h2>')
    }
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>Contact Sayfasina Hosgeldiniz </h2>')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('<h2>Aradiginiz Sayfa Bulunamadi </h2>')
    }
    res.end();
})

const port = 5000;
server.listen(port, () => {
    console.log(`Sunucu ${port} port numarası ile başlatıldı`);
})