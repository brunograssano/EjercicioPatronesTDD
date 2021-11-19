type ValueStack = number[];

abstract class BinaryOperation {
  doIt(stack: ValueStack): ValueStack {
    try {
      if (stack.length < 2) {
        throw new Error('Not enough stack elements');
      }
      const [x, y, ...rest] = stack;
      const result = this.doOperation(x, y);
      return [result, ...rest];
    } catch (error) {
      return stack;
    }
  }

  abstract doOperation(x: number, y: number): number;
}


export class Sum extends BinaryOperation {
  doOperation(x: number, y: number): number {
    return x + y;
  }
}

export class Subtract extends BinaryOperation{
  doOperation(x: number, y: number): number {
    return x - y;
  }
}

export class Multiply extends BinaryOperation{
  doOperation(x: number, y: number): number {
    return x * y;
  }
}

export class Divide extends BinaryOperation{
  doOperation(x: number, y: number): number {
    if (y === 0) {
      throw new Error('Divide by zero');
    }
    return x / y;
  }
}
