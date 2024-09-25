import calculadora from "./calculadora";

describe("Testes para a calculadora científica", () => {

    test("Teste para a função de raiz quadrada", () => {
        expect(calculadora.sqrt(9)).toBe(3);
    });

    test("Teste para a função de logaritmo natural", () => {
        expect(calculadora.log(10)).toBe(2.302585092994046);
    });

    test("Teste para a função de logaritmo base 10", () => {
        expect(calculadora.log10(100)).toBe(2);
    });

    test("Teste para a função de seno", () => {
        expect(calculadora.sin(Math.PI / 2)).toBe(1);
    });

    test("Teste para a função de cosseno", () => {
        expect(calculadora.cos(Math.PI / 2)).toBe(6.123233995736766e-17);
    });

    test("Teste para a função de tangente", () => {
        expect(calculadora.tan(Math.PI / 4)).toBe(0.9999999999999999);
    });

    test("Teste para a função de fatorial", () => {
        expect(calculadora.fatorial(5)).toBe(120); 
    });
    
    test("Teste para a função de potência", () => {
        expect(calculadora.power(2, 3)).toBe(8); 
    });

    test("Teste para a função de módulo", () => {
        expect(calculadora.modulo(5, 2)).toBe(1); 
    });

    test("Teste para a função de exponencial", () => {
        expect(calculadora.exp(1)).toBe(2.718281828459045); 
    });

    test("Teste para a funções de logaritmo e exponencial", () => {
        expect(calculadora.exp(calculadora.log(10))).toBe( 10.000000000000002); 
    });

    test("Teste para a funções de multiplicação", () => {
        expect(calculadora.multiply(2, 3)).toBe(6); 
    });

    test("Teste para a funções de divisão", () => {
        expect(calculadora.divide(6, 3)).toBe(2); 
    });

    test("Teste para a funções de divisão por zero", () => {
        expect(() => calculadora.divide(6, 0)).toThrowError("Division by zero is not allowed."); 
    });

    test("Teste para a funções de subtração", () => {
        expect(calculadora.subtract(6, 3)).toBe(3); 
    });

    test("Teste para a funções de soma", () => {
        expect(calculadora.add(2, 3)).toBe(5); 
    });

    test("Teste para a função de raiz cúbica", () => {
        expect(calculadora.cbrt(8)).toBe(2); 
    });

    test("Teste para a função de raiz cúbica de zero", () => {
        expect(calculadora.cbrt(0)).toBe(0); 
    });

    test("Teste para a função de raiz cúbica de número negativo", () => {
        expect(calculadora.cbrt(-8)).toBe(-2); 
    });

    test("Teste para a função de raiz quadrada de número negativo", () => {
        expect(() => calculadora.sqrt(-9)).toThrowError("Square root of negative number is not allowed."); 
    });
    

})

