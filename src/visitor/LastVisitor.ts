import { Visitor } from './Visitor';

export class LastVisitor implements Visitor {
  constructor(private limit: number) {}

  visitNumeric(value: number): string {
    if (value < this.limit) {
      return `${value} is acceptable`;
    } else {
      return `${value} is not acceptable`;
    }
  }

  visitBoolean(first: boolean, second: boolean): string {
    if (first && second) {
      return `It's all true`;
    } else {
      return `:(`;
    }
  }
}
