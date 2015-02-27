/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var app = angular.module("GemStore", []);
    app.controller("StoreController", function(){
        this.products = gems;
    });
    
    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: 'a nice gem',
            soldout: false,
            canpurchase: false
        },
        {
            name: "Diamond King",
            price: 5.95,
            description: 'a nice gem',
            soldout: true,
            canpurchase: true
        },
        {
            name: "Gem 3",
            price: 2.05,
            description: 'another gem',
            soldout: false,
            canpurchase: true
        }
    ];
})();
