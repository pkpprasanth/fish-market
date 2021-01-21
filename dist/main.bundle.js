webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header ,footer{\n\n  border: 1px solid rgb(6, 27, 56);\n  background-color:  rgb(6, 27, 56);\n  color: white;\n  padding: 2%;\n}\nheader>h3{\n  margin-left: 44%;\n  font-size: 20px;\n}\nfooter>h3{\n  margin-left: 44%;\n  font-size: 20px;}\n.container {\n  padding: 25px 25px;\n  margin-left: 15%;\n}\n\n.food-container {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h3>Live Fish Market</h3>\n</header>\n<div class=\"container\">\n  <div class=\"food-container\">\n    <app-food-list></app-food-list>\n  </div>\n</div>\n<footer>\n  <h3>Made with <span><img src=\"../assets/prograd-heart.svg\" alt=\"\"></span> by PKP</h3>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__food_list_food_list_component__ = __webpack_require__("../../../../../src/app/food-list/food-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__food_search_pipe__ = __webpack_require__("../../../../../src/app/food-search.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__food_list_food_list_component__["a" /* FoodListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__food_search_pipe__["a" /* FoodSearchPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/food-list/food-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.search-box {\n  width: 90%;\n  height: 10%;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 25px;\n  font: 1em sans-serif;\n}\n\n.search-box > * {\n  width: 100%;\n  display: block;\n}\n\n.search-box label {\n  margin-bottom: 5px;\n\n}\n\n.food-list {\n  list-style: none;\n  padding: 0;\n  width: 100%;\n  \n}\n\n.single-food {\n  display: block;\n  text-align: center;\n  margin-bottom: 50px;\n  height: 150px;\n  background-color: rgb(6, 27, 56);\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.single-food h3 {\n  font-size: 1em;\n  color: #f7f4f2;\n\n}\n\n.food-amount {\n  color: #c06318;\n}\n\n.single-food img {\n  width: 25%;\n  height: 150px;\n  float: left;\n  border-radius: 50%;\n}\n\n.new-food {\n  overflow: auto;\n}\n\n.new-food-button {\n  float: left;\n  width: 20%;\n  display: block;\n}\n\n.my-food-list {\n  float: right;\n  width: 45%;\n}\n\n.foods {\n  width: 45%;\n  display: inline-block;\n}\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: right;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\nbutton {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  width: 8rem;\n  color: white;\n  padding: 5px 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 15px;\n}\n#btn{\n  margin: 5%;\n  margin-left:40% ;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/food-list/food-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"foods\">\n  <div class=\"search-box\">\n    <label for=\"food-search\">Search</label>\n    <input id=\"food-search\" type=\"text\" [(ngModel)]=\"pattern\">\n  </div>\n\n  <div class=\"new-food\">\n    <button (click)=\"enableUserToAddFood()\" class=\"new-food-button\">Add New Fish</button>\n    <br>\n    <div *ngIf=\"isEditing\">\n      <div>\n        <br>\n        <label for=\"new-food-name\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"newFoodName\">\n        <br> <br>\n      </div>\n      <div>\n        <label for=\"new-food-amount\">amount</label>\n        <input type=\"text\" [(ngModel)]=\"newFoodamount\">\n        <br> <br>\n      </div>\n      <div>\n        <label for=\"new-food-name\">Image</label>\n        <input type=\"text\" [(ngModel)]=\"newFoodImage\">\n        <br> <br>\n      </div>\n\n      <button (click)=\"newFood()\">Add Fish</button>\n    </div>\n  </div>\n\n  <ul class=\"food-list\">\n    <li class=\"single-food\" *ngIf=\"isEditing\">\n      <img [src]=\"newFoodImage\">\n      <h3 class=\"food-name\">\n        {{ newFoodName }}\n        <small class=\"food-amount\">{{ newFoodamount }}</small>\n      </h3>\n    </li>\n\n\n\n    <li class=\"single-food\" *ngFor=\"let food of foods | foodSearch:'name':pattern;\">\n      <img [src]=\"food.image\">\n      <h3 class=\"food-name\">\n        {{ food.name }}\n      </h3>\n      <h3 class=\"food-amount\">RS . {{ food.amount }}</h3>\n\n      <input type=\"number\" #quantity value=\"1\">\n      <button (click)=\"addToMyList(food, quantity)\"> Add </button>\n    </li>\n  </ul>\n\n</div>\n\n\n\n<div id=\"menu\" class=\"my-food-list\" style=\"visibility: hidden;\">\n  <div id=\"pdfTable\" #pdfTable>\n  <h2>XYZ Fish Invoice</h2>\n  <table class=\"table table-bordered\">\n    <tr class=\"table-primary\">\n      <th>Item</th>\n      <th>Amount</th>\n      <th>Quantity</th>\n    </tr>\n    <tr *ngFor=\"let food of myList\">\n      <td>{{food.name}}</td>\n      <td>{{food.amount}}</td>\n      <td>{{food.quantity}}</td>\n    </tr>\n    <tr>\n      <th>Total</th>\n      <td>-</td>\n      <td>Rs. {{totalamount}}</td>\n    </tr>\n  </table>\n</div >\n<div id=\"btn\"> <button  (click)=\"downloadAsPDF()\">Bill</button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/food-list/food-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foods__ = __webpack_require__("../../../../../src/app/foods.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodListComponent = (function () {
    function FoodListComponent() {
        this.myList = [];
        this.isEditing = false;
        this.newFoodName = "Example Name";
        this.newFoodamount = 250;
        this.newFoodImage = "https://pngimg.com/uploads/fish/fish_PNG1141.png";
        this.totalamount = 0;
    }
    FoodListComponent.prototype.ngOnInit = function () {
        this.foods = __WEBPACK_IMPORTED_MODULE_1__foods__["a" /* default */];
    };
    FoodListComponent.prototype.enableUserToAddFood = function () {
        this.isEditing = !this.isEditing;
    };
    FoodListComponent.prototype.newFood = function () {
        var newFood = {
            name: this.newFoodName,
            amount: this.newFoodamount,
            image: this.newFoodImage,
            quantity: 0
        };
        this.foods.unshift(newFood);
        this.isEditing = true;
        this.newFoodName = "";
        this.newFoodamount = null;
        this.newFoodImage = "";
    };
    FoodListComponent.prototype.addToMyList = function (food, quantityInput) {
        document.getElementById('menu').style.visibility = 'visible';
        var existingFood = this.myList.find(function (item) { return item.name === food.name; });
        var quantity = Number(quantityInput.value);
        if (existingFood) {
            existingFood.quantity += quantity;
        }
        else {
            food.quantity = quantity;
            this.myList.push(food);
        }
        this.totalamount += (food.amount * quantity);
        this.quantity = 1;
    };
    FoodListComponent.prototype.downloadAsPDF = function () {
        var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf__('p', 'pt', 'a4');
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var pdfTable = this.pdfTable.nativeElement;
        doc.fromHTML(pdfTable.innerHTML, 15, 15, {
            width: 190,
            'elementHandlers': specialElementHandlers
        });
        doc.save('xyzinvoice.pdf');
    };
    return FoodListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('pdfTable'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], FoodListComponent.prototype, "pdfTable", void 0);
FoodListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-food-list',
        template: __webpack_require__("../../../../../src/app/food-list/food-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/food-list/food-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FoodListComponent);

var _a;
//# sourceMappingURL=food-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/food-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodSearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FoodSearchPipe = (function () {
    function FoodSearchPipe() {
    }
    FoodSearchPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        return items.filter(function (item) { return item[field].match(new RegExp(value, 'i')); });
    };
    return FoodSearchPipe;
}());
FoodSearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'foodSearch'
    })
], FoodSearchPipe);

