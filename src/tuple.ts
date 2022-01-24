export {};

let profile: [string, number] = ['Tom', 29];
profile = ['Hori', 29];

console.log(profile)



function getResult(): [number, string] {
  return [404, 'Not Found'];
}

const result = getResult();
console.log(result);

// タプル型は複数の値を保持して、複数の値を返すことができる型

// 非同期するときに直列ではなく、並列で行いたいとき
//  https://typescriptbook.jp/reference/values-types-variables/tuple