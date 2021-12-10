export abstract class DataItem {
  abstract receive(number: number): string;
}

export class NumericItem extends DataItem {
  private limit: number;

  constructor(private value: number) {
    super();
    this.limit = value;
  }

  receive(value: number): string {

    if (this.limit < value) {
      return `${this.limit} is acceptable`;
    }
    return `${this.limit} is not acceptable`;
  }
}

export class BooleanItem extends DataItem {
  private firstBool: boolean;
  private secondBool: boolean;

  constructor(private first: boolean, private second: boolean) {
    super();
    this.firstBool = first;
    this.secondBool = second;
  }

  receive(value: number): string {
    if (this.firstBool && this.secondBool) {
      return `It's all true`;
    } else {
      return `:(`;
    }
  }
}
