import { BooleanItem, DataItem, NumericItem } from './DataItem';
import { LastVisitor } from './LastVisitor';

type ItemType = DataItem;

export function itemFromNumber(value: number): ItemType {
  return new NumericItem(value);
}

export function itemFromBoolean(first: boolean, second: boolean): ItemType {
  return new BooleanItem(first, second);
}

export function itemAnalysis(limit: number, item: ItemType): string {
  const visitor = new LastVisitor(limit);
  return item.receive(visitor);
}
