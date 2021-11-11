type ValueStack = number[];

export class Sum {
  doIt(stack: ValueStack): ValueStack {
    try {
      if (stack.length < 2) {
        throw new Error('Not enough stack elements');
      }
      const [x, y, ...rest] = stack;
      const result = x + y;
      return [result, ...rest];
    } catch (error) {
      return stack;
    }
  }
}

export class Subtract {
  doIt(stack: ValueStack): ValueStack {
    try {
      if (stack.length < 2) {
        throw new Error('Not enough stack elements');
      }
      const [x, y, ...rest] = stack;
      const result = x - y;
      return [result, ...rest];
    } catch (error) {
      return stack;
    }
  }
}

export class Multiply {
  doIt(stack: ValueStack): ValueStack {
    try {
      if (stack.length < 2) {
        throw new Error('Not enough stack elements');
      }
      const [x, y, ...rest] = stack;
      const result = x * y;
      return [result, ...rest];
    } catch (error) {
      return stack;
    }
  }
}

export class Divide {
  doIt(stack: ValueStack): ValueStack {
    try {
      if (stack.length < 2) {
        throw new Error('Not enough stack elements');
      }
      const [x, y, ...rest] = stack;
      if (y === 0) {
        throw new Error('Divide by zero');
      }
      const result = x / y;
      return [result, ...rest];
    } catch (error) {
      return stack;
    }
  }
}
