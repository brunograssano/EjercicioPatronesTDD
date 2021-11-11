export type Visitor = {
  visitNumeric: (value: number) => string;
  visitBoolean: (first: boolean, second: boolean) => string;
};
