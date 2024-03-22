import { ILexer, ITokenizer, ITextToken, ITextReader } from "@/interfaces";

export class CLineTextLexer implements ILexer{
  private _tokens: ITextToken[];

  constructor() {
    this._tokens = [];
  }

  add(token: ITextToken) {
    
  }

  serialize(joiner: string): string {
    //@TODO
    return this._tokens.join(joiner);
  }
}

export class CLineTextTokenizer implements ITokenizer{
  tokenize(reader:ITextReader):ILexer {
    return tokenize(reader);
  }
}

const tokenize = (reader:ITextReader):ILexer => {
  const lexer = new CLineTextLexer()

  return lexer;
}

export class CTextToken implements ITextToken {
  private _type: string;
  private _chars: string;

  constructor(type:string, chars: string | string[]) {
    this._type = type;
    if( Array.isArray(chars)) {
      this._chars = chars.join("");
    } else {
      this._chars = chars;
    }
    
  }

  get type() {
    return this._type;
  }

  get chars() {
    return this._chars;
  }

  toString() {
    return this._chars;
  }
}
