var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbAdmin:dbHaselko@cluster0-ennqu.mongodb.net/zakupy?retryWrites=true', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0910/1164/products/Minor-Threat-Out-of-Step_grande.jpg?v=1438923679',
        title: 'Minor Threat - Out of Step',
        description: "album zespołu Minor Threat wydany w kwietniu 1983 roku przez firmę Dischord Records. Utwory nagrano w Inner Ear Studios.",
        price: '40'
    }),
    new Product({
        imagePath: 'https://ecsmedia.pl/c/my-generation-w-iext51007322.jpg',
        title: 'The Who - My Generation',
        description: "debiutancki album studyjny angielskiej grupy rockowej The Who, wydany 1 grudnia 1965. W Stanach Zjednoczonych ukazał się pod nazwą The Who Sings My Generation w kwietniu 1966.",
        price: '35'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61MdZr48nmL._SY355_.jpg',
        title: 'Battalion of Saints - Second Coming',
        description: "Klasyka Hardkora z San Diego.",
        price: '60'
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/RSEP1.jpg/220px-RSEP1.jpg',
        title: 'Rolling Stones - S/T',
        description: "The Rolling Stones – debiutancki album zespołu The Rolling Stones, wydany 16 kwietnia 1964 w Wielkiej Brytanii. Wydanie amerykańskie nosiło tytuł England's Newest Hitmakers i zostało wydane pod koniec maja 1964 r.",
        price: '201'
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}