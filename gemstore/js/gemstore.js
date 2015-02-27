/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var app = angular.module("GemStore", []);
    app.controller("StoreController", function(){
        this.product = gem;
    });
    
    var gem = {
        name: "Dodecahedron",
        price: 2.95,
        description: 'a nice gem'
        
    };
})();
