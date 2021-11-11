import { Visitor } from './Visitor';

export abstract class DataItem {
  abstract receive(visitor: Visitor): string;
}

export class NumericItem extends DataItem {
  constructor(private value: number) {
    super();
  }

  receive(visitor: Visitor): string {
    return visitor.visitNumeric(this.value);
  }
}

export class BooleanItem extends DataItem {
  constructor(private first: boolean, private second: boolean) {
    super();
  }

  receive(visitor: Visitor): string {
    return visitor.visitBoolean(this.first, this.second);
  }
}
