import type { ITextReader } from "../text";

// interfaces
export interface ILexer extends IObject{
  add(token: ITextToken): void;
  serialize(joiner:string): string;
}

export interface ITokenizer extends IObject{
  tokenize(reader:ITextReader): ILexer
}

export interface ITextToken extends IObject{
  get type() : string;
  get chars(): string;
  toString(): string;
}

export interface IObject{
  toString(): string
}