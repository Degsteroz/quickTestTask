export interface ICartElement {
  price: number,
  count: number

  changeCount(count: number): void;
}
