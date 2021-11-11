import { Sum, Subtract, Multiply, Divide } from '../src/exercise1';

describe('Template method', function() {
  describe('Sum', () => {
    it('Returns the same stack if not enough args', () => {
      const res = new Sum().doIt([]);
      expect(res).toEqual([]);
    });

    it('Operates on the start of the stack', () => {
      const res = new Sum().doIt([1, 2, 3]);
      expect(res).toEqual([3, 3]);
    });
  });

  describe('Subtract', () => {
    it('Returns the same stack if not enough args', () => {
      const res = new Subtract().doIt([]);
      expect(res).toEqual([]);
    });

    it('Operates on the start of the stack', () => {
      const res = new Subtract().doIt([1, 2, 3]);
      expect(res).toEqual([-1, 3]);
    });
  });

  describe('Multiply', () => {
    it('Returns the same stack if not enough args', () => {
      const res = new Multiply().doIt([]);
      expect(res).toEqual([]);
    });

    it('Operates on the start of the stack', () => {
      const res = new Multiply().doIt([1, 2, 3]);
      expect(res).toEqual([2, 3]);
    });
  });

  describe('Divide', () => {
    it('Returns the same stack if not enough args', () => {
      const res = new Divide().doIt([]);
      expect(res).toEqual([]);
    });

    it('Returns the same stack if dividing by 0', () => {
      const res = new Divide().doIt([1, 0, 3]);
      expect(res).toEqual([1, 0, 3]);
    });

    it('Operates on the start of the stack', () => {
      const res = new Divide().doIt([1, 2, 3]);
      expect(res).toEqual([0.5, 3]);
    });
  });
});
