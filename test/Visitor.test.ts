import { itemAnalysis, itemFromBoolean, itemFromNumber } from '../src/visitor';

describe('Visitor', function() {
  describe('Numbers', () => {
    it('At limit', () => {
      const item = itemFromNumber(2);
      expect(itemAnalysis(2, item)).toEqual('2 is not acceptable');
    });

    it('Below limit', () => {
      const item = itemFromNumber(3);
      expect(itemAnalysis(4, item)).toEqual('3 is acceptable');
    });

    it('Over limit', () => {
      const item = itemFromNumber(7);
      expect(itemAnalysis(5, item)).toEqual('7 is not acceptable');
    });
  });

  describe('Booleans', () => {
    describe('First true', () => {
      const first = true;
      it('Second true', () => {
        const second = true;
        const item = itemFromBoolean(first, second);
        expect(itemAnalysis(1, item)).toEqual("It's all true");
      });

      it('Second false', () => {
        const second = false;
        const item = itemFromBoolean(first, second);
        expect(itemAnalysis(1, item)).toEqual(':(');
      });
    });

    describe('First false', () => {
      const first = false;
      it('Second true', () => {
        const second = true;
        const item = itemFromBoolean(first, second);
        expect(itemAnalysis(1, item)).toEqual(':(');
      });

      it('Second false', () => {
        const second = false;
        const item = itemFromBoolean(first, second);
        expect(itemAnalysis(1, item)).toEqual(':(');
      });
    });
  });
});
