export interface ITextReader{
  get isEOB(): boolean;
  get potition(): number;
  peek(): Promise<string|null>;
  next(): Promise<string|null>;
}