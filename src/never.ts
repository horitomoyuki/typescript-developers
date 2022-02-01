export {};

// 関数の中で例外を起こす
// neverは値の概念がないので関数の呼び元に戻ってこない
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
  error('test')
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// void型にはundefinedが含まれているので代入できる
let bar: never = error('only me!');
// error関数をnever型に指定しているものはnever型の変数に代入できる
