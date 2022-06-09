/*Daire Modüler Dosyası
1) Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları 
içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
2) module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
3) require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.


*/
function circleArea (radius) {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area}`);
    return area;
}
circleArea(3);

function circleCircumference (radius) {
    let Circumference = 2 * Math.PI * radius;
    console.log(`Yarıçapı ${radius} olan dairenin çevresi : ${Circumference}`);
    return Circumference;
}

circleCircumference(3);

export {
    circleArea,
    circleCircumference
}
// let sayHello='Hello'
// module.exports=sayHello;