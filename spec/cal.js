describe('calculator', ()=>{
    it('should add number to total', ()=>{
        const cal= new Calculator();
        cal.add(5)

        expect(cal.total).toBe(5)
    });

    it('should substract number to total', ()=>{
        const cal= new Calculator()
        cal.total= 30
        cal.subtract(5)
        expect(cal.total).toBe(25)
    });

    it('should be defined', ()=>{
        const cal= new Calculator()
        cal.total= 30
        cal.multiply(5)
        expect(cal.total).toBeDefined(1)
    });

    it('should be under defined', ()=>{
        const cal= new Calculator()
        cal.total= 30
        cal.multiply(5)
        expect(cal.total_1).toBeUndefined(1)
    });

    it('has be NULL', ()=>{
        const cal= new Calculator()
        cal.total= null
        expect(cal.total).toBeNull()
    });

    it('contains', ()=>{
        const cal= new Calculator()
        cal.total= [1,2,3]
        expect(cal.total).toContain(1)
    });

    it('throws', ()=>{
        const cal= new Calculator()
        cal.total= function() {
            throw 'what';
          };
        expect(cal.total).toThrow('what')
    });

    it('throws error', ()=>{
        const cal= new Calculator()
        cal.total= function() {
            throw new TypeError('error');
          };
        expect(cal.total).toThrowError(TypeError, 'error')
    });

    it('matches', ()=>{
        const cal= new Calculator()
        cal.total= '200'
        expect(cal.total).toMatch('200');
    });


    it('has be NaN', ()=>{
        const cal= new Calculator()
        cal.total= NaN
        expect(cal.total).toBeNaN()
    });


    it('has constructor', ()=>{
        const cal1= new Calculator()
        const cal2= new Calculator()

        cal1.total= 200
        cal2.taol= 200
    });

    it('can be instantiated', ()=>{
        const cal1= new Calculator()
        const cal2= new Calculator()

        expect(cal1).toBeTruthy()
        expect
        
        (cal2).toBeTruthy()
    });

    it('should initialize the total', ()=>{
        const cal1= new Calculator()

        expect(cal1.total).toBe(0)
        expect(cal1.total).toBeFalsy()
    });
})