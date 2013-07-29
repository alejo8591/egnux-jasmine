describe("Calculator Addition", function(){
    var calc;
    beforeEach(function(){
        calc = new Calculator();
    });
    it("can add 2 + 3", function(){
        expect(calc.add(2,3)).toEqual(5);
    });
    it("can add 10 + 8", function(){
        expect(calc.add(10,8)).toEqual(18);
    });    
    it("can add 24 + 32", function(){
        expect(calc.add(24,32)).toEqual(56);
    });    
    it("can add 27 + 3", function(){
        expect(calc.add(27,3)).toEqual(30);
    });
    it("can add -2 + 3", function(){
        expect(calc.add(-2,3)).toEqual(1);
    });    
    it("can add 2.5 + 3.5", function(){
        expect(calc.add(2.5,3.5)).toEqual(6.2);
    });
});