# alisverisSepeti

Bu istemci, herhangi bir JS framework kullanılmadan, JavaScript dilinde geliştirilmiştir.
Dosya sistemindeki JSON dosyalarından alınan verilerin kullanılması ve bir [yemeksepeti.com](http://yemeksepeti.com) Restoran ekranı simülasyonu oluşturulması amaçlanmıştır.

This client is developed on JavaScript language, without using any JS framework.
Purpose of this project is fetching JSON files from file system and processing the data from these files to create a [yemeksepeti.com](http://yemeksepeti.com) Restaurant page simulation.

[Denemek için tıklayın / Click to try](http://yemeksepeti.basarakkaya.com)

## Nasıl Çalıştırılır?/How to Run the Project

"src" klasörü içindeki dosyalar bir HTTP server üzerinde çalıştırılmalıdır.

Files within "src" folder should be run on a HTTP server.

[HTTP Server NodeJS Pakediyle nasıl kurulur? / How to set up a HTTP Server using a NodeJS Package](https://www.npmjs.com/package/http-server)

## main.js

Bu bölümde "main.js" dosyası içerisindeki fonksiyonlar hakkında kısaca bilgi verilmektedir. "main.js" dosyası içerisindeki fonksiyonlar istemcinin herhangi bir yerinde kullanılmak üzere yazılmıştır.

In this section, a brief information about functions within "main.js" is given. Generally, the functions within "main.js" file are written to be used for any part of the client.

### window.onload

Bu fonksiyon, istemci yüklendikten hemen sonra, istemcinin kullanıma hazır hale gelmesi için JSON dosyalarını çekmesi, bu JSON dosyalarına göre Restoran bilgileri ve Menü bilgilerini doldurması ve Alışveriş Sepetini kullanıma hazır hale getirmesi amacıyla oluşturulmuştur.

### loadJSON(filePath, success, error)

Bu fonksiyon, parametre olarak dosya dizini ile success ve error callback fonksiyonlarını alır. Parametre olarak geçilen dosya dizinine XHR yapılarak, gelen sonucu JSON halinde parse ederek duruma göre success veya error callback'ine parametre olarak geçer.

### hasClass(element, className)

Bu fonksiyon, parametre olarak HTML elemanını ve bu eleman üzerinde aranması istenen class adını alır. Boolean türünde sonuç döndürür.

### toggleAccordionById(elementID, indicatorID)

Bu foknsiyon, parametre olarak "accordion menu" davranışı göstermesi istenen HTML elemanına ait ID'yi ve bu elemanın "toggle" durumunu gösterecek olan gösterge elemanının ID'sini alır. Bu projede "onClick" event fonksiyonu olarak kullanılmıştır. Parametre olarak geçilen elemanların style, class ve innerText özellikleri üzerinde değişiklik yapar, veri döndürmez.

## restaurant.js

Bu bölümde "restaurant.js" dosyası içerisindeki fonksiyonlar hakkında kısaca bilgi verilmektedir. "restaurant.js" dosyasındaki fonksiyonlar, Restoran bilgilerinin çekilen veriler ile doldurulması amacıyla oluşturulmuştur.

In this section, a brief information about functions within "restaurant.js" is given. The functions within the file "restaurant.js" are created with the purpose of filling the corresponding Restaurant information fields using the fetched data.

### initRestaurantInfo(data)

Parametre olarak "restoranData.json" dosyasından gelen verilerdeki "ResultSet" objesini alır. Fonksiyon içerisinde oluşturulmuş HTML şablonu ana hatlarıyla doldurulur, ana HTML'e eklenir ve spesifik alanların doldurulması için diğer fonksiyonlar çağrılır. Veri döndürmez.

### appendDiscounts(discounts)

Parametre olarak "restoranData.json" dosyasından gelen verilerdeki "ResultSet.Discounts" objesini alır. HTML şablonunu forEach döngüsüyle doldurup artarda ekleyerek, oluşan "string" türündeki değişkeni ID ile belirlenen elemana innerHTML olarak ekleyerek o alanı verilere göre doldurur. Veri döndürmez.

### appendRestaurantCuisines(cuisines)

Parametre olarak "restoranData.json" dosyasından gelen verilerdeki "ResultSet.ResturantCuisines" objesini alır. HTML şablonunu forEach döngüsüyle doldurup artarda ekleyerek, oluşan "string" türündeki değişkeni ID ile belirlenen elemana innerHTML olarak ekleyerek o alanı verilere göre doldurur. Veri döndürmez.

### appendWorkingHours(workingHours)

Parametre olarak "restoranData.json" dosyasından gelen verilerdeki "ResultSet.WorkingHours" objesini alır. HTML şablonunu forEach döngüsüyle doldurup artarda ekleyerek, oluşan "string" türündeki değişkeni ID ile belirlenen elemana innerHTML olarak ekleyerek o alanı verilere göre doldurur. Veri döndürmez.

### appendPaymentMehods(payments)

Parametre olarak "restoranData.json" dosyasından gelen verilerdeki "ResultSet.PaymentMethods" objesini alır. HTML şablonunu forEach döngüsüyle doldurup artarda ekleyerek, oluşan "string" türündeki değişkeni ID ile belirlenen elemana innerHTML olarak ekleyerek o alanı verilere göre doldurur. Veri döndürmez.

### appendDeliveryAreas(deliveryAreas)

Parametre olarak "restoranData.json" dosyasından gelen verilerdeki "ResultSet.DeliveryAreas" objesini alır. HTML şablonunu forEach döngüsüyle doldurup artarda ekleyerek, oluşan "string" türündeki değişkeni ID ile belirlenen elemana innerHTML olarak ekleyerek o alanı verilere göre doldurur. Veri döndürmez.

## menu.js

Bu bölümde "menu.js" dosyası içerisindeki fonksiyonlar hakkında kısaca bilgi verilmektedir. "menu.js" dosyasındaki fonksiyonlar, Restorana ait Menü bilgilerinin çekilen veriler ile doldurulması amacıyla oluşturulmuştur.

In this section, a brief information about functions within "menu.js" is given. The functions within the file "menu.js" are created with the purpose of filling the corresponding Restaurant Menu information fields using the fetched data.

### initRestaurantMenu(categorisedData)

Parametre olarak "menuData.json" dosyasından gelen verilerdeki "ResultSet" objesini alır. Verilere göre "Kategori" bölümlerini oluşturur. forEach döngüsüyle HTML şablonunu kategori bilgileriyle doldururken appendProductsToCategory metodunu, kategori altındaki ürünlerin bulunduğu objeyi parametre olarak geçerek çağırır; böylece kategori altına kategoriye ait ürünlerin doldurulmasını sağlar. Veri döndürmez.

### appendProductsToCategory(products)

Parametre olarak "menuData.json" dosyasından gelen verilerdeki "ResultSet.Products" objesini alır. forEach döngüsüyle HTML şablonunu verilerle doldurur. Veri döndürmez.

### validatePrice(price)

Parametre olarak "string" türünde değer alır. Alınan parametreyi önce "float" türünde parse edilebilecek formata getirir, daha sonra da bu değeri "float" türünde parse ederek döndürür. "Float" türünden veri döndürür.

## cart.js

Bu bölümde "cart.js" dosyası içerisindeki fonksiyonlar hakkında kısaca bilgi verilmektedir. "cart.js" dosyasındaki fonksiyonlar, Alışveriş Sepetinin kontrol edilmesi amacıyla oluşturulmuştur. Alışveriş Sepeti verileri tarayıcının "Local Storage" kısmında tutularak kullanılır.

In this section, a brief information about functions within "cart.js" is given. The functions within the file "cart.js" are created with the purpose of controlling the Shopping Cart. Shopping cart data are kept in and used from the "Local Storage" of the browser.

### initCart()

"Local Storage" üzerinden temel Sepet verilerini (sepetteki toplam ürün sayısı ve toplam ürün fiyatı) çeker; eğer bu veriler "Local Storage" üzerinde bulunamadıysa bu verileri "Local Storage" üzerine "0 (sıfır)" olarak yazar. Sepet verilerine göre ekranda ilgili bilgilerin gösterilmesi için appendCartInfo fonksiyonunu çağırır. Veri döndürmez.

### emptyCart()

"Local Storage" üzerindeki Sepet verilerini sıfırlar. Sepet verilerine göre ekranda ilgili bilgilerin güncellenmesi için appendCartInfo fonksiyonunu çağırır. Veri döndürmez.

### approveCart()

JavaScript Confirm kutusu çıkararak kullanıcıya Sepetini onaylamak isteyip istemediğini sorar. Onay alırsa JavaScript alert üzerinde Sepete ait bilgileri getCartContent fonksiyonunu çağırarak gösterir ve sonrasında emptyCart fonksiyonunu çağırarak sepet verilerini sıfırlar. Veri döndürmez.

### getCartContent()

Sepet içeriğini ürün kodu, miktarı ve fiyatı ile toplam sepet tutarını gösterecek şekilde formatlayarak "string" türünden veri döndürür.

### changeProductCount(data)



### appendCartInfo()



### setTotalValues(count, price)



### countStorageItemsByPrefix(prefix, prefixStartIndex)


