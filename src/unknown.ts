export {};

const kansu = (): number => 100;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

// typeofを使ってある特定の型であることを確認しながらコードを安全に実行させることを型ガードという
// 条件分岐の際に、型推論で自動的に型を絞り込んでくる