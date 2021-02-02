export default abstract class Card {
  constructor(
    protected id: number,
    protected text: string,
    protected type: number
  ) {}
}
