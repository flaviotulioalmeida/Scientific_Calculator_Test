class ScientificCalculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    cbrt(number) {
        return Math.cbrt(number);
    }

    modulo(a, b) {
        return a % b;
    }
    
    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    sqrt(number) {
        if (number < 0) {
            throw new Error("Square root of negative number is not allowed.");
        }
        return Math.sqrt(number);
    }

    fatorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    

    sin(angle) {
        return Math.sin(angle);
    }

    cos(angle) {
        return Math.cos(angle);
    }

    tan(angle) {
        return Math.tan(angle);
    }

    log(number) {
        if (number <= 0) {
            throw new Error("Logarithm of non-positive number is not allowed.");
        }
        return Math.log(number);
    }

    exp(number) {
        return Math.exp(number);
    }

    log10(number) {
        if (number <= 0) {
            throw new Error("Logarithm of non-positive number is not allowed.");
        }
        return Math.log10(number);
    }

    asin(value) {
        return Math.asin(value);
    }

    acos(value) {
        return Math.acos(value);
    }

    atan(value) {
        return Math.atan(value);
    }

    sinh(angle) {
        return Math.sinh(angle);
    }

    cosh(angle) {
        return Math.cosh(angle);
    }

    tanh(angle) {
        return Math.tanh(angle);
    }
}

const calculadora = new ScientificCalculator();
export default calculadora;