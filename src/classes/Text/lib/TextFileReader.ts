import { TEXT_CHAR_CODE } from "@/const";
import { ITextReader } from "@/interfaces";

export class CTextFileReader implements ITextReader{
  private _blob: Blob;
  private _encode: string;
  private _reader:FileReader
  private _buffer: string | ArrayBuffer | null;

  constructor(blob: Blob, encode:string) {
    this._blob = blob;
    this._buffer = null;

    this._encode = encode;
  }

  private _getString(buffer: ArrayBuffer, length: number) {
    const buf = buffer.slice(1, length);
    const chars: string[] = [];
    for (var i = 0; i < buf.byteLength; i++){
      chars[i] = String.fromCodePoint(Number(buf));
    }
    return chars.join("");
  }

  private _loadBuffer() {
    return new Promise((resolve, reject) => {
      if (this._reader === null){
        const reader = new FileReader;

        reader.onloadend = () => { 
          const result = reader.result;

          if(result instanceof ArrayBuffer) {
            resolve(this._getString(result, 1))
          } else {
            resolve(result)
          }
        }

        reader.onabort = () => {
          reject(reader.error);
        }

        reader.onerror = () => {
          reject(reader.error);
        }

        reader.readAsArrayBuffer(this._blob);
      }else if (this._buffer === null) {
        
      } else {
        
      }
    })
  }

  peek() {
    const promise = this._loadBuffer();
    return promise;
  }

}