//# sourceMappingURL=food-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/foods.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var foods = [
    {
        name: "Nemo",
        amount: 150,
        image: "https://lh3.googleusercontent.com/proxy/E433yPTz6fk4Dw_ZNVDufZZwZlC_tNXl2xFPwE7mmkh2THPPw9upF4DxYMTl6vHpidN7-4wPvd2QxXqapeW2DERgRaOPt82xcI6TriX03XMUH1QvP-fX",
        quantity: 0
    },
    {
        name: "Bruce fish",
        amount: 105,
        image: "https://pngimg.com/uploads/fish/fish_PNG25166.png",
        quantity: 0
    },
    {
        name: "Red Fish",
        amount: 302,
        image: "https://pngimg.com/uploads/fish/fish_PNG25116.png",
        quantity: 0
    },
    {
        name: "Clown Triggerfish",
        amount: 140,
        image: "https://freepngimg.com/thumb/fish/9-fish-png-image.png",
        quantity: 0
    },
    {
        name: "Yellow Zebrasomatang Fish",
        amount: 65,
        image: "https://www.kindpng.com/picc/m/7-73132_yellow-zebrasomatang-fish-png-clipart-fish-png-transparent.png",
        quantity: 0
    }
];
/* harmony default export */ __webpack_exports__["a"] = (foods);
//# sourceMappingURL=foods.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map