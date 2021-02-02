export default class Puzzle {
  constructor(
    private id: number,
    private paragraph: unknown,
    private parts: number[],
    private price: string,
    private solution: string
  ) {}
}
