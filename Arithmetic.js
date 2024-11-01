var Arithemetics = /** @class */ (function () {
    function Arithemetics(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithemetics.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithemetics.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithemetics;
}());
var obj1 = new Arithemetics(11, 10);
var obj2 = new Arithemetics(28, 22);
var Result = 0;
Result = obj1.Addition();
console.log(Result);
Result = obj2.Substraction();
console.log(Result);
