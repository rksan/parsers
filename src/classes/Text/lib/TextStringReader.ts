import { ITextReader } from "@/interfaces";

export class CTextStringReaer implements ITextReader {
  private _buffer: string;
  private _idx: number;

  constructor(buffer:string) {
    this._buffer = buffer;
    this._idx = 0;
  }

  get isEOB(): boolean {
    return this._buffer.length < (this._idx + 1)
  }

  get potition(): number {
    return this._idx;
  }

  peek() {
    return Promise.resolve(this.isEOB ? null : this._buffer.charAt(this._idx));
  }

  next() {
    const promise = this.peek();

    this._idx++;

    return promise;
  }
}
