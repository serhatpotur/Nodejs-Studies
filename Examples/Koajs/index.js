// Koa.js ile web sunucumuzu yazalım.
// Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

// koa paketini indirelim.
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
// port numarası olarak 3000'i kullanalım.


const Koa = require("koa");
const app = new Koa();
const port = 3000;

// response
app.use((ctx) => {
  //console.log(ctx);

  const url = ctx.url;
  //console.log(url);

  if (ctx.url === '/') {
    ctx.status = 200;
    ctx.body = '<h1> INDEX SAYFASINA HOSGELDINIZ </h1>'
  }
  else if (ctx.url === '/about') {
    ctx.status = 200;
    ctx.body = '<h1> ABOUT SAYFASINA HOSGELDINIZ </h1>'
  }
  else if (ctx.url === '/contact') {
    ctx.status = 200;
    ctx.body = '<h1> CONTACT SAYFASINA HOSGELDINIZ </h1>'
  }
  else {
    ctx.status = 404;
    ctx.body = '<h1> ARADIĞINIZ SAYFA BULUNAMADI </h1>'
  }
});

app.listen(port);