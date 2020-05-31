(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        let toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuy();
        toBuy.boughtItem = function(itemIndex) {
            ShoppingListCheckOffService.bought(itemIndex);
        }

    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        let alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        let service = this;
        let toBuy = ['10 cookies ', '4 bottles of surgary drinks', '10 packets of chips'];
        let bought = [];

        service.getToBuy = function () {
            return toBuy;
        }
        service.getBought = function() {
            return bought;
        }
        service.bought = function(index) {
            bought.push(toBuy[index]);
            toBuy.splice(index, 1);
        }
    }
})();