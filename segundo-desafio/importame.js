"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suma = /** @class */ (function () {
    function Suma(a, b) {
        var _this = this;
        this.resultado = function () {
            return _this.a + _this.b;
        };
        this.a = a;
        this.b = b;
    }
    return Suma;
}());
exports.default = Suma;
