// Unit tests for the helloWorld function
/*describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
*/

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jaymes!" when executed', function() {
        expect(sayHello('Jaymes')).toBe("Hello, Jaymes!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when executed with no arguments', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
});

//Unit tests for isFive
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return a false when called', function() {
        expect(isFive("5")).toBe(false)
    });

});

//Unit tests for isEven
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
        });
    it('should return a boolean when called', function() {
        expect(isEven()).toBe('Boolean');
        });
    it('should return a boolean when called', function() {
        expect(isEven(2)).toBe(Boolean(true | false));
        });
    it('should return a boolean when called', function() {
        expect(isEven(-4)).toBe(Boolean(true | false));
    });
    it('should return a boolean when called', function() {
        expect(isEven(3)).toBe(Boolean(true | false));
    });
    });




