class Arithemetics
{
    public No2 : number;
    public No1 : number;

    constructor(A : number, B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition() : number 
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction() : number 
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var obj1 = new Arithemetics(11,10);
var obj2 = new Arithemetics(28,22);

console.log(obj1.No1);
console.log(obj1.No2);
var Result : number = 0;

Result = obj1.Addition();
console.log(Result);

Result = obj2.Substraction();
console.log(Result);